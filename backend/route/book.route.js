import express from "express";

import { getBook } from "../controller/book.controller.js";

const router=express.Router();

router.get("/",getBook);//jab ham get request kare "/" is url par to ham getbook par chale jaye

export default router;