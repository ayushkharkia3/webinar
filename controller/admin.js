const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');

const Webinar = require('../modals/Webinar');
const Admin = require('../modals/Admin');
const Internship = require('../modals/Internship');
const Startup = require('../modals/Startup');

const fileDelete = require('../util/file');

exports.getDashboard = async(req, res, next) => {
    try {
        const webinars = await Webinar.find({ userId: req.session.user._id });
        let click = 0,
            shares = 0,
            highest = 0,
            users = 0,
            titles = [],
            user = [];
        webinars.forEach(w => {
            click += w.clicks;
            shares += w.shares;
            users += w.user.users.length;
            highest = (w.user.users.length > highest) ? w.clicks : highest;
            titles.push(w.title);
            user.push(w.user.users.length);
        });
        res.render('dashboard', { webinars: webinars.length, click, shares, users, highest });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.getChart = async(req, res, next) => {
    try {
        const webinars = await Webinar.find({ userId: req.session.user._id });
        let titles = [],
            user = [],
            views = [],
            shares = [];
        webinars.forEach(w => {
            titles.push(w.title);
            user.push(w.user.users.length);
            views.push(w.clicks);
            shares.push(w.shares);
        });
        if (req.headers.token === 'aaaaaaaaaaaaaa12222222225616032000000000000000658yushhhhhhhhhh') {
            res.status(200).json({
                title: titles,
                user: user,
                clicks: views,
                shares: shares
            });
        } else {
            res.sendStatus(403)
        }
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.getWebinar = async(req, res, next) => {
    try {
        const webinars = await Webinar.find({ userId: req.session.user._id }).sort({ date: 0 });
        res.render('webinars', { webinars });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.getAdd = (req, res, next) => {
    res.render('add-webinar', { editing: false });
}

exports.postAdd = async(req, res, next) => {
    try {
        const { title, date, speakerName, speakerDescription, description, attend, points, share } = req.body;
        const imageURL = req.file.path.replace('\\', '/');
        const displayDate = date.substring(8) + '-' + date.substring(5, 7) + '-' + date.substring(0, 4);
        const newWebinar = new Webinar({ title: title, date: date, displayDate: displayDate, time: req.body.time, speakerName: speakerName, speakerDescription: speakerDescription, speakerImage: imageURL, description: description, attend: attend, points: points, share: share, userId: req.session.user._id });
        const webinar = await newWebinar.save();
        const user = await Admin.findById(req.session.user._id);
        user.webinars.webinars.push({ webinarId: webinar._id });
        await user.save();
        res.redirect('/admin/webinars');
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.getEditWebinar = async(req, res, next) => {
    try {
        const _id = req.params._id;
        const webinar = await Webinar.findById(_id);
        if (req.session.user._id.toString() !== webinar.userId.toString()) {
            return res.redirect('/admin/')
        }
        const date = webinar.displayDate.substring(6) + '-' + webinar.displayDate.substring(3, 5) + '-' + webinar.displayDate.substring(0, 2);
        res.render('add-webinar', { w: webinar, date, editing: true });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.postEditWebinar = async(req, res, next) => {
    try {
        const { _id, title, date, speakerName, speakerDescription, description, attend, points, share } = req.body;
        const webinar = await Webinar.findById(_id);
        if (req.session.user._id.toString() !== webinar.userId.toString()) {
            return res.redirect('/admin/')
        }
        let imageURL = webinar.speakerImage;
        if (req.file) {
            fileDelete.deleteFile(webinar.speakerImage);
            imageURL = req.file.path.replace('\\', '/');
        }
        const displayDate = date.substring(8) + '-' + date.substring(5, 7) + '-' + date.substring(0, 4);
        webinar.title = title;
        webinar.date = date;
        webinar.displayDate = displayDate;
        webinar.speakerName = speakerName;
        webinar.speakerDescription = speakerDescription;
        webinar.speakerImage = imageURL;
        webinar.description = description;
        webinar.attend = attend;
        webinar.points = points;
        webinar.share = share;
        await webinar.save();
        res.redirect('/admin/webinars');
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.getWebinarUsers = async(req, res, next) => {
    // const webinar = await req.user.populate('webinars.webinars.webinarId').execPopulate();
    // console.log(webinar.webinars.webinars[0].webinarId)
    try {
        const webinar = await Webinar.findById(req.params._id);
        if (req.session.user._id.toString() !== webinar.userId.toString()) {
            return res.redirect('/admin/')
        }
        const users = webinar.user.users;
        res.render('webinar-user-details', { users, user: users.length, title: webinar.title, clicks: webinar.clicks, shares: webinar.shares });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.getLogin = (req, res, next) => {
    res.render('login', { email: "", error: null });
}

exports.getRegister = (req, res, next) => {
    res.render('register', { email: "", name: "", error: null });
}

exports.postLogin = async(req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.render('login', { email: req.body.emai, error: error.array()[0].msg });
    }
    try {
        const user = await Admin.findOne({ email: req.body.email });
        if (!user) {
            return res.render('login', { email: req.body.emai, error: 'Invalid Email!' });
        }
        const doMatch = await bcrypt.compare(req.body.password, user.password);
        if (!doMatch) {
            return res.render('login', { email: req.body.emai, error: 'Password Incorrect!' });
        }
        req.session.isLoggedIn = true;
        req.session.user = user;
        return req.session.save(err => {
            return res.redirect('/admin/');
        })
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.postRegister = async(req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.render('register', { email: req.body.email, name: req.body.name, error: errors.array()[0].msg });
    }
    try {
        const { email, name, password, agree } = req.body;
        const hashedPw = await bcrypt.hash(password, 12);
        const newUser = new Admin({ name: name, email: email, password: hashedPw, agree: agree, formFilled: false });
        const user = await newUser.save();
        req.session.isLoggedIn = true;
        req.session.user = user;
        return req.session.save(err => {
            return res.redirect('/admin/startup-form');
        })
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.getLogout = (req, res, next) => {
    req.session.destroy(err => {
        res.redirect('/admin/login');
    });
}

exports.getAddInternship = (req, res, next) => {
    if (req.session.user.startup) {
        return res.render('add-internship', { editing: false });
    }
    res.redirect('/admin/')
}

exports.postAddInternship = async(req, res, next) => {
    if (!req.session.user.startup) {
        return res.redirect('/admin/');
    }
    const { profile, state, duration, no, start, description, skills, questions } = req.body;
    let perks = [];
    if (req.body.certificate) { perks.push('Certificate') }
    if (req.body.letter) { perks.push('Letter of Recommendation') }
    if (req.body.flexible) { perks.push('Flexible Work hours') }
    const stipend = req.body.stipend;
    const date = start.substring(8) + '-' + start.substring(5, 7) + '-' + start.substring(0, 4);
    const imageURL = req.file.path.replace('\\', '/');
    try {
        const newInternship = new Internship({
            profile,
            state,
            duration,
            number: no,
            startDate: start,
            startDisplayDate: date,
            stipend,
            perks,
            description,
            skills,
            questions,
            companyLogo: imageURL,
            userId: req.session.user._id
        });
        const intern = await newInternship.save();
        const admin = await Admin.findById(req.session.user._id);
        admin.internships.internships.push({ internshipId: intern._id });
        await admin.save();
        res.redirect('/admin/internships')
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.getInternships = async(req, res, next) => {
    if (!req.session.user.startup) {
        return res.redirect('/admin/');
    }
    try {
        const webinars = await Internship.find({ userId: req.session.user._id }).sort({ createdAt: -1 });
        res.render('internships', { webinars });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.getInternshipUser = (req, res, next) => {
    if (!req.session.user.startup) {
        return res.redirect('/admin/');
    }
}

exports.getEditInternship = async(req, res, next) => {
    if (!req.session.user.startup) {
        return res.redirect('/admin/');
    }
    try {
        const _id = req.params._id;
        const internship = await Internship.findById(_id);
        if (req.session.user._id.toString() !== internship.userId.toString()) {
            return res.redirect('/admin/')
        }
        const date = internship.startDisplayDate.substring(6) + '-' + internship.startDisplayDate.substring(3, 5) + '-' + internship.startDisplayDate.substring(0, 2);
        res.render('add-internship', { u: internship, date, editing: true });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.postEditInternship = async(req, res, next) => {
    if (!req.session.user.startup) {
        return res.redirect('/admin/');
    }
    try {
        const { profile, state, duration, no, start, description, skills, questions, _id } = req.body;
        let perks = [];
        if (req.body.certificate) { perks.push('Certificate') }
        if (req.body.letter) { perks.push('Letter of Recommendation') }
        if (req.body.flexible) { perks.push('Flexible Work hours') }
        const stipend = req.body.stipend;
        const date = start.substring(8) + '-' + start.substring(5, 7) + '-' + start.substring(0, 4);
        const internship = await Internship.findById(_id);
        if (req.session.user._id.toString() !== internship.userId.toString()) {
            return res.redirect('/admin/')
        }
        let imageURL = internship.companyLogo;
        if (req.file) {
            fileDelete.deleteFile(internship.companyLogo);
            imageURL = req.file.path.replace('\\', '/');
        }
        internship.profile = profile;
        internship.state = state;
        internship.duration = duration;
        internship.number = no;
        internship.startDate = start;
        internship.startDisplayDate = date;
        internship.stipend = stipend;
        internship.perks = perks;
        internship.description = description;
        internship.skills = skills;
        internship.questions = questions;
        internship.companyLogo = imageURL;
        await internship.save();
        res.redirect('/admin/internships');
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.getStartUpForm = (req, res, next) => {
    res.render('profile');
}

exports.postStartUpForm = async(req, res, next) => {
    const user = await Admin.findById(req.session.user._id);
    const { questions } = req.body;
    if (questions[0].answer === 'None') {
        user.formFilled = true;
        user.startup = false;
        req.session.user.formFilled = true;
        req.session.user.startup = false;
        await user.save();
        return res.sendStatus(200);
    }
    let x = {
        answer: [questions[15], questions[16], questions[17], questions[18], questions[19], questions[20], questions[20], questions[22], questions[23], questions[24], questions[25], questions[26], questions[27], questions[28], questions[29], questions[30], questions[31], questions[32], questions[33], questions[34], questions[35], questions[36], questions[37], questions[38], questions[39]]
    };
    let y = {
        answer: [questions[65], questions[66], questions[67], questions[68], questions[69], questions[70], questions[71], questions[72]]
    }
    let z = {
        answer: [questions[78], questions[79], questions[80], questions[81], questions[82]]
    }
    let a = {
        answer: [questions[83], questions[84], questions[85], questions[86]]
    }
    let b = {
        answer: [questions[87], questions[88], questions[89], questions[90], questions[91], questions[92], questions[93], questions[94], questions[95]]
    }
    let c = {
        answer: [questions[96], questions[97], questions[98], questions[99], questions[100], questions[101], questions[102], questions[103], questions[104], questions[105], questions[106], questions[107], questions[108], questions[109]]
    }
    let d = {
        answer: [questions[111], questions[112], questions[113], questions[114], questions[115], questions[116], questions[117]]
    }
    let sector = [];
    let helped = [];
    let target = [];
    let targetCustomer = [];
    let technology = [];
    let funds = [];
    let challanges = [];
    x.answer.forEach(e => {
        if (e.answer !== 'false') {
            sector.push((e.answer === 'true') ? e.question : e.answer)
        }
    });
    y.answer.forEach(e => {
        if (e.answer !== 'false') {
            helped.push((e.answer === 'true') ? e.question : e.answer)
        }
    });
    z.answer.forEach(e => {
        if (e.answer !== 'false') {
            target.push((e.answer === 'true') ? e.question : e.answer)
        }
    });
    a.answer.forEach(e => {
        if (e.answer !== 'false') {
            targetCustomer.push((e.answer === 'true') ? e.question : e.answer)
        }
    });
    b.answer.forEach(e => {
        if (e.answer !== 'false') {
            technology.push((e.answer === 'true') ? e.question : e.answer)
        }
    });
    c.answer.forEach(e => {
        if (e.answer !== 'false') {
            funds.push((e.answer === 'true') ? e.question : e.answer)
        }
    });
    d.answer.forEach(e => {
        if (e.answer !== 'false') {
            challanges.push((e.answer === 'true') ? e.question : e.answer)
        }
    });
    const newStartup = new Startup({
        name: questions[1].answer,
        address: questions[2].answer,
        state: questions[3].answer,
        city: questions[4].answer,
        pin: questions[5].answer,
        email: questions[6].answer,
        contact: questions[7].answer,
        formedAnyCompany: questions[8].answer,
        incorporationNumber: questions[9].answer,
        certificateNo: questions[10].answer,
        age: questions[11].answer,
        founder: questions[12].answer,
        state: questions[13].answer,
        description: questions[14].answer,
        sector: sector,
        femaleFoundersNo: questions[40].answer,
        founders20: questions[41].answer,
        founders25: questions[42].answer,
        founder30: questions[43].answer,
        founder40: questions[44].answer,
        founderMoreThan40: questions[45].answer,
        founderHS: questions[46].answer,
        founderBach: questions[47].answer,
        founderMaster: questions[48].answer,
        founderMBA: questions[49].answer,
        founderOther: questions[50].answer,
        founderScience: questions[51].answer,
        founderArts: questions[52].answer,
        founderCommerce: questions[53].answer,
        founderEng: questions[54].answer,
        founderMed: questions[55].answer,
        founderMarketing: questions[56].answer,
        founderIT: questions[57].answer,
        founderLaw: questions[58].answer,
        founderOthers: questions[59].answer,
        founderProf: questions[60].answer,
        founderBusiness: questions[61].answer,
        founderStudent: questions[62].answer,
        founderOthers: questions[63].answer,
        patents: questions[64].answer,
        helped: helped,
        stage: questions[73].answer,
        under: questions[74].answer,
        incubatorName: questions[75].answer,
        acceleratorName: questions[76].answer,
        investorName: questions[77].answer,
        targetMarket: target,
        targetCustomer: targetCustomer,
        technology: technology,
        funds: funds,
        employees: questions[110].answer,
        challanges: challanges,
        userId: req.session.user._id
    })
    const startup = await newStartup.save();
    user.startupId = startup._id;
    user.startup = true;
    user.formFilled = true;
    await user.save();
    req.session.user.formFilled = true;
    req.session.user.startup = true;
    res.sendStatus(200);
}