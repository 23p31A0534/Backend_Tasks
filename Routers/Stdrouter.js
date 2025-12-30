import express from 'express';
const router=express.Router();

import {getStudentsDetails,  addStudents ,getStudentsById,getStudentsDetailsWithFilters, updateStudents,updateStudentsStatus} from "../Controllers/Stdcontrollers.js";
router.get('/get-users',getStudentsDetails);
router.post('/add-users',addStudents);
router.get('/get-student-ById/:userid',getStudentsById)
router.get('/get-std-details-withfilter',getStudentsDetailsWithFilters);
router.put('/update-students/:id',updateStudents)
router.put('/update-students-status',updateStudentsStatus)
export default router;
