const fs = require("fs");
const path = require("path");

const Cart = require("./cart");

const p = path.join(
  path.dirname(require.main.filename),
  "data",
  "products.json"
);

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  static getProducts(cb) {
    fs.readFile(p, (err, fileContent) => {
      if (err) cb([]);
      else cb(JSON.parse(fileContent));
    });
  }

  save(cb, priceDifference = 0) {
    Product.getProducts((products) => {
      if (this.id) {
        const existingProductIndex = products.findIndex(
          (prod) => prod.id === this.id
        );
        products[existingProductIndex] = this;

        if (priceDifference) Cart.adjustPrice(this.id, +priceDifference);
      } else {
        this.id = Math.random().toString();
        products.push(this);
      }

      fs.writeFile(p, JSON.stringify(products), (err) => {
        if (err) console.log(err);
        else cb();
      });
    });
  }

  static deleteById(id, cb) {
    this.getProducts((products) => {
      const product = products.find((prod) => prod.id === id);
      products = products.filter((prod) => prod.id !== id);

      fs.writeFile(p, JSON.stringify(products), (err) => {
        if (err) console.log(err);
        else Cart.deleteProduct(id, product.price, () => cb());
      });
    });
  }

  static findById(id, cb) {
    this.getProducts((products) => {
      const product = products.find((p) => p.id === id);
      cb(product);
    });
  }
};
