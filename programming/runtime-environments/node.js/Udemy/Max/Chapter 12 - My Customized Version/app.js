const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const ObjectId = require('mongodb').ObjectId;

const errorController = require('./controllers/error');
const mongoConnect = require('./util/database').mongoConnect;
const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  // const user = new User('Reza', 'reza@test.com', {
  //   items: [
  //     { _id: new ObjectId('5ef3a3582b6b8e105452050e'), quantity: 36 }
  //   ]
  // });
  // user.save()
  //   .then(() => {
  //     console.log(user);
  //   })
  //   .catch(err => console.log(err));
  User.findById(new ObjectId('5efa0a02b0901704a36671be'))
    .then(user => {
      // console.log(user);//why does it get printed more than once in some cases?///////////////////////////////////
      req.user = new User(user.userName, user.email, user.cart, user._id);
      next();
    })
    .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoConnect(() => {
  app.listen(3000, () => {
    console.log('Server is up and running!');
  });
});
