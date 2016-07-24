var express = require('express');
var router = express.Router();

module.exports = function (passport) {

    //sends successful login state back to angular
    router.get('/success', function (req, res) {
        res.send({ state: 'success', user: req.user ? req.user : null });
    });

    //sends failure login state back to angular
    router.get('/failure', function (req, res) {
        res.send({ state: 'failure', user: null, message: "Invalid username or password" });
    });

    //log in
    router.post('/login', function (req, res, next) {

        passport.authenticate('login', {
            successRedirect: '/auth/success',
            failureRedirect: '/auth/failure',
            session: false,
        },
            function (err, token, userData) {
                if (err) {
                    if (err.name === "IncorrectCredentialsError") {
                        return res.status(400).json({ success: false, message: err.message });
                    }

                    return res.status(400).json({ success: false, message: "Could not process the form." });
                }

                return res.json({ success: true, message: "You have successfully logged in!", token: token, user: userData });

            })(req, res, next)
    });

    //sign up
    router.post('/signup', function (req, res, next) {

        passport.authenticate('signup', {
            successRedirect: '/auth/success',
            failureRedirect: '/auth/failure',
            session: false,
        },
            function (err, info) {
                if (err) {
                    //i dont trust the mongo dublicate stuff, so my own check
                    if (err.name === "ExistingUserError") {
                        // the 11000 Mongo code is for duplicate email error
                        // the 409 HTTP status code is for conflict error
                        return res.status(409).json({ success: false, message: "Check the form for errors.", errors: { email: "This email is already taken." } });
                    }

                    return res.status(400).json({ success: false, message: "Could not process the form." });
                }

                return res.status(200).json({ success: true, message: 'You have successfully signed up! Now you should be able to log in.' });
            })(req, res, next);
    });

    //log out
    router.get('/signout', function (req, res) {
        req.logout();
        res.redirect('/');
    });

    return router;

}