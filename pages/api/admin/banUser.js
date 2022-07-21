import { authAdmin, db } from '../../../lib/firebase-admin';

export default async function handler(req, res) {
  try {
    if (req.method === 'POST') {
      const { user } = req.body;
      const { token } = req.body;

      authAdmin.verifyIdToken(token).then(async function (decodedToken) {
        if (
          (await db.collection('admins').doc(decodedToken.uid).get()).exists
        ) {
          await db
            .collection('users')
            .doc(user)
            .update({
              banned: true,
            })
            .then(() => {
              res.status(200).json({
                message: 'Success!',
              });
            });
        } else {
          res.status(401).json({
            message: 'Not Admin',
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
