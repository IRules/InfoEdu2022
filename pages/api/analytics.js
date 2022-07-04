import { auth } from '../../lib/firebase';
import { db } from '../../lib/firebase-admin';

const user = auth.currentUser;

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { pid } = req.body;
    if ((await db.collection('facultati').doc(pid).get()).exists) {
      await db
        .collection('facultati')
        .doc(pid)
        .update({
          vizite:
            (await db.collection('facultati').doc(pid).get()).data().vizite + 1,
        });
      res.status(200).json({
        message: 'Success!',
      });
    } else {
      res.status(404).json({
        message: 'Not found',
      });
    }
  }
}
