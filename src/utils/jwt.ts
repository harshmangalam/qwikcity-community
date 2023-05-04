import { sign, verify } from "jsonwebtoken";

async function verifyToken(
  token: string,
  secret: string
): Promise<{ userId: string }> {
  return new Promise((resolve, reject) => {
    try {
      const payload = verify(token, secret);
      resolve(payload as { userId: string });
    } catch (err) {
      reject(err);
    }
  });
}

async function signToken(
  payload: Record<string, string>,
  secret: string
): Promise<string> {
  return new Promise((resolve) => {
    const data = sign(payload, secret);
    resolve(data);
  });
}

export { verifyToken, signToken };
