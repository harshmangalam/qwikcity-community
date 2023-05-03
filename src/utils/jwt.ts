import { type JwtPayload, sign, verify } from "jsonwebtoken";

async function verifyToken(
  token: string,
  secret: string
): Promise<string | JwtPayload> {
  return new Promise((resolve, reject) => {
    try {
      const payload = verify(token, secret);
      resolve(payload);
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
