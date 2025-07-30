import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config(); //

const connectDB = async () => {
  await mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("Db connected");
  });
};

export default connectDB;
