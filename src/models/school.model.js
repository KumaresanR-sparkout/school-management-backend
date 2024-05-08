import mongoose from "mongoose";
const school_schema = new mongoose.Schema({
    school_name: {
        type: String,
        trim: true,
        required: true
    },
    medium: {
        type: [String],
        enum: ['tamil', 'english'],
        required: true
    },
    school_type: {
        type: String,
        trim: true,
        required: true
    }
})

export default mongoose.model('Schools', school_schema)