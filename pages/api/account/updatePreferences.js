import { db } from '../../../lib/firebase-admin';
import { auth } from '../../../lib/firebase';

export default async function handler(req, res) {
  try {
    if (req.method === 'POST') {
      if ((await auth.currentUser) == null) {
        res.status(401).json({
          message: 'Not logged in',
        });
      } else {
        const { buget } = req.body;
        const { medieBac } = req.body;
        await db.collection('users').doc(auth.currentUser.uid).update({
          buget: buget,
          medieBac: medieBac,
        });
        res.status(200).json({
          message: 'Success!',
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
