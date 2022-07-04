import Filter from 'bad-words';
import { auth } from '../../lib/firebase';
import { db } from '../../lib/firebase-admin';
const filter = new Filter();

export default async function handler(req, res) {
  try {
    if (req.method === 'POST') {
      const user = await auth.currentUser;
      const { review } = req.body;
      const { uid } = req.body;
      const { createdAt } = req.body;
      const { slug } = req.body;
      const { rating } = req.body;
      if (
        (await user.uid) === uid &&
        !(await db.collection('users').doc(uid).get()).data().banned
      ) {
        if (filter.isProfane(review)) {
          res.status(400).json({
            message: 'Profanity detected',
          });
        } else if (rating < 5.1 || rating > 0.5) {
          await db
            .collection('facultati')
            .doc(slug)
            .collection('reviews')
            .add({
              text: review,
              createdAt: createdAt,
              name: (await db.collection('users').doc(uid).get()).data().name,
              rating: parseFloat(rating),
              uid: uid,
            });

          await db
            .collection('facultati')
            .doc(slug)
            .update({
              sumReviews:
                (await db.collection('facultati').doc(slug).get()).data()
                  .sumReviews + parseFloat(rating),
              nrReviews:
                (await db.collection('facultati').doc(slug).get()).data()
                  .nrReviews + 1,
            });

          res.status(200).json({
            message: 'Success!',
          });
        } else {
          res.status(400).json({
            message: 'Rating must be between 0.5 and 5.1',
          });
        }
      } else {
        res.status(401).json({
          message: 'Not logged in!',
        });
      }
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
