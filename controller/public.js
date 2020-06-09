const Webinar = require('../modals/Webinar');
const moment = require('moment');

exports.getHomePage = async(req, res, next) => {
    try {
        const yesterday = moment().subtract(1, 'days');
        const webinars = await Webinar.find({ date: { $gt: yesterday.toDate() } }).sort({ date: 0 });
        res.json(webinars);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.getClick = async(req, res, next) => {
    try {
        const _id = req.params._id;
        const webinar = await Webinar.findById(_id);
        webinar.clicks = webinar.clicks + 1;
        await webinar.save();
        res.status(200).json({ message: "Success" });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.getShare = async(req, res, next) => {
    try {
        const _id = req.params._id;
        const webinar = await Webinar.findById(_id);
        webinar.shares = webinar.shares + 1;
        await webinar.save();
        res.status(200).json({ message: "Success" });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.postRegister = async(req, res, next) => {
    try {
        const { name, email, contact, wno } = req.body;
        const _id = req.params._id;
        const webinar = await Webinar.findById(_id);
        const user = { name: name, email: email, contact: contact, whatsappNo: wno, registeredAt: Date.now() };
        webinar.user.users.push(user);
        await webinar.save();
        res.status(200).json({ message: "Success" });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}