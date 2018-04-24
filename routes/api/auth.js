const express = require('express');
const validator = require('validator');
const passport = require('passport');
const usersController = require("../../controllers/usersController");

const router = new express.Router();
router.route("/")
.post(usersController.create);
console.log("In User Routes");
// /**
//  * Validate the sign up form
//  *
//  * @param {object} payload - the HTTP body message
//  * @returns {object} The result of validation. Object contains a boolean validation result,
//  *                   errors tips, and a global message for the whole form.
//  */
// function validateSignupForm(payload) {
//   const errors = {};
//   let isFormValid = true;
//   let message = '';
//
//   if (!payload || typeof payload.email !== 'string' || !validator.isEmail(payload.email)) {
//     isFormValid = false;
//     errors.email = 'Please provide a correct email address.';
//   }
//
//   if (!payload || typeof payload.password !== 'string' || payload.password.trim().length < 8) {
//     isFormValid = false;
//     errors.password = 'Password must have at least 8 characters.';
//   }
//
//   if (!payload || typeof payload.name !== 'string' || payload.name.trim().length === 0) {
//     isFormValid = false;
//     errors.name = 'Please provide your name.';
//   }
//
//   if (!isFormValid) {
//     message = 'Check the form for errors.';
//   }
//
//   return {
//     success: isFormValid,
//     message,
//     errors
//   };
// }
//
// /**
//  * Validate the login form
//  *
//  * @param {object} payload - the HTTP body message
//  * @returns {object} The result of validation. Object contains a boolean validation result,
//  *                   errors tips, and a global message for the whole form.
//  */
// function validateLoginForm(payload) {
//   const errors = {};
//   let isFormValid = true;
//   let message = '';
//
//   if (!payload || typeof payload.email !== 'string' || payload.email.trim().length === 0) {
//     isFormValid = false;
//     errors.email = 'Please provide your email address.';
//   }
//
//   if (!payload || typeof payload.password !== 'string' || payload.password.trim().length === 0) {
//     isFormValid = false;
//     errors.password = 'Please provide your password.';
//   }
//
//   if (!isFormValid) {
//     message = 'Check the form for errors.';
//   }
//
//   return {
//     success: isFormValid,
//     message,
//     errors
//   };
// }
//
// router.get('/test', (req, res, next) => {
//   console.log("Route working")
// });
//
// router.get("/", (req, res, next)=>{
//   console.log("Auth working");
//   res.send('the auth route works!')
// });
//
// router.post('/signup', (req, res, next) => {
//   console.log("Hello World Signup")
//   return passport.authenticate('local-signup', (err) => {
//
//     if (err) {
//       if (err.name === 'MongoError' && err.code === 11000) {
//         return res.status(409).json({
//           success: false,
//           message: 'Check the form for errors.',
//           errors: {
//             email: 'This email is already taken.'
//           }
//         });
//       }
//
//       return res.status(400).json({
//         success: false,
//         message: 'Could not process the form.'
//       });
//     }
//
//     return res.status(200).json({
//       success: true,
//       message: 'You have successfully signed up! Now you should be able to log in.'
//     });
//   })(req, res, next);
// });
//
// router.post('/login', (req, res, next) => {
//   return passport.authenticate('local-login', (err, token, userData) => {
//     if (err) {
//       if (err.name === 'IncorrectCredentialsError') {
//         return res.status(400).json({
//           success: false,
//           message: err.message
//         });
//       }
//
//       return res.status(400).json({
//         success: false,
//         message: 'Could not process the form.'
//       });
//     }
//
//
//     return res.json({
//       success: true,
//       message: 'You have successfully logged in!',
//       token,
//       user: userData
//     });
//   })(req, res, next);
// });

module.exports = router;
