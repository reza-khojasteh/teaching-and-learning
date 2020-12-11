const mongoose = require('mongoose');

// const Product = require('./product');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  cart: {
    items: [{
      productId: {
        type: mongoose.Types.ObjectId,
        ref: 'Product',
        required: true
      },
      quantity: {
        type: Number,
        required: true
      }
    }]
  }
});

userSchema.methods.addToCart = function (productId) {
  // console.log(productId);
  // console.log(this.cart.items[0]._id);
  const updatedCart = { ...this.cart };
  const foundIndex = this.cart.items.findIndex(element => element.productId.toString() === productId);//instead of == OR === productId.toString()!
  // console.log(foundIndex);

  if (foundIndex !== -1) {
    // console.log('if');
    updatedCart.items[foundIndex].quantity += 1;
  } else {
    // console.log('else');
    updatedCart.items.push({ productId: productId, quantity: 1 });
  }

  // const updatedCart = { items: [{ _id: productId, quantity: 1 }] };
  this.cart = updatedCart;
  // console.log(this.cart);
  return this.save();
  // return db
  //   .collection('users')
  //   .updateOne({ _id: this._id }, { $set: { cart: updatedCart } });
}

userSchema.methods.deleteFromCart = function (productId) {
  // let updatedCart = { ...this.cart };
  // console.log(updatedCart);
  // console.log(productId, updatedCart.items[1].productId);
  // console.log(updatedCart.items[1].productId.toString() !== productId);
  this.cart.items = this.cart.items.filter(element => element.productId.toString() !== productId);
  // console.log(updatedCart);
  // cart.items = updatedCart.items;
  return this.save();
}

userSchema.methods.updateCart = function (productId) {
  this.cart.items = this.cart.items.filter(product => product.productId.toString() !== productId);
  return this.save();
}

// const Product = require('./product');

// class User {
//   constructor(userName, email, cart, _id) {
//     this.userName = userName;
//     this.email = email;
//     this.cart = cart;//{items:[], total??}
//     this._id = _id;
//   }

//   // save() {
//   //   const db = getDb();
//   //   const dbOp = db.collection('users');

//   //   if (this._id) {
//   //     return dbOp
//   //       .updateOne({ _id: this._id }, { $set: this });
//   //   } else {
//   //     return dbOp
//   //       .insertOne(this);
//   //   }
//   // }

//   // static fetchAll() {
//   //   const db = getDb();
//   //   return db
//   //     .collection('users')
//   //     .find()
//   //     .toArray();
//   // }

//   static findById(userId) {
//     const db = getDb();
//     return db
//       .collection('users')
//       .findOne({ _id: userId });
//     // .next();
//   }

//   // static deleteById(prodId) {
//   //   const db = getDb();
//   //   return db
//   //     .collection('users')
//   //     .deleteOne({ _id: prodId });
//   // }

//   addToCart(productId) {
//     const db = getDb();

//     // console.log(productId);
//     // console.log(this.cart.items[0]._id);
//     const updatedCart = { ...this.cart };
//     const foundIndex = this.cart.items.findIndex(element => element._id.toString() == productId.toString());
//     // console.log(foundIndex);

//     if (foundIndex !== -1) {
//       // console.log('if');
//       updatedCart.items[foundIndex].quantity += 1;
//     } else {
//       // console.log('else');
//       updatedCart.items.push({ _id: productId, quantity: 1 });
//     }

//     // const updatedCart = { items: [{ _id: productId, quantity: 1 }] };
//     return db
//       .collection('users')
//       .updateOne({ _id: this._id }, { $set: { cart: updatedCart } });
//   }

//   deleteFromCart(productId) {
//     // console.log(productId);
//     const db = getDb();

//     let updatedCart = { ...this.cart };
//     // console.log(updatedCart);
//     // console.log(updatedCart.items[4]._id.toString(), productId.toString());
//     updatedCart.items = updatedCart.items.filter(element => element._id.toString() != productId.toString());
//     // console.log(updatedCart);
//     return db
//       .collection('users')
//       .updateOne({ _id: this._id }, { $set: { cart: updatedCart } });
//   }

//   updateCart(productId) {
//     const db = getDb();

//     let updatedCartItems;

//     // console.log(this.cart.items[2]._id);
//     // console.log(productId);
//     // console.log(this.cart.items);
//     updatedCartItems = this.cart.items.filter(product => product._id.toString() != productId.toString());
//     this.cart.items = updatedCartItems;
//     // console.log(this.cart.items);

//     return db
//       .collection('users')
//       .updateOne({ _id: this._id }, { $set: { 'cart.items': updatedCartItems } });
//       //OR:
//       // .updateOne({ _id: this._id }, { $set: { cart: this.cart } });
//   }

//   getCart() {
//     let cartItemIds = this.cart.items.map(item => item._id);

//     return Product.findAllByIds(cartItemIds)
//       .then(products => {
//         for (let i = 0; i < products.length; i++) {
//           products[i] = { ...products[i], quantity: this.cart.items[i].quantity };
//         }
//         return products;
//       })
//       .catch(err => console.log(err));
//   }

//   addOrder() {
//     const db = getDb();

//     return this.getCart()
//       .then(products => {
//         const order = {
//           items: products,
//           user: {
//             _id: this._id,
//             userName: this.userName
//           }
//         };
//         // console.log(order);
//         return db
//           .collection('orders')
//           .insertOne(order);
//       })
//       .then(() => {
//         this.cart.items = [];
//         return db
//           .collection('users')
//           .updateOne({ _id: this._id }, { $set: { cart: this.cart } });
//       })
//       .catch(err => console.log(err));
//   }

//   getOrders() {
//     const db = getDb();
//     // console.log('here!');
//     return db
//       .collection('orders')
//       .find({ 'user._id': this._id })
//       .toArray();
//   }
// }

module.exports = mongoose.model('User', userSchema);