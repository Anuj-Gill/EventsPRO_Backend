import mongoose from 'mongoose';

const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    rollNo: {
        type: String,
        required: true
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
    year: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    role: {
        type: String,
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