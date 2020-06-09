const express = require('express');
const { body } = require('express-validator');

const router = express.Router();

const adminController = require('../controller/admin');
const Admin = require('../modals/Admin');
const isAuth = require('../middleware/is-auth');
const isForm = require('../middleware/form');

router.get('/login', adminController.getLogin);
router.get('/register', adminController.getRegister);
router.post('/register', [body('email').isEmail().withMessage('Please enter a valid email.').custom((value, { req }) => {
    return Admin.findOne({ email: value })
        .then(userDoc => {
            if (userDoc) {
                return Promise.reject('Email already exists');
            }
        })
}).normalizeEmail(), body('password', 'Password should be alphanumeric with minimum 6 characters').isLength({ min: 6 }).isAlphanumeric().trim(), body('re_pass').trim().custom((value, { req }) => {
    if (value.trim() != req.body.password) {
        throw new Error('Passwords have to match!');
    }
    return true;
})], adminController.postRegister);
router.post('/login', [body('email').isEmail().withMessage('Please enter a valid email.').normalizeEmail(), body('password', 'Password should be alphanumeric with minimum 6 characters.').trim().isAlphanumeric().isLength({ min: 6 })], adminController.postLogin);
router.get('/startup-form', isAuth, adminController.getStartUpForm);
router.post('/startup-form', isAuth, adminController.postStartUpForm);
router.get('/', isAuth, isForm, adminController.getDashboard);
router.get('/webinars', isAuth, isForm, adminController.getWebinar);
router.get('/add-webinar', isAuth, isForm, adminController.getAdd);
router.post('/add-webinar', isAuth, isForm, adminController.postAdd);
router.get('/edit/:_id', isAuth, isForm, adminController.getEditWebinar);
router.post('/edit-webinar', isAuth, isForm, adminController.postEditWebinar);
router.get('/view-webinar/:_id', isAuth, isForm, adminController.getWebinarUsers);
router.post('/logout', isAuth, isForm, adminController.getLogout);
router.get('/dashboard/chart', isAuth, isForm, adminController.getChart);
router.get('/add-internship', isAuth, isForm, adminController.getAddInternship);
router.post('/add-internship', isAuth, isForm, adminController.postAddInternship);
router.get('/internships', isAuth, isForm, adminController.getInternships);
router.get('/view-internship', isAuth, isForm, adminController.getInternshipUser);
router.get('/edit-internship/:_id', isAuth, isForm, adminController.getEditInternship);
router.post('/edit-internship', isAuth, isForm, adminController.postEditInternship);

module.exports = router;