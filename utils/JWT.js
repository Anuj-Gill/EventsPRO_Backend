import jwt from 'jsonwebtoken';

export function signToken(data) {
  return jwt.sign(data, process.env.SECRET_KEY, { expiresIn: "7d" });
}

export async function verifyToken(token) {
  try {
    const decoded = await jwt.verify(token, process.env.SECRET_KEY);
    console.log("in JWT", decoded);
    return decoded;
  } catch (err) {
    throw new Error('Authentication failed: Invalid token.');
  }
}
