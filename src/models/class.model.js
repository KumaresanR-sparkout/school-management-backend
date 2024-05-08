import mongoose from 'mongoose'

const class_schema=new mongoose.Schema({
    class_name:{
        type:String,
        trim:true,
        required:true
    },
    standarad:{
        type:Number,
        required:true
    },
    total_strength:{
        type:Number,
        default:null
    },
    school_ref:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Schools'
    }
})

export default mongoose.model('Class',class_schema)