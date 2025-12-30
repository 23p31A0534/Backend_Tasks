import express from 'express';

const app= express();
app.use(express.json());

app.get('/get-user',(req,res)=>{
    res.send("api successfully executed");
})
app.post('/add-user',(req,res)=>{
    let data=req.body;
    console.log(data);
    res.send("this request");
})
app.put('/edit-user',(req,res)=>{
    let edit=req.body;
    console.log(edit);
    res.send("edited data");
})

app.delete('/delete-user',(req,res)=>{
    let del=req.body;
    console.log(del);
    res.send("deleted data");
    

})
app.listen(7000,()=>{
    console.log("server running at 7000");
})