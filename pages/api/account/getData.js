import { auth } from 'firebase-admin';
import { db } from '../../../lib/firebase-admin';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    if (auth.currentUser == null) {
      res.status(401).json({
        message: 'Not logged in',
      });
    } else {
    }
  } else {
    res.status(405).json({
      message: 'Method not allowed',
    });
  }
}
