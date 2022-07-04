import { db } from '../../../lib/firebase-admin';
import Filter from 'bad-words';
import { auth } from '../../../lib/firebase';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    if ((await auth.currentUser) == null) {
      res.status(401).json({
        message: 'Not logged in',
      });
    } else {
      const { name } = req.body;
      const filter = new Filter();
      if (filter.isProfane(name)) {
        res.status(400).json({
          message: 'Profanity detected',
        });
      } else {
        await db.collection('users').doc(auth.currentUser.uid).update({
          name: name,
        });
        res.status(200).json({
          message: 'Success!',
        });
      }
    }
  } else {
    res.status(405).json({
      message: 'Method not allowed',
    });
  }
}
