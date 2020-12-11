//static funcitons of this class don't have access to things we require here (e.x. User)?

const getDb = require('../util/database').getDb;

class Product {
  constructor(title, price, description, imageUrl, _id, userId) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
    this._id = _id;
    this.userId = userId;
  }

  save() {
    const db = getDb();
    const dbOp = db.collection('products');

    if (this._id) {
      return dbOp
        .updateOne({ _id: this._id }, { $set: this });
    } else {
      return dbOp
        .insertOne(this);
    }
  }

  static fetchAll() {
    const db = getDb();
    return db
      .collection('products')
      .find()
      .toArray();
  }

  // $in - specifies an array of possible matches, {"name":{$in:[1,2,3]}}
  static findAllByIds(ids) {
    const db = getDb();
    return db
      .collection('products')
      .find({ _id: { $in: ids } })
      .toArray();
  }

  static findById(prodId) {
    // console.log(id);
    const db = getDb();
    return db
      .collection('products')
      .findOne({ _id: prodId });
    // .next();
  }

  static deleteById(prodId) {
    // const User = require('./user');
    const db = getDb();
    // let userId;

    // return db
    //   .collection('products')
    //   .findOne({ _id: prodId })
    //   .then(() => {
    // userId = product.userId;
    return db
      .collection('products')
      .deleteOne({ _id: prodId });
    // })
    // .then(() => {
    //   // console.log(User);
    //   // console.log(userId);
    //   // console.log(User.findById);
    //   return .findById(userId);
    // })
    // .then(user => {
    //   return user.updateCart(prodId);
    // })
    // .catch(err => console.log(err));
  }
}

module.exports = Product;
