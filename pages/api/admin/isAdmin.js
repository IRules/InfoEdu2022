import { authAdmin, db } from '../../../lib/firebase-admin';

export default async function handler(req, res) {
  try {
    if (req.method === 'POST') {
      const { token } = req.body;
      authAdmin.verifyIdToken(token).then(async function (decodedToken) {
        if (
          (await db.collection('admins').doc(decodedToken.uid).get()).exists
        ) {
          res.status(200).json({
            isAdmin: true,
          });
        } else {
          res.status(401).json({
            isAdmin: false,
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
