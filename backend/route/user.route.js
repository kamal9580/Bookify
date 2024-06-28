import express from 'express';
import { signup,login} from '../controller/user.controller.js';

const router=express.Router();

router.post("/signup",signup);//we use post we send data to databases
router.post("/login",login);

export default router;