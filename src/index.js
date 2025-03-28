import { app } from "./app.js";
import { connectDb } from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./env",
});

connectDb()
  .then(() => {
    app.on("error", () => {
      console.log(`Server is unable to connecet to MongoDB.`);
      throw error;
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port: ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB connection Error:", error);
  });
