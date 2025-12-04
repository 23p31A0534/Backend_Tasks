function getUserdeatails(id){
    return new Promise((resolve,reject)=>{
        resolve({names:"lahari"})
        console.log("fun1")
    })
   
}
function getUserName(names){
    return new Promise((resolve,reject)=>{
        resolve({bill:"250000"})
        console.log("fun2")
    })   
}

function getuserBill(Totals){
    
    return Totals;  
}
getUserdeatails("123").then((result)=>{
    return getUserName(result.names)
}).then((result)=>{
    return getuserBill(result.bill)
}).then((result)=>
console.log(result))
.catch((error) => console.log(error))