// eslint-disable-next-line @typescript-eslint/no-var-requires
const bcrypt = require('bcrypt');

const saltRounds = 10;

export function encrypt(password: string): string {
  let hashedPassword = password;
  bcrypt.hash(password, saltRounds, (err: any, encrypted: string) => {
    if (err) throw err;
    hashedPassword = encrypted;
  });
  return hashedPassword;
}

export function verify(password: string, hash: string): boolean {
  let answer = false;
  bcrypt.compare(password, hash, (err: any, result: boolean) => {
    if (err) throw err;
    if (result) {
      answer = true;
    } else {
      answer = false;
    }
  });

  return answer;
}
