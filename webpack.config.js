const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const FaviconWebpackPlugin = require("favicons-webpack-plugin");
const dfxJson = require("./dfx.json");

/**
 * Generate a webpack configuration for a canister.
 */
function generateWebpackConfigForCanister(name, info) {
  if (typeof info.frontend !== "object") {
    return;
  }

  return {
    mode: "production",
    entry: {
      // The frontend.entrypoint points to the HTML file for this build, so we need
      // to replace the extension to `.js`.
      index: path.join(__dirname, info.frontend.entrypoint).replace(/\.html$/, ".js"),
    },
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin()],
    },
    resolve: {
      extensions: [".js", ".ts", ".jsx", ".tsx"],
      fallback: {
        assert: require.resolve("assert/"),
        buffer: require.resolve("buffer/"),
        events: require.resolve("events/"),
        stream: require.resolve("stream-browserify/"),
        util: require.resolve("util/"),
      },
    },
    output: {
      filename: "[name].js",
      path: path.join(__dirname, "dist", name),
    },

    // Depending in the language or framework you are using for
    // front-end development, add module loaders to the default
    // webpack configuration. For example, if you are using React
    // modules and CSS as described in the "Adding a stylesheet"
    // tutorial, uncomment the following lines:
    module: {
      rules: [
        {
          test: /\.(js)|(ts)x?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
          sideEffects: false,
        },
        { test: /\.css$/, use: ["style-loader", "css-loader"] },
        // { test: /\.svg$/, use: ["svg-loader"] },
        {
          test: /\.json$/,
          use: ["json-loader"],
          type: "javascript/auto",
        },
        { test: /\.(ttf|eot|woff|woff2|otf)$/, use: ["file-loader"] },
        { test: /\.(png|jpeg|jpg|svg)$/, use: ["url-loader"] },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, info.frontend.entrypoint),
        filename: "index.html",
        chunks: ["index"],
      }),
      new webpack.ProvidePlugin({
        Buffer: [require.resolve("buffer/"), "Buffer"],
        process: require.resolve("process/browser"),
      }),
      new FaviconWebpackPlugin({
        logo: "./src/favicon.jpeg",
        favicons: {
          icons: {
            android: false,
            appleIcon: false,
            appleStartup: false,
            coast: false,
            firefox: false,
            windows: false,
            yandex: false,
          },
        },
      }),
    ],
  };
}

// If you have additional webpack configurations you want to build
//  as part of this configuration, add them to the section below.
module.exports = [
  ...Object.entries(dfxJson.canisters)
    .map(([name, info]) => {
      return generateWebpackConfigForCanister(name, info);
    })
    .filter((x) => !!x),
];
