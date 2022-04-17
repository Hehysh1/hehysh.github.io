<link rel="stylesheet" class="aplayer-secondary-style-marker" href="/assets/css/APlayer.min.css"><script src="/assets/js/APlayer.min.js" class="aplayer-secondary-script-marker"></script>const commonConfig = require("./webpack.common")
const merge = require("webpack-merge");

const prodConfig = {
    mode: "production",
    devtool: "cheap-module-eval-source-map",
}

module.exports = merge(commonConfig, prodConfig)