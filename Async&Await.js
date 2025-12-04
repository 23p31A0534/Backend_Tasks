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
            resolve({subjectid:"91011"})
        }, 3000);
    
    })
}
function getSubjectmarks(subjectid){
    return subjectid;
}
const myfun=async()=>{
    console.log("345")
    const res=await getUserdetails("678");
    console.log(res);
    const result2=await getSubjectid("789");
    console.log(result2);
    console.log("final Marks");
}
myfun();