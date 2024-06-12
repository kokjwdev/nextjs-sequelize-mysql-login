import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { token } = req.body;
  const secret = process.env.JWT_SECRET || "";

  try {
    const decoded = jwt.verify(token, secret);
    res.status(200).json({ valid: true, decoded });
  } catch (error) {
    res.status(401).json({ valid: false, error: "Invalid token" });
  }
}
