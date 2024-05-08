import mongoose from "mongoose";

const students_schema = new mongoose.Schema({
    student_name: {
        type: String,
        trim: true,
        required: true
    },
    roll_no: {
        type: String,
        trim: true,
        required: true,
    },
    class_ref: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Class'
    },
    school_ref: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Schools'
    }
})
export default mongoose.model('Students', students_schema)