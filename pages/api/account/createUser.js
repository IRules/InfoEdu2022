import Filter from 'bad-words';
import { db } from '../../../lib/firebase-admin';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default async function handler(req, res) {
  try {
    if (req.method === 'POST') {
      const { token } = req.body;
      if (token == '') {
        const { username } = req.body;
        const filter = new Filter();
        if (filter.isProfane(username)) {
          res.status(400).json({
            message: 'Profanity detected',
          });
        } else {
          const { password } = req.body;
          const { email } = req.body;

          createUserWithEmailAndPassword(auth, email, password)
            .then((user) => {
              db.collection('users').doc(user.user.uid).set({
                name: username,
                buget: 0,
                medieBac: 0,
                banned: false,
              });
              res.status(200).json({
                message: 'Success!',
              });
            })
            .catch((error) => {
              res.status(400).json({
                message: error.message,
              });
            });
        }
      } else {
        res.status(401).json({
          message: 'Unauthorized',
        });
      }
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
