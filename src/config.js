import { config } from "dotenv";

config();

export default {
  host: process.env.HOST || "",
  user: process.env.USER || "",
  database: process.env.DATABASE || "",
  password: process.env.PASSWORD || "",
};
