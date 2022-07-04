import { authAdmin, db } from '../../../lib/firebase-admin';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { token } = req.body;
    authAdmin.verifyIdToken(token).then(async function (decodedToken) {
      if ((await db.collection('users').doc(decodedToken.uid).get()).exists) {
        res.status(200).json({
          message: 'Success!',
        });
      } else {
        const { name } = req.body;
        await db
          .collection('users')
          .doc(decodedToken.uid)
          .set({
            name: name,
            buget: 0,
            medieBac: 0,
            banned: false,
          })
          .then(() => {
            res.status(200).json({
              message: 'Success!',
            });
          });
      }
    });
  } else {
    res.status(400).json({
      message: 'Method not allowed',
    });
  }
}
