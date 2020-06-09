const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const internship = new Schema({
    profile: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    startDisplayDate: {
        type: String,
        required: true
    },
    stipend: {
        type: String,
        required: true
    },
    perks: {
        type: Array
    },
    description: {
        type: String,
        required: true
    },
    skills: {
        type: String,
        required: true
    },
    questions: {
        type: String,
    },
    companyLogo: {
        type: String,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'Admin',
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Internship', internship);