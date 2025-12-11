import express from 'express';
<<<<<<< HEAD
import stdrouter from './Routers/Stdrouter.js';
const app=express();
app.use('/',stdrouter);
// app.get('/users',(req,res)=>{
//     res.send("This is also backend");
// })
// app.get('/get-users',(req,res)=>{
//     res.send("hello this backend")
// })
app.listen(7008,()=>{
    console.log("This is express world");
})
=======
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
>>>>>>> 72f8f12dd2bc08c8f38ffd381c673505bd4eec6a
