import { authAdmin, db } from '../../../lib/firebase-admin';
import { auth } from '../../../lib/firebase';

export default async function handler(req, res) {
  try {
    if (req.method === 'POST') {
      const { token } = req.body;
      authAdmin.verifyIdToken(token).then(async function (decodedToken) {
        const { buget } = req.body;
        const { medieBac } = req.body;

        await db
          .collection('users')
          .doc(decodedToken.uid)
          .update({
            buget: buget,
            medieBac: medieBac,
            bugetIndex: buget == 'mic' ? 0 : buget == 'mediu' ? 1 : 2,
          });
        res.status(200).json({
          message: 'Success!',
        });
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
