<link rel="stylesheet" class="aplayer-secondary-style-marker" href="/assets/css/APlayer.min.css"><script src="/assets/js/APlayer.min.js" class="aplayer-secondary-script-marker"></script>const commonConfig = require("./webpack.common")
const merge = require("webpack-merge");

const devConfig = {
    mode: "development",
    devtool: "cheap-module-eval-source-map",
    devServer: {
        contentBase: "./dist",
        open: true,
        port: 8089
    }
}

module.exports = merge(commonConfig, devConfig)