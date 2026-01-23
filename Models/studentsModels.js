const mongoose=require('mongoose')
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    email : {
        type: String,
        required:true
    },
    phone: {
        type : Number,
        required:true
    },
    age:{
        type:Number

    }
});
module.exports= mongoose.model("form", studentSchema);

