module.exports = async(req, res, next) => {
    if (req.session.user.formFilled === false) {
        return res.redirect('/admin/startup-form');
    }
    next();
}