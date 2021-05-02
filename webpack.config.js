const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const WorkboxPlugin = require("workbox-webpack-plugin");
const webpack = require("webpack");


// ? Option (Default) - Simple Configuration:
// Coupled with setting NODE_ENV via npm "scripts"
// const mode = process.env.NODE_ENV === "production" ? "production" : "development";

// Temporary workaround for "browserslist" bug that is being patched in the near future
// Bug: does not persist with webpack live server
// const target = process.env.NOD_ENV === "production" ? "browserslist" : "web";

// Runs slow for setup, then fast
// const sourcemapMode = process.env.NODE.ENV === "production" ? "source-map" : "eval-source-map";
// const sourcemapMode = process.env.NODE_ENV === "production" ? "" : "eval-source-map";

// Simple server setting
// for Manually testing current user experience
// const isUserExp = process.env.USER_EXP ===

let mode = "development";
let target = "web";
let sourcemapMode = "eval-source-map";
let isProduction = false;

// ? Option - Complex Configuration:
if (process.env.NODE_ENV === "production") {
    mode = "production";
    target = "browserslist";
    sourcemapMode = "source-map";
    isProduction = true;
    // cleanFiles = ['**/*']
} else {
    // cleanFiles = [
    //     // ! Configure
    //     // add all image file names
    //     // or seriously find a shorter way
    //     '**/*',
    //     '!static-files*'
    // ]
}

let isUserExp = false;
if (process.env.USER_EXP == "pass") {
    isUserExp = true;
}

module.exports = {
    mode: mode,
    entry: {
        index: "./src/index.js",
        // index: {
        //     import: "./src/index.js",
        //     dependOn: "shared"
        // },
        assets: "./src/assets.js",
        libs: "./src/libs.js",
        // shared: ["react", "react-dom"]
    },
    output: {
        filename: "[name].bundle.[chunkhash].js",
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
        writeToDisk: isUserExp
    },
    module: {
        rules: [
            // # Target: Image files
            {
                test: /\.(png|jpe?g|gif|svg|webp)$/i,
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
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "fonts/[name].[ext]",
                        }
                    },
                ],
            },


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
                    "style-loader", // for inline CSS injection
                    // { loader: 'style-loader', options: { attributes: {} } },
                    // MiniCssExtractPlugin.loader,
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
                    }],
                    ["gifsicle", {
                        interlaced: true,
                        optimizationLevel: 3
                    }],
                    ["imagemin-webp"]
                ],
            },
            loader: true
        }),
        // new MiniCssExtractPlugin({
        //     filename: "[name].css",
        //     linkType: 'text/css',
        //     // insert: "document.head.appendChild(linkTag);"
        //     insert: "document.head.appendChild(linkTag);"
        // }),
        // Extract ALL dependency into one file for the entry point
        // saved as "vendor"
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: "vendor",
        //     minChunks: ({ resource }) => /node_modules/.test(resource)
        // }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: "runtime",
        //     minChunks: Infinity
        // }),
        new webpack.ids.HashedModuleIdsPlugin(),
        new HtmlWebpackPlugin({
            title: "Super Comic Slicer",
            template: "./src/index.html",
            filename: "index.html",
            // minify: isProduction,
            // favicon: "./src/favicon.ico",
            inject: "body",
        }),
        new WorkboxPlugin.GenerateSW({
            // Rename
            swDest: "sw.js",
            // these options encourage the ServiceWorkers to get in there fast
            // and not allow any straggling "old" SWs to hang around
            clientsClaim: true,
            skipWaiting: true,
            maximumFileSizeToCacheInBytes: 5*1024*1024
        }),
    ],

    // # File Extensions Options
    resolve: {
        extensions: [".js", ".jsx"]
    },

    // # Optimization - Treeshaking Options
    optimization: {
        moduleIds: "deterministic",
        // providedExports: true, // default - true
        // usedExports: false, // dev - true; prod - false
        sideEffects: true,
        splitChunks: {
            cacheGroups: {
                // defaultVendors: {
                //     test: /[\\/]node_modules[\\/]((?!react).*)[\\/]/,
                //     name: "defaultVendors",
                //     chunks: "all"
                // },
                // react: {
                //     test: /[\\/]node_modules[\\/](((react).(?!-beautiful-dnd))*)[\\/]/,
                //     name: "react",
                //     chunks: "all"
                // },
                reactBeautifulDnd: {
                    test: /[\\/]node_modules[\\/]((react-beautiful-dnd).*)[\\/]/,
                    name: "reactreactBeautifulDnd",
                    chunks: "all",
                    // priority: 1
                }
            }
        }
        // runtimeChunk: "single"
        // splitChunks: {
        //     chunks: "all"
        // }
    },

    // # Misc.
    target: target,
    devtool: sourcemapMode
};