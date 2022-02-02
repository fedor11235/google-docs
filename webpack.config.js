const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

module.exports = {
    resolve: {
        fallback: {
            crypto: require.resolve('crypto-browserify'),
            os: require.resolve('os-browserify/browser'),
            path: require.resolve('path-browserify'),
            stream: require.resolve('stream-browserify'),
            sys: require.resolve('util'),
            url: require.resolve('url'),
            util: require.resolve('util'),
        }
      },
}