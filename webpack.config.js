const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;


// ? Option (Default) - Simple Configuration:
// Coupled with setting NODE_ENV via npm "scripts"
const mode = process.env.NODE_ENV === "production" ? "production" : "development";

// Temporary workaround for "browserslist" bug that is being patched in the near future
// Bug: does not persist with webpack live server
const target = process.env.NODE.ENV === "production" ? "browserslist" : "web";

// Runs slow for setup, then fast
// const sourcemapMode = process.env.NODE.ENV === "production" ? "source-map" : "eval-source-map";
const sourcemapMode = process.env.NODE.ENV === "production" ? "" : "eval-source-map";

// ? Option - Complex Configuration:
// if (process.env.NODE_ENV === "production") {
//     mode = "production"
//     isProduction = true
//     target = "browserslist"
//     cleanFiles = ['**/*']
//     sourcemapMode = "source-map"
// } else {
//     mode = "development"
//     isProduction = false
//     target = "web"
//     cleanFiles = [
//         // ! Configure
//         // add all image file names
//         // or seriously find a shorter way
//         '**/*',
//         '!static-files*'
//     ]
//     sourcemapMode = "eval-source-map"
// }


module.exports = {
    mode: mode,
    entry: {
        index: "./src/index.js",
        assets: "./src/assets.js",
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "images/[hash][ext][query]"
    },
    devServer: {
        contentBase: "./dist",
        port: "3000",
        // ? Optional
        // to switch to Hot Module Reload
        // turn on hot to true, and liveReload to false
        // hot: true,
        // liveReload: fasle
    },
    module: {
        rules: [
            // # Target: Image files
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "images/[name].[ext]",
                        }
                    },
                ],
            },

            // # Target: Font files

            // {
            //     test: /\.(woff|woff2)$/,
            //     use: {
            //         loader: "url-loader"
            //     }
            // },


            // // # Target: Image files Data URI Injection
            // {
            //     test: /\.svg$/i,
            //     type: "asset",
            //     generator: {
            //         filename: "[name][ext][query]"
            //     }
            // },

            // # Target: favicon
            {
                test: /\.ico$/i,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        maxSize: 30 * 1024,
                    }
                },
                generator: {
                    filename: "[name][ext][query]"
                }
            },


            // # Target: webmanifest
            {
                test: /\.webmanifest$/i,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]"
                    }
                }
            },


            // # Target: JavaScripts
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        cacheDirectory: true,
                    }
                }
            },


            // # Target: Styles
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ]
            }
        ]
    },


    // # Plugins
    plugins: [
        // Be aware it will run every time webpack is run
        // Comment `BundleAnalyzerPlugin` for testing purposes ONLY
        // new BundleAnalyzerPlugin(),
        new CleanWebpackPlugin(
            // ? Optional - exlucde files to recompiled
            // e.g. UNCHANGE images
            // cleanOnceBeforeBuildPatterns: cleanFiles
        ),
        new ImageMinimizerPlugin({
            exclude: /\.ico$/i,
            minimizerOptions: {
                plugins: [
                    ["optipng"],
                    ["svgo", {
                        removeViewBox: false
                    }],
                    ["jpegtran", {
                        progressive: true
                    }]],
            },
            loader: true
        }),
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            title: "Supporting Modern Browsers with Webpack and React",
            template: "./src/index.html",
            // minify: isProduction,
            inject: "body",
        })
    ],

    // # File Extensions Options
    resolve: {
        extensions: [".js", ".jsx"]
    },

    // # Optimization - Treeshaking Options
    optimization: {
        providedExports: true,
        sideEffects: true
    },

    // # Misc.
    target: target,
    devtool: sourcemapMode
};