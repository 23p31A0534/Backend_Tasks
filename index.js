import http from 'http';
const server=http.createServer((req,res)=>{
    if(req.url==="/users"){
        res.writeHead(200,{"Content-Type":"application/JSON"});
        res.end(JSON.stringify({name:"thub"}));
    }
    else{
    res.writeHead(200,{"content-Type":"text/plain"});
    res.end("This is backend")}
});
server.listen(7007,()=>{
    console.log(`server running at port ${7007}`)
})
//Basic start
// const server=http.createServer((req,res)=>{
//     res.writeHead(200,{"content-Type":"text/plain"});
//     res.end("This is backend")
// });