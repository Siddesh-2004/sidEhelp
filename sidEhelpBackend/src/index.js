import connectDb from "./db/index.js";
import dotenv from 'dotenv';
dotenv.config({ path: './config.env' });
connectDb();
