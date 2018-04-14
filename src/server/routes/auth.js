const express = require('express');
const validator = require('validator');
const passport = require('passport');

const router = new express.Router();

function validateSignupForm(payload) {
  const errors = {};
  let isFormValid = true;
  let message = '';

  if (!payload || typeof payload.email !== 'string' || !validator.isEmail(payload.email)) {
    isFormValid = false;
    errors.email = 'Please provide a correct email address.';
  }

  if (!payload || typeof payload.password !== 'string' || payload.password.trim().length < 8) {
    isFormValid = false;
    errors.password = 'Password must have at least 8 characters.';
  }

  if (!payload || typeof payload.firstName !== 'string' || payload.name.trim().length === 0) {
    isFormValid = false;
    errors.name = 'Please provide your name.';
  }

  if (!payload || typeof payload.lastName !== 'string' || payload.name.trim().length === 0) {
    isFormValid = false;
    errors.name = 'Please provide your name.';
  }

  if (!isFormValid) {
    message = 'Check the form for errors.';
  }

  return {
    success: isFormValid,
    message,
    errors
  };
}

module.exports = (router, passport) => {
  router.get('/', (req, res) => {
    res.render('../pages/main');
  });


  router.get('/signup', (req, res) => {
    res.render('../pages/SignUp');
  });

  router.get('/signin', (req, res) => {
    res.render('signin');
  });

  router.post('/signup', (req, res, next) => {
    const validationResult = validateSignupForm(req.body);
    if (!validationResult.success) {
      return res.status(400).json({
        success: false,
        message: validationResult.message,
        errors: validationResult.errors
      });
    }

  router.get('/index', isLoggedIn, (req, res) => {
    res.render('index', {
      isLoggedIn: true
    });
  });

  router.get('/logout', (req, res) => {
    req.session.destroy(err => {
      res.redirect('/');
    });
  });

  router.post(
    '/signin',
    passport.authenticate('local-signin', {
      successRedirect: '/index',
      failureRedirect: '/index'
    })
  );

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();

    res.redirect('/index');
  }
}

module.exports = router;
