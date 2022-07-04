import { auth } from '../../../lib/firebase';
import { db } from '../../../lib/firebase-admin';

export default async function handler(req, res) {
  try {
    if (req.method === 'GET') {
      if (
        (await auth.currentUser) != null &&
        (await db.collection('admins').doc(auth.currentUser.uid).get()).exists
      ) {
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
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
}
