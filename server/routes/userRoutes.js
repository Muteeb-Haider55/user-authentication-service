import { Router } from "express";
import { getUserData } from "../controllers/userContoller.js";
import userAuth from "../middleware/userAuth.js";
const userRouter = Router();

userRouter.get("/data", userAuth, getUserData);

export default userRouter;
