// eslint-disable-next-line @typescript-eslint/no-var-requires
const bcrypt = require('bcrypt');

const saltRounds = 10;

export async function encrypt(password: string): Promise<string> {
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
}

export async function verify(password: string, hash: string): Promise<boolean> {
  const answer = await bcrypt.compare(password, hash);
  return answer;
}
