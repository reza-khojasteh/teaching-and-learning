const fs = require("fs");
const path = require("path");

const p = path.join(path.dirname(require.main.filename), "data", "cart.json");

module.exports = class Cart {
  static getCart(cb) {
    fs.readFile(p, (err, fileContent) => {
      if (err) cb({ products: [], totalPrice: 0 });
      else cb(JSON.parse(fileContent));
    });
  }

  // Adds a new product to, or updates an existing product, in the cart
  static addProduct(id, productPrice, cb) {
    // Fetch the previous cart
    this.getCart((cart) => {
      let updatedProduct;

      // Analyze the cart and find an existing product with 'id', if any
      const existingProductIndex = cart.products.findIndex(
        (prod) => prod.id === id
      );
      const existingProduct = cart.products[existingProductIndex];

      // Add a new product or increase the quantity of an existing product
      if (existingProduct) {
        updatedProduct = { ...existingProduct };
        updatedProduct.qty = updatedProduct.qty + 1;
        cart.products = [...cart.products];
        cart.products[existingProductIndex] = updatedProduct;
      } else {
        updatedProduct = { id: id, qty: 1 };
        cart.products = [...cart.products, updatedProduct];
      }
      cart.totalPrice = cart.totalPrice + +productPrice;

      fs.writeFile(p, JSON.stringify(cart), (err) => {
        if (err) console.log(err);
        else cb();
      });
    });
  }

  static deleteProduct(id, productPrice, cb) {
    fs.readFile(p, (err, fileContent) => {
      if (err) return cb();

      const updatedCart = { ...JSON.parse(fileContent) };
      const product = updatedCart.products.find((prod) => prod.id === id);
      if (!product) return cb();

      updatedCart.products = updatedCart.products.filter(
        (prod) => prod.id !== id
      );
      updatedCart.totalPrice =
        updatedCart.totalPrice - productPrice * product.qty;

      fs.writeFile(p, JSON.stringify(updatedCart), (err) => {
        if (err) console.log(err);
        else cb();
      });
    });
  }

  static adjustPrice(productId, priceDifference) {
    this.getCart((cart) => {
      const existingProduct = cart.products.find((p) => p.id === productId);

      if (existingProduct) {
        const existingProductQty = existingProduct.qty;
        cart.totalPrice += priceDifference * existingProductQty;
      }

      fs.writeFile(p, JSON.stringify(cart), (err) => {
        if (err) console.log(err);
      });
    });
  }
};
