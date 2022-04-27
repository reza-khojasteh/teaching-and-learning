const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(__dirname + "/views/404.html");
});

app.listen(3000, () => console.log("Server is running at port 3000..."));
