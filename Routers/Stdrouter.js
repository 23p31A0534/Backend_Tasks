import express from 'express';
import {getStudents,  addData } from "../Controllers/Stdcontrollers.js";
const router=express.Router();
router.get('/get-users',getStudents);
router.post('/add-users',addData)
export default router;
