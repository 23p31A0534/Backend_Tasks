function getUserdeatails(id,getUserName){
    
    console.log("The user id is",id);
    getUserName(names="John");
}
function getUserName(names,getuserBill){
    console.log("The user name is",names);
    getuserBill(bill="250000")
}
function getuserBill(Totals){
    console.log("Total bill is",Totals);
}
getUserdeatails("123",function(names){
    getUserName(names,function(bill){
        getuserBill(bill)
    })
})


// const mypromise=new Promise((resolve,reject)=>{
//     if(true){
//         console.log("if exec")
//         resolve("success call")
//     }
//     else{
//         console.log("else exec")
//         reject("api failed");
//     }
// })
// mypromise.then((result)=>
// console.log(result))
// .catch((error)=>console.log(error));
