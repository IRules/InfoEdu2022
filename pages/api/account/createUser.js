import { auth } from '../../../lib/firebase';
import Filter from 'bad-words';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    if (auth.currentUser != null) {
      const { username } = req.body;
      const { email } = req.body;
      const { password } = req.body;
      const filter = new Filter();
    } else {
      res.status(401).json({
        message: 'Already has an account',
      });
    }
  } else {
    res.status(405).json({
      message: 'Method not allowed',
    });
  }
}
