import { NextApiRequest, NextApiResponse } from "next";
import { User } from "../../app/models/User";
import { initializeDatabase } from "../../utils/sequelize";
import jwt from "jsonwebtoken";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await initializeDatabase(); // เรียกใช้ initializeDatabase ที่นี่

  if (req.method === "POST") {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });
    if (user && (await user.comparePassword(password))) {
      const token = jwt.sign(
        { username: user.username, role: user.role },
        process.env.JWT_SECRET as string,
        { expiresIn: "1h" }
      );
      res.status(200).json({ message: "Login successful", token });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
