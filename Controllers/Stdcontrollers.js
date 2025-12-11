const getStudents=(req,res)=>{
    let stdData={name:"Lahari",rollno:"555"}
    res.status(200).json({Data:stdData});
};
const addData=(req,res)=>{
    res.status(200).json({Message:"data added"})
}
export  {getStudents,addData};