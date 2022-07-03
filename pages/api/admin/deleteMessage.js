import { auth } from '../../../lib/firebase';
import { db } from '../../../lib/firebase-admin';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { createdAt } = req.body;
    const { slug } = req.body;
    const uid = auth.currentUser.uid;
    if (uid != null && (await db.collection('admins').doc(uid).get()).exists) {
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
      res.status(200);
    }
  } else {
    res.status(405).json({
      message: 'Method not allowed',
    });
  }
}
