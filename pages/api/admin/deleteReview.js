import { authAdmin, db } from '../../../lib/firebase-admin';

export default async function handler(req, res) {
  try {
    if (req.method === 'POST') {
      const { createdAt } = req.body;
      const { slug } = req.body;
      const { token } = req.body;
      authAdmin.verifyIdToken(token).then(async function (decodedToken) {
        if (
          (await db.collection('admins').doc(decodedToken.uid).get()).exists
        ) {
          await db
            .collection('facultati')
            .doc(slug)
            .update({
              nrReviews:
                (await db.collection('facultati').doc(slug).get()).data()
                  .nrReviews - 1,
              sumReviews:
                (await db.collection('facultati').doc(slug).get()).data()
                  .sumReviews -
                (
                  await db
                    .collection('facultati')
                    .doc(slug)
                    .collection('reviews')
                    .where('createdAt', '==', createdAt)
                    .get()
                ).docs[0].data().rating,
            });
          await db
            .collection('facultati')
            .doc(slug)
            .collection('reviews')
            .where('createdAt', '==', createdAt)
            .get()
            .then((snapshot) => {
              snapshot.forEach((doc) => {
                doc.ref.delete();
              });
            });
          res.status(200).json({
            message: 'Success!',
          });
        } else {
          res.status(401).json({
            message: 'Not logged in',
          });
        }
      });
    } else {
      res.status(405).json({
        message: 'Method not allowed',
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
}
