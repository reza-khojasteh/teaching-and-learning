//A Simple Node.js HTTP Server Sample
const http = require("http");

const routes = require("./routes");

console.log(routes.someText);

const server = http.createServer(routes.handler);

server.listen(3000, () => {
  console.log("Server is running at port 3000...");
});
