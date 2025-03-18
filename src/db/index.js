import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

export const connectDb = async () => {
  try {
    const connectionInstanse = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB connected!! DB HOST: ${connectionInstanse.connection.host}`
    );
  } catch (error) {
    console.log("MongoDB connection FAILED:", error);
    process.exit(1);
  }
};
