import { authAdmin, db } from '../../../lib/firebase-admin';
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { token } = req.body;
    authAdmin.verifyIdToken(token).then(async function (decodedToken) {
      const { values } = req.body;

      let ok = true;
      values[0] = 0;

      for (let i = 0; i < values.length; i++) {
        try {
          parseInt(values[i]);
        } catch (error) {
          ok = false;
        }
        if (values[i] === null) {
          ok = false;
        }
      }
      if (ok) {
        const realist =
          values[1] +
          values[7] +
          values[13] +
          values[19] +
          values[25] +
          values[31] +
          values[37] +
          values[43] +
          values[49] +
          values[55] +
          values[61] +
          values[67] +
          values[73] +
          values[79] +
          values[85] +
          values[91] +
          values[97] +
          values[103] +
          values[109] +
          values[115];

        const conventional =
          values[2] +
          values[8] +
          values[14] +
          values[20] +
          values[26] +
          values[32] +
          values[38] +
          values[44] +
          values[50] +
          values[56] +
          values[62] +
          values[68] +
          values[74] +
          values[80] +
          values[86] +
          values[92] +
          values[98] +
          values[104] +
          values[110] +
          values[116];

        const social =
          values[3] +
          values[9] +
          values[15] +
          values[21] +
          values[27] +
          values[33] +
          values[39] +
          values[45] +
          values[51] +
          values[57] +
          values[63] +
          values[69] +
          values[75] +
          values[81] +
          values[87] +
          values[93] +
          values[99] +
          values[105] +
          values[111] +
          values[117];

        const investigagtiv =
          values[4] +
          values[10] +
          values[16] +
          values[22] +
          values[28] +
          values[34] +
          values[40] +
          values[46] +
          values[52] +
          values[58] +
          values[64] +
          values[70] +
          values[76] +
          values[82] +
          values[88] +
          values[94] +
          values[100] +
          values[106] +
          values[112] +
          values[118];

        const intreprinzator =
          values[5] +
          values[11] +
          values[17] +
          values[23] +
          values[29] +
          values[35] +
          values[41] +
          values[47] +
          values[53] +
          values[59] +
          values[65] +
          values[71] +
          values[77] +
          values[83] +
          values[89] +
          values[95] +
          values[101] +
          values[107] +
          values[113] +
          values[119];

        const artistic =
          values[6] +
          values[12] +
          values[18] +
          values[24] +
          values[30] +
          values[36] +
          values[42] +
          values[48] +
          values[54] +
          values[60] +
          values[66] +
          values[72] +
          values[78] +
          values[84] +
          values[90] +
          values[96] +
          values[102] +
          values[108] +
          values[114] +
          values[120];

        const nothing = 0;

        const result = [
          nothing,
          realist,
          conventional,
          social,
          investigagtiv,
          intreprinzator,
          artistic,
        ];

        let max = 0;
        let index = 0;

        for (let i = 1; i < 6; i++) {
          if (result[i] > max) {
            max = result[i];
            index = i;
          }
        }

        await db
          .collection('users')
          .doc(decodedToken.uid)
          .update({
            personality: index,
          })
          .then(() => {
            res.status(200).json({
              message: 'Success',
            });
          });
      } else {
        console.log('not ok');
        res.status(400).json({
          message: 'Invalid input',
        });
      }
    });
  } else {
    res.status(400).json({
      message: 'Method not allowed',
    });
  }
}
