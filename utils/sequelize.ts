import { Sequelize } from "sequelize-typescript";
import { User } from "@/app/models/User";

console.log(`🚀 ~ process.env.DB_NAME:`, process.env.DB_NAME)
console.log(`🚀 ~ process.env.DB_USER:`, process.env.DB_USER)
console.log(`🚀 ~ process.env.DB_PASS:`, process.env.DB_PASS)
console.log(`🚀 ~ process.env.DB_HOST:`, process.env.DB_HOST)
console.log(`🚀 ~ process.env.NODE_ENV:`, process.env.NODE_ENV)
const sequelize = new Sequelize({
  database: process.env.DB_NAME || "next_db",
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "isylzklodd",
  dialect: "mysql",
  host: process.env.DB_HOST || "localhost",
  models: [User],
});

export const initializeDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    await sequelize.sync({ alter: true });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export default sequelize;
