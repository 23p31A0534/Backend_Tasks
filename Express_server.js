import express from 'express';
import stdrouter from './Routers/Stdrouter.js';
import cors from 'cors';
import mongoose  from 'mongoose';
const app=express();
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb+srv://mslahari05_db_user:Lahari27@firstcluster.343edhl.mongodb.net/").then(() => console.log("db connected"))
.catch((error) => console.log(error));
app.use('/',stdrouter); 

app.get('/users',(req,res)=>{
    res.send("This is also backend");
})
app.get('/get-users',(req,res)=>{
    res.send("hello this backend")
})
app.post('/post-meth',(req,res)=>{
    res.send("This is post method");
})
app.listen(7008,()=>{
    console.log("This is express world");
})
