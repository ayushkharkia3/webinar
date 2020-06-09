module.exports = (req, res, next) => {
    if (!req.session.isLoggedIn) {
        return res.redirect('/admin/login');
    }
    // if (!req.session.user.formFilled) {
    //     return res.redirect('/admin/startup-form');
    // }
    next();
}