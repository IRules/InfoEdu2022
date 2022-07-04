import { auth } from '../../../lib/firebase';
import { db } from '../../../lib/firebase-admin';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { createdAt } = req.body;
    const { slug } = req.body;
    const uid = await auth.currentUser.uid;
    if (
      (await uid) != null &&
      (await db.collection('admins').doc(uid).get()).exists
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
  } else {
    res.status(405).json({
      message: 'Method not allowed',
    });
  }
}
