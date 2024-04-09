const jwtSecret =
  process.env.SECRET_KEY || "";

module.exports = { jwtSecret }