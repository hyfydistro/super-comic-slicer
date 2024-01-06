
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const postcssPresetEnv = require("postcss-preset-env");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    /*
    * option 'clean' does not work effectively.
    * There's an ongoing issue which can be found here:
    * https://github.com/webpack/webpack-dev-middleware/issues/861
    * As a fallback, 'CleanWebpackPlugin' is in use.
    * When working, you may remove the plugin.
    */
      clean: true,
      // assetModuleFilename: "assets/[name][ext][query]"
  },
  module: {
    rules: [
      // {
      //   test: /\.(js|jsx)$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: "babel-loader"
      //   }
      // },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                ident: "postcss",
                /* autoprefixer included */
                plugins: [postcssPresetEnv]
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    /* Add additional miscellaneous plugins here */
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
  ],
  resolve: {
    extensions: [".js", ".ts", ".tsx"]
  },
  devServer: {
    watchFiles: ["src/**/*"],
    devMiddleware: {
      writeToDisk: true,
      publicPath: path.resolve(__dirname, "src"),
    },
    hot: true,
    port: 9000,
    // open: true,
    compress: true,
    static: { directory: path.resolve(__dirname, "dist") }
    // historyApiFallback: { index: "popup.html" }
  }
};

