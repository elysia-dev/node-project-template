import { createUserController } from './../controller/userController';
import express from 'express';

export const userRouter = express.Router();

userRouter.get('/:id', createUserController());
