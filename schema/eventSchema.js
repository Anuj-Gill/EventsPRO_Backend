import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema({
    eventName: {
        type: String,
        required: true
    },
    eventPoster: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    venue: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    mode : {
        type: String,
        required: true
    },
    socialHandles: {
        email: {
            type: String
        },
        website: {
            type: String
        },
        twitter: {
            type: String
        },
        instagram: {
            type: String
        }
    },
    prize: {
        type: String
    },
    entryFee: {
        type: String
    },
    contactDetails: [{
        name: {
            type: String,
            required: true
        },
        mob: {
            type: String,
            required: true
        }
    }],
    type: {
        type: String,
        enum: ['solo', 'team', 'both'],
        required: true
    },
    status: {
        type: String,
        default: "PendingEC"
    },
    committee: {
        type: String
    },
    proposalLink: {
        type: String,
        required: true
    },
    whatsappGroupLink: {
        type: String,
        required: true
    }
});

export const eventsModel =  mongoose.model('events', EventSchema);