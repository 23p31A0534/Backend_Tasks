const express=require('express')
const app=express();
const path=require('path');
const cors=require('cors')
const mongoose=require('mongoose')
const Stdrouter=require("./Routers/Stdrouter.js")
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb+srv://mslahari05_db_user:Lahari27@firstcluster.343edhl.mongodb.net/").then(() => console.log("db connected"))
.catch((error) => console.log(error));
app.use('/',Stdrouter);




app.use(
  cors({
    origin: "http://localhost:5173", 
    credentials: true         
  })
);

app.use(express.static(path.join(__dirname,"uploads")))

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
