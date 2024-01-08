
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
      assetModuleFilename: "public/assets/[name][ext][query]"
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
                /* Note: autoprefixer included */
                plugins: [postcssPresetEnv]
              }
            }
          }
        ]
      },

      // Miscellanouse assets
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: "public/assets/[name][ext]"
        }
      },

      // Fonts asssets
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: "public/assets/fonts/[name][ext]"
        }
      }
    ]
  },
  plugins: [
    /* Add additional miscellaneous plugins here */
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
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

