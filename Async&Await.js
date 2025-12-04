function getUserdetails(id){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({rollno:"456"})
        }, 2000);
        
    })
}
function getSubjectid(rollno){
    return new Promise((resolve,reject)=>{
         setTimeout(() => {
            resolve({subjectid:"789"})
        }, 3000);
    
    })
}
function getSubjectmarks(subjectid){
    return subjectid;
}
const myfun=async()=>{
    console.log("123")
    const result=await getUserdetails("456");
    console.log(result);
    const result2=await getSubjectid("789");
    console.log(result2);
    console.log("final Marks")
    
   
}
myfun();