const jwt = require("jsonwebtoken");

const secret = "driversarethebest";
const expiration = "10h";

module.exports = {
  authMiddleware: function ({ req }) {
    console.log("authMiddleware");
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }
    console.log("token", token);
    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
      console.log("data", data);
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
