import express from "express";

import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./config/mongodb.js";
import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/userRoutes.js";
import cors from "cors";
const app = express();
const port = process.env.PORT || 4000;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173", // allow frontend dev server
    credentials: true, // if you’re using cookies or auth headers
  })
);
//api endpoints
app.get("/", (req, res) => res.send("api work"));
app.use("/api/auth", authRouter);

app.use("/api/user", userRouter);

app.listen(port, () => {
  console.log(`server is started on ${port}`);
});
