// A simple file contatining routing logic...
const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  console.log(url, method);

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter A Message</title></head>");
    res.write(
      '<body><form action="/message" method="post"><input type="text" name="message" placeHolder="Enter Username"><button>Send</button></form></body>'
    );
    res.write("</html>");
    res.end();
  } else if (url === "/message" && method === "POST") {
    const body = [];

    req.on("data", (chunk) => {
      console.log(chunk); // The current buffer
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];

      fs.writeFile("message.txt", message, (err) => {
        if (err) {
          console.log("Error!", err);
        } else {
          console.log(message);
        }
      });

      res.statusCode = 302;
      res.setHeader("Location", "/");
      res.end();
    });
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Not Found!</title><head>");
    res.write("<body><h1>Page Not Found!</h1></body>");
    res.write("</html>");
    res.end();
  }
};

// module.exports = requestHandler;

// module.exports = {
//     handler: requestHandler,
//     someText: 'Welcome to this simple sample of running a http server using Node.js'
// };

// module.exports.handler = requestHandler;
// module.exports.someText = 'Welcome to this simple sample of running a http server using Node.js';

exports.handler = requestHandler;
exports.someText =
  "Welcome to this simple sample of running a http server using Node.js"; //just for test :-)
