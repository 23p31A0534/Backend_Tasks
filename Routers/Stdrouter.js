const express = require('express');
const route=express.Router();
const Stdcontrollers=require("../Controllers/Stdcontrollers.js")
const multer= require('multer');
const path=require('path');
const Storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"uploads")
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})
const FileFilters=(req,file,cb)=>{
    const AllowedTypes=/png|jpg|jpeg|svg/
    const extension =path.extname(file.originalname).toLowerCase()
    if(AllowedTypes.test(extension)){
        cb(null,true)
    }
    else{
        cb(new Error("Not valid format"))
    }
}
const Uplaod=multer({
    storage:Storage,
    fileFilter:FileFilters,
    limits:{
        fileSize:1024*1024*2
    }
})
// import {getStudentsDetails,  addStudents ,getStudentsById,getStudentsDetailsWithFilters, updateStudents,updateStudentsStatus} from "../Controllers/Stdcontrollers.js";
route.post('/add-data',Stdcontrollers.AddData);
route.get('/get-data/:email',Stdcontrollers.GetData);
route.put('update/:id',Stdcontrollers.UpdateData)
route.post('file-upload',Uplaod.array('file',3),Stdcontrollers.UploadFile)
// router.get('/get-users',getStudentsDetails);
// router.post('/add-users',addStudents);
// router.get('/get-student-ById/:userid',getStudentsById)
// router.get('/get-std-details-withfilter',getStudentsDetailsWithFilters);
// router.put('/update-students/:id',updateStudents)
// router.put('/update-students-status',updateStudentsStatus)
module.exports=route;
 