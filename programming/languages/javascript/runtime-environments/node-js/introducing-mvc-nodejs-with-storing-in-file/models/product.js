const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(require.main.filename),
  "data",
  "products.json"
);

const getProductsFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      try {
        cb(JSON.parse(fileContent));
      } catch (error) {
        fs.writeFile(p, JSON.stringify([]), (err) => {
          if (err) console.error(err);
          else cb([]);
        });
      }
    }
  });
};

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save(cb) {
    getProductsFromFile((products) => {
      products.push(this);

      fs.writeFile(p, JSON.stringify(products), (err) => {
        if (err) console.log(err);
        else cb();
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
