import admin from '@/lib/firebase'

export default async function handler(req, res) {
    const firebase = admin.firestore()

    // Return promise to handle serverless function timeouts
    return new Promise((resolve, reject) => {
       firebase.then(() => {
          res.status(200).json({ data })
          res.end()
          resolve()
        })
        .catch((e) => {
          res.status(405).json(e)
          res.end()
          resolve()
        })
    }

}