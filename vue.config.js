const { defineConfig } = require('@vue/cli-service')
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/https://github.com/Pugud19/library-image/" : "/",
};
