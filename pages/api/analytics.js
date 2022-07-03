import { auth } from '../../lib/firebase';
import { db } from '../../lib/firebase-admin';

const user = auth.currentUser;

export default async function handler(req, res) {
  //   db.collection('facultati').doc('ubb').update({
  //     name2: 'Universitatea Babeș-Bolya',
  //   });
  if (req.method === 'POST') {
    if ((await db.collection('admins').doc(user.uid).get()).exists) {
      res.status(200).json({
        message: 'Logged in',
      });
    } else {
      res.status(401).json({
        message: 'Not logged in',
      });
    }
  }
}
