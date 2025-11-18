import { Router } from "express";
import  userRouter from "./user.mjs";

const routers = Router();
routers.use('/user', userRouter);
routers.use('/projects', userRouter);

export default routers;