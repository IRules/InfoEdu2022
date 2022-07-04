import Filter from 'bad-words';
import { auth } from '../../lib/firebase';
import { db } from '../../lib/firebase-admin';
const filter = new Filter();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { message } = req.body;
    const { uid } = req.body;
    const { createdAt } = req.body;
    const { slug } = req.body;
    if (uid && !(await db.collection('users').doc(uid).get()).data().banned) {
      if (filter.isProfane(message)) {
        res.status(400).json({
          message: 'Profanity detected',
        });
      } else {
        await db
          .collection('facultati')
          .doc(slug)
          .collection('chat')
          .add({
            msg: message,
            createdAt: createdAt,
            name: (await db.collection('users').doc(uid).get()).data().name,
            uid: uid,
          });

        res.status(200).json({
          message: 'Success!',
        });
      }
    } else {
      res.status(401).json({
        message: 'Not logged in!',
      });
    }
  } else {
    res.status(405).json({
      message: 'Method not allowed',
    });
  }
}
