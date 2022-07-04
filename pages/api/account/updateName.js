import { authAdmin, db } from '../../../lib/firebase-admin';
import Filter from 'bad-words';

export default async function handler(req, res) {
  try {
    if (req.method === 'POST') {
      const { token } = req.body;
      authAdmin.verifyIdToken(token).then(async function (decodedToken) {
        const { name } = req.body;
        const filter = new Filter();
        if (filter.isProfane(name)) {
          res.status(400).json({
            message: 'Profanity detected',
          });
        } else {
          await db.collection('users').doc(decodedToken.uid).update({
            name: name,
          });
          res.status(200).json({
            message: 'Success!',
          });
        }
      });
    } else {
      res.status(400).json({
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
