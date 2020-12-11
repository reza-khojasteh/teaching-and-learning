const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const ObjectId = require('mongodb').ObjectId;
const mongoose = require('mongoose');

const errorController = require('./controllers/error');
const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  User.findById('5f04c2aeeeb0561045d33856')
    .then(user => {
      // console.log(user);//why does it get printed more than once in some cases?///////////////////////////////////
      req.user = user
      next();
    })
    .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

// mongoConnect(() => {
//   app.listen(3000, () => {
//     console.log('Server is up and running!');
//   });
// });

mongoose.connect('mongodb+srv://root:root@cluster0-qvq2o.mongodb.net/shop2?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to DB!');
    
    User.findOne()
    .then(user =>{
      if(!user) {
        const user = new User({
          name: 'Reza',
          email: 'reza@test.com',
          cart: {
            items: []
          }
        });
        user.save();
      }
    });

    app.listen(3000, () => {
      console.log('Server is up and running!');
    });
  })
  .catch(error => {
    console.log(error);
  });
