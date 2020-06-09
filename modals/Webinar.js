const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const webinarSchame = new Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    displayDate: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    speakerName: {
        type: String,
        required: true
    },
    speakerDescription: {
        type: String,
        required: true
    },
    speakerImage: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    attend: {
        type: String,
        required: true
    },
    points: {
        type: String,
        required: true
    },
    share: {
        type: String,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Admin'
    },
    clicks: {
        type: Number,
        default: 0
    },
    shares: {
        type: Number,
        default: 0,
    },
    user: {
        users: [{
            name: { type: String },
            email: { type: String },
            contact: { type: Number },
            whatsappNo: { type: Number },
            registeredAt: { type: Date },
        }]
    }
}, { timestamps: true });

module.exports = mongoose.model('Webinar', webinarSchame);