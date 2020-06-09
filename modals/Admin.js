const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
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
    agree: {
        type: String,
        required: true
    },
    webinars: {
        webinars: [{
            webinarId: { type: Schema.Types.ObjectId, ref: 'Webinar' }
        }]
    },
    internships: {
        internships: [{ internshipId: { type: Schema.Types.ObjectId, ref: 'Internship' } }]
    },
    information: {
        type: Object
    },
    formFilled: {
        type: Boolean
    },
    startup: {
        type: Boolean,
    },
    startupId: {
        type: Schema.Types.ObjectId,
        ref: 'StartUp'
    }

}, { timestamps: true });

module.exports = mongoose.model('Admin', userSchema);