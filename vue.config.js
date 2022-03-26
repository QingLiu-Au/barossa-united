const path = require("path");
module.exports = {
  devServer: {
    disableHostCheck: true,
    port: process.env.PORT,
    proxy: `https://borassaunited.herokuapp.com:${process.env.PORT}`,
  },
};
