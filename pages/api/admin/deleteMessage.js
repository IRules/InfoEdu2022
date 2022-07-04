import { auth } from '../../../lib/firebase';
import { db } from '../../../lib/firebase-admin';

export default async function handler(req, res) {
  try {
    if (req.method === 'POST') {
      const { createdAt } = req.body;
      const { slug } = req.body;
      const uid = await auth.currentUser.uid;
      if (
        (await uid) != null &&
        (await db.collection('admins').doc(uid).get()).exists
      ) {
        res.status(200).json({
          message: 'Success!',
        });
        await db
          .collection('facultati')
          .doc(slug)
          .collection('chat')
          .where('createdAt', '==', createdAt)
          .get()
          .then((snapshot) => {
            snapshot.forEach((doc) => {
              doc.ref.delete();
            });
          });
      } else {
        res.status(401).json({
          message: 'Not admin!',
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
