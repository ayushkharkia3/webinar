const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
// const csrf = require('csurf');

const MONGODB_URI = 'mongodb://localhost:27017/startup';

const Admin = require('./modals/Admin');

const app = express();
const store = new MongoDBStore({
    uri: MONGODB_URI,
    collection: 'sessions'
});
// const csrfProtection = csrf();

const adminRoutes = require('./routes/admin');
const publicRoutes = require('./routes/public');
const errorController = require('./controller/error');

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now().toString() + '-' + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if (
        file.mimetype === 'image/png' ||
        file.mimetype === 'image/jpg' ||
        file.mimetype === 'image/jpeg'
    ) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static(path.join(__dirname, 'public')));

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader(
//         'Access-Control-Allow-Methods',
//         'OPTIONS, GET, POST, PUT, PATCH, DELETE'
//     );
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//     next();
// });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(
    multer({ storage: fileStorage, fileFilter: fileFilter }).single('image')
);
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(
    session({
        secret: 'my secret',
        resave: false,
        saveUninitialized: false,
        store: store
    })
);
// app.use(csrfProtection);

app.use((req, res, next) => {
    res.locals.isAuthenticated = req.session.isLoggedIn;
    //res.locals.csrfToken = req.csrfToken();
    next();
});


app.use((req, res, next) => {
    if (!req.session.user) {
        return next();
    }
    Admin.findById(req.session.user._id)
        .then(user => {
            if (!user) {
                return next();
            }
            req.user = user;
            next();
        })
        .catch(err => {
            next(new Error(err))
        })
})

app.use('/admin', adminRoutes);
app.use(publicRoutes);
app.get('/500', errorController.get500);
app.use(errorController.get404);

app.use((error, req, res, next) => {
    console.log(error)
    res.redirect('/500');
});

mongoose.connect(MONGODB_URI, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true }).then(result => {
    app.listen(process.env.PORT || 3000)
}).catch(err => { console.log(err) })