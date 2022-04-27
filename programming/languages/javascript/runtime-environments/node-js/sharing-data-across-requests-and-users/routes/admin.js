const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

const products = []; // Data to be shared across requests and users!

// /admin/add-product => GET
router.get("/add-product", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

// /admin/add-product => POST
router.post("/add-product", (req, res) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
