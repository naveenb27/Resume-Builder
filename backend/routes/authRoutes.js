import { login, signup } from '../controller/authController.js';
import express from 'express';
import authMiddleware from '../middleware.js/authMiddleware.js';
import FindUser from '../utils/FindUser.js';

const authRouter = express.Router();

authRouter.post('/login', login);
authRouter.post('/signup', signup);
authRouter.get('/getUser', authMiddleware, FindUser);

export default authRouter;
