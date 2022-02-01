const path = require("path");

module.exports = path.dirname(process.mainModule.filename); // "path.dirname(require.main.filename)" is a newer way of doing the same!
