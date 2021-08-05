const jwt = require("jsonwebtoken");

const secret = "driversarethebest";
const expiration = "10h";

module.exports = {
  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }
    //checking if token is passed
    console.log(
      `
    ----------------------------------------------------------------------
    THIS SHOULD BE PASSING TOKEN 
    ===>`,
      token
    );
    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
      //checking if user data is passed
      console.log(
        `
      ----------------------------------------------------------------------
      HERE SHOULD BE USER DATA 
      ===>`,
        data
      );
    } catch {
      console.log("Invalid token");
    }

    return req;
  },
  signToken: function ({ email, name, _id }) {
    const payload = { email, name, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
