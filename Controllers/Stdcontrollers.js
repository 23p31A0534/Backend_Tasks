import student from "../Models/studentsModels.js";

const getStudentsDetails = async(req, res) => {
    try{
            const mydata = await student.find();
            // const mydata = await student.findOne();
            // const mydata = await student.findById({_id: "694b80caf0cee6258678668e"})
            res.status(200).json(mydata);
    }catch(error){
        console.log(error);
        res.status(500).json({error: error.message})
    }

};
const addStudents = async(req, res) => {
    try{
         const data = req.body;
    console.log(data);
    // const addeddata = await student.create(data)
    // ;
    const addeddata = await student.insertMany(data);
    console.log(addeddata);
    res.status(201).json("data added");
    }catch(error){
        res.status(500).json({error: error.message})
    }
};
const getStudentsById =async(req,res)=>{
    try{
        const id=req.params.userid;
        console.log("id:",id)
        const data=await student.findById({_id:id});
        console.log(data);
        res.status(200).json(data);
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
}
const getStudentsDetailsWithFilters = async(req, res) => {
    try{
        const {stdBranch, stdCollege, stdCgpa} = req.query;
        console.log("stdBranch :", stdBranch);
        console.log("stdCollege :", stdCollege);
        console.log("stdCgpa :", stdCgpa);
        res.status(200).json("success");
    }catch(error){
        res.status(500).json({error: error.message})
    }

}
const updateStudents=async(req,res)=>{
    const {id}=req.params;
    const data=req.body;
    try{
    // const updateData=await student.findOneAndUpdate({stdRoll:id},data,{new:true});
    const updateData=await student.findByIdAndUpdate({_id:id},data,{new:true})
    if(!updateData){
        return res.status(404).json({message:"user not found"});
    }
    else{
        return res.status(200).json({student:updateData,message:"student updated"})
    }          
}

catch(error){
    return res.status(500).json({error: error.message})
}
}
const updateStudentsStatus=async(req,res)=>{
    try{
        await student.updateMany(
            {status:true},
            {$set:{status:false}}
        )
        return res.status(200).json({message:"status updated"})
    }
    catch(error){
    return res.status(500).json({error: error.message})

    }
}

export {getStudentsDetails, addStudents,getStudentsById,getStudentsDetailsWithFilters,updateStudents,updateStudentsStatus};



















// const getStudents=(req,res)=>{
//     let stdData={name:"Lahari",rollno:"555"}
//     res.status(200).json({Data:stdData});
// };
// const addData=(req,res)=>{
//     let stdData={name:"Alice",rollno:"630"}
//     res.status(201).json({Message:"data added"})
// }
// export  {getStudents,addData};