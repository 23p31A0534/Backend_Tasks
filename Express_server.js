import express from 'express';
const app=express();
app.get('/users',(req,res)=>{
    res.send("This is also backend");
})
app.get('/get-users',(req,res)=>{
    res.send("hello this backend")
})
app.listen(7008,()=>{
    console.log("This is express");
})