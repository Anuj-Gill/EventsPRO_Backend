import mongoose from 'mongoose';

const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    rollNo: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    division: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    role: {
        default: "Student"
    },
    events: {
        default: []
    },
    isActive: {
        type: Boolean,
        default: false
    }
});

export const studentModel = mongoose.model("students",StudentSchema);