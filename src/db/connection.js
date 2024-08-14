import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.DB_CONNECTION_URI}/${DB_NAME}`
    );
    console.log(
      `MongoDB Connected !! DB HOST: ${connectionInstance.connect.host}`
    );
  } catch (error) {
    console.log("MONGODB connection FAILD", error);
    process.exit(1);
  }
};

export default connectDB;
