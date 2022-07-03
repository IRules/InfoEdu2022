import { auth } from '../../../lib/firebase';
import { db } from '../../../lib/firebase-admin';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const uid = auth.currentUser.uid;
    if (uid != null && (await db.collection('admins').doc(uid).get()).exists) {
      res.status(200).json({
        isAdmin: true,
      });
    } else {
      res.status(401).json({
        isAdmin: false,
      });
    }
  } else {
    res.status(405).json({
      message: 'Method not allowed',
    });
  }
}
