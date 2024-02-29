const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const postcssPresetEnv = require("postcss-preset-env");
const copyPlugin = require("copy-webpack-plugin");
const { InjectManifest } = require("workbox-webpack-plugin");

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
      assetModuleFilename: "assets/[name][ext][query]"
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
        test: /\.((s(a|c)ss)|css)$/i,
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
          },
          "resolve-url-loader",
          {
            loader: "sass-loader",
            options: { sourceMap: true }
          }
        ]
      },

      // Miscellanouse assets
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: "assets/images/[name][ext]"
        }
      },

      // Fonts asssets
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: "assets/fonts/[name][ext]"
        }
      }
    ]
  },
  plugins: [
    /* Add additional miscellaneous plugins here */
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
      favicon: "./public/favicon.ico"
    }),
    new copyPlugin({
      patterns: [
        // Web manifest assets
          {
            from: path.resolve("public/manifest.json"),
            to: path.resolve("dist")
          },
          {
            from: "public/assets/icons/*.png",
            to: "assets/icons/[name][ext]"
          },
          {
            from: "public/assets/images/*.png",
            to: "assets/images/[name][ext]"
          }
        ]
    }),
    new InjectManifest({
      swSrc: "/public/sw.js",
      swDest:"sw.js",
      // maximumFileSizeToCacheInBytes: 5000000,
      exclude: [
        /\.map$/,
        /manifest$/,
        /\.htaccess$/,
        /service-worker\.js$/,
        /sw\.js$/,
      ]
    })
  ],
  resolve: {
    extensions: [".js", ".ts", ".tsx"]
  },
  devServer: {
    watchFiles: ["src/**/*"],
    // devMiddleware: {
    //   writeToDisk: true,
    //   publicPath: path.resolve(__dirname, "src"),
    // },
    // hot: true,
    port: 9000,
    // open: true,
    // compress: true,
    static: { directory: path.resolve(__dirname, "dist") },
    historyApiFallback: true
    // historyApiFallback: { index: "popup.html" }
  }
};

