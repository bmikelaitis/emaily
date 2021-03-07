//keys.js - figure out what set of creds to return
if (process.env.NODE_ENV === "production") {
  //we are in production - retirn the prod sections
  module.exports = require("./prod");
} else {
  // we are in development, return the dev keys
  module.exports = require("./dev");
}
