const User = require('../models/user');

exports.getLogin = (req, res, next) => {
  // if (req.session)
  //   console.log('req.session: ', req.session);
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: false
  });
};

exports.postLogin = (req, res, next) => {
  User.findById('5f0dfa40ef60cc23a8c5fd38')
    .then(user => {
      req.session.user = user;
      req.session.isLoggedIn = true;
      res.redirect('/');
    })
    .catch(err => console.log(err));
};

exports.postLogout = (req, res, next) => {
  req.session.destroy(err => {
    if (err)
      console.log('While destroying session: ' + err);
    res.redirect('/');
  });
};
