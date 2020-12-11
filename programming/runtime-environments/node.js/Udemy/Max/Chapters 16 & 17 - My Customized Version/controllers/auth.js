const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');
const crypto = require('crypto');

const User = require('../models/user');

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: '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'
    }
  })
);

exports.getLogin = (req, res, next) => {
  let message = req.flash('error');
  if (message.length > 0) {
    message = message[0];
  } else {
    message = null;
  }
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    errorMessage: message
  });
};

exports.getSignup = (req, res, next) => {
  let message = req.flash('error');
  if (message.length > 0) {
    message = message[0];
  } else {
    message = null;
  }
  res.render('auth/signup', {
    path: '/signup',
    pageTitle: 'Signup',
    errorMessage: message
  });
};

exports.postLogin = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  User.findOne({ email: email })
    .then(user => {
      if (!user) {
        req.flash('error', 'Invalid email or password.');
        return res.redirect('/login');
      }
      bcrypt
        .compare(password, user.password)
        .then(doMatch => {
          if (doMatch) {
            req.session.isLoggedIn = true;
            req.session.user = user;
            return req.session.save(err => {
              if (err) console.log(err);
              res.redirect('/');
            });
          }
          req.flash('error', 'Invalid email or password.');
          res.redirect('/login');
        })
        .catch(err => {
          console.log(err);
          res.redirect('/login');
        });
    })
    .catch(err => console.log(err));
};

exports.postSignup = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword; //NOT YET USED!
  User.findOne({ email: email })
    .then(userDoc => {
      if (userDoc) {
        req.flash(
          'error',
          'E-Mail exists already, please pick a different one.'
        );
        return res.redirect('/signup');
      }
      return bcrypt
        .hash(password, 12)
        .then(hashedPassword => {
          const user = new User({
            email: email,
            password: hashedPassword,
            cart: { items: [] }
          });
          return user.save();
        })
        .then(() => {
          res.redirect('/login');
          return transporter.sendMail({
            to: email,
            from: 'support@ez2catch.com',
            subject: 'Signup Succeeded!',
            html: '<h1>You successfully signed up!</h1>'
          });
        })
        .catch(err => {
          console.log(err);
        });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.postLogout = (req, res, next) => {
  req.session.destroy(err => {
    console.log(err);
    res.redirect('/');
  });
};

exports.getResetPassword = (req, res, next) => {
  let message = req.flash('error');
  if (message.length > 0) {
    message = message[0];
  } else {
    message = null;
  }
  res.render('auth/reset', {
    path: '/reset',
    pageTitle: 'Reset Password',
    errorMessage: message
  });
}

exports.postResetPassword = (req, res, next) => {
  const email = req.body.email;

  crypto.randomBytes(32, (err, buf) => {
    if (err) {
      console.log('Inside postResetPassword and while calling crypto.randomBytes ', err);
      return res.redirect('/reset');
    }

    const token = buf.toString('hex');

    User.findOne({ email: email })
      .then(user => {
        if (!user) {
          req.flash('error', 'No Accout With This Email Found In Our DB!');
          return req.session.save(err => {
            if (err) console.log('Inside postResetPassword and while calling req.session.save ', err);
            res.redirect('/reset');
          });
        }

        user.resetPasswordToken = token;
        user.resetPasswordTokenExpiration = Date.now() + 1 * 60 * 60 * 1000; //1 hour in millis!;
        user.save()
          .then(() => {
            res.redirect('/');
            transporter.sendMail({
              to: email,
              from: 'support@ez2catch.com',
              subject: 'Reset Password!',
              html: `<h1>You requested a password reset!</h1>
                     <p>Follow this <a href="http://localhost:3000/reset/${token}">link</a> to reset your password.</p>
                     `
            });
          })
          .catch(err => console.log('In postResetPassword and while calling user.save ', err));
      })
      .catch(err => console.log('In postResetPassword and while calling User.findOne ', err));
  });
}

exports.getNewPassword = (req, res, next) => {
  const token = req.params.token;

  User.findOne({ resetPasswordToken: token, resetPasswordTokenExpiration: { $gt: Date.now() } })
    .then(user => {
      if (!user) {
        req.flash('error', 'Wrong Or Expired Link!');
        req.session.save(err => {
          if (err) console.log('Inside getNewPassword and while calling req.session.save ', err);
          res.redirect('/reset');
        });
      } else {
        let message = req.flash('error');
        if (message.length > 0) {
          message = message[0];
        } else {
          message = null;
        }
        res.render('auth/new-password', {
          path: '/new-password',
          pageTitle: 'New Password',
          errorMessage: message,
          userId: user._id //Is .toString() needed?
        });
      }
    })
    .catch(err => {
      console.log(err);
    })
}

exports.postNewPassword = (req, res, next) => {
  const userId = req.body.userId;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword; //NOT YET USED!

  User.findOne({ _id: userId, resetPasswordTokenExpiration: {$gt: Date.now()} })
    .then(user => {
      if (!user) {
        req.flash(
          'error',
          'User does not exist or the reset link has expired!'
        );
        res.redirect('/reset');
      } else {
        return bcrypt
          .hash(password, 12)
          .then(hashedPassword => {
            // return User.updateOne({ _id: userId }, { $set: { password: hashedPassword, resetPasswordToken: undefined, resetPasswordTokenExpiration: undefined } })
            user.password = hashedPassword;
            user.resetPasswordToken = undefined;
            user.resetPasswordTokenExpiration = undefined;
            user.save();
          })
          .then(() => {
            res.redirect('/login');
            return transporter.sendMail({
              to: user.email,
              from: 'support@ez2catch.com',
              subject: 'Password Reset Succeeded!',
              html: '<h1>You successfully reset your password!</h1>'
            });
          })
          .catch(err => {
            console.log(err);
          });
      }
    })
    .catch(err => {
      console.log(err);
    });
}