module.exports = {
  publicPath: "",
  devServer: {
    proxy: {
      "^/v4/": {
        target: "http://api.back.end/",
        changeOrigin: true,
        logLevel: "debug",
        pathRewrite: {
          "^/v4/": "http://api.back.end/",
        },
      },
    },
  },
};
