import { NextApiRequest, NextApiResponse } from "next";
import * as jose from "jose";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const bearerToken = req.headers["authorization"] as string;

  if (!bearerToken) {
    return res
      .status(401)
      .json({ errorMessage: "Unauthorized request (no bearer token)" });
  }

  const token = bearerToken.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .json({ errorMessage: "Unauthorized request (no token)" });
  }

  const secret = new TextEncoder().encode(process.env.JWT_SECRET);

  try {
    await jose.jwtVerify(token, secret);
  } catch (error) {
    return res
      .status(401)
      .json({ errorMessage: "Unauthorized request (token invalid)" });
  }

  return res.json({ me: "Rakesh" });
}