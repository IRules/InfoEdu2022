import admin from 'firebase-admin';
import { getFirestore } from 'firebase-admin/firestore';
import { getAuth } from 'firebase-admin/auth';

const adminConfig = {
  type: 'service_account',
  project_id: 'projectalpha-4f185',
  private_key_id: '036e84ec608df7e5751cefe25a116c43bab6afa8',
  private_key:
    '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCroZNnPQxv18y1\nRjiqVLJ51ue2YZxiW+qIE+HQUKMA4ZwZquPbSkH82a3XU1Klkb2EgXwaM2u5usvq\nYkdR5os13Wp5cZbQV6ooluLl0Vics+13jrEwT7tgtDpcFI+4aHx6+vDt+s+916NI\nHE36UfvRNtoyhVBKakiF5/I/4w0R7df42JS5f+QKN50lBqfOVeWCPO0exzfJSZbG\nV5whSjEv6nJ9MYdWm/gSqQjFH7QH5s6iL5+M5nzBPpD+9CDgfoV+MxFpn7CnA7F6\nNTN9nIrZjrKgLWiaZKrh+z2EV6dsl53ukqN0JNH/ilf/CP3ND/Pkc9ksKBT3as0L\n+AT3t8BvAgMBAAECggEAPF2blTudJLdPmlCE/K/GiGEEZZrmYJf4oPzxNw4tjtFL\nUKHQ+5+eHvtHEA2P64kbkb/jMOn2EUC4mQsRD6bZPsxON0Gy7DtxL06GppNfqdoF\nA0COZLIecxBg2GMo+5DQe4bId8N4DssJ9IJ0EL+GJNs4mn1WNJ42PNbMVxkaTzv3\nJPrG0FfTbjAA4o91VGN90Wp0b+nJHjxa39O/uvwtQJaJgPvdivZTcBgf3mgu0BE4\nzlFBS8O2KDSG2RPrjCgRXMNJRn1c9nva/1EUlAi2FsBoojVovTpwwbQDXMXltwT5\n+j5As37S9MKoLvcoXm3avRGWJNW9puJnK2pAiMaBaQKBgQDgoOhnUfapS0zW3lGx\nF6ahMAmQOF8KQdYEmJxMXSRPWGi2wSsMx7gSoSySQbQ/tre7yE7zhRXvKZ4YGpe3\nuHjFmX+WWIu7yTG1nWxPBMlJOdZ8uyEo/HVPsYBzQTZGUsff/bWzgbLPHrlOqyJq\nfs5XmOjLLCtbTfaBgGnIg8mFRwKBgQDDmd1VKxb+wwhZYAfJztkLqLgjKUB06yaY\nAHIFqf6H5Beem87gQhflWYvg6LH7G8TZ6l0nJBAUoEmbDZbWmwkR8PGhN+5RkgSW\nuSlFnYWePkOWUO55SJgXMOSkIF2V2ClYeTtOVxUhw1+HFfKFlUyZHTMXqFQUfF5g\ncAki4YCfmQKBgQCzmDL4GJIr/OZsjMen3Y7+JNgglNF38/dXKWUdsQKM5dSi+YKf\n7zZ+vppSPXIN1trDqn1lOiy1UQLzpp9S5oy4/+cAn77o3w19dWXZL6x3fWS9ySfU\nCzUICJT4kVUBmMHxlnmmEbaS3q+t9CnKF6SGaN0HRENN9uF13OO2y5ddlQKBgHhn\ngH1q1u7f84XAvUqWz7iDlUXfoNPX5Jvwuj+OUyYnW/rAgmo9hSQjKR27X8PpZhWW\nVN1BL7zipiySAuX77Wtj2/mXylXgAn8dX7CAtL2iKkyfaQyziRvNdxEo8zLIKztQ\n9RbWOCXedDFdazqbmtktxkOr1IX/wMCwdo9ILLsRAoGAdF/3zr4cjhZtOqBjzd3G\n2Mw/6jEwoNxrtvoMBE/OIdHZb0JwhA7pkcxdIeMqFWHdkKAieO7XUWtW1Eq1VAot\nmvJOw9EoQGxAuOekf7x15doiru14aV9OBo2WbaS/vp3YQA3YaDyczN39OYXTH0eG\nO8e7i9IP8bPC33YmOVCMCrU=\n-----END PRIVATE KEY-----\n',
  client_email:
    'firebase-adminsdk-7h7nz@projectalpha-4f185.iam.gserviceaccount.com',
  client_id: '105637392168675252581',
  auth_uri: 'https://accounts.google.com/o/oauth2/auth',
  token_uri: 'https://oauth2.googleapis.com/token',
  auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
  client_x509_cert_url:
    'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-7h7nz%40projectalpha-4f185.iam.gserviceaccount.com',
};

try {
  admin.initializeApp({
    credential: admin.credential.cert(adminConfig),
  });
  console.log('Initialized.');
} catch (error) {
  if (!/already exists/u.test(error.message)) {
    console.error('Firebase admin initialization error', error.stack);
  }
}

const db = getFirestore();
const authAdmin = getAuth();

export { admin, db, authAdmin };
