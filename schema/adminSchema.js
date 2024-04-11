import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
    name: {
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
    role: {
        type: String,
        required: true
    },
    driveLink: {
        type: String,
    },
    committee: {
        type: String,
    }
});

export const adminModel = mongoose.model('admins', adminSchema);