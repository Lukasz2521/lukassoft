const postcssNormalize = require("postcss-normalize");

module.exports = {
  plugins: [
    postcssNormalize({ forceImport: "sanitize.css" }),
    require("autoprefixer"),
    require("cssnano")
  ]
};
