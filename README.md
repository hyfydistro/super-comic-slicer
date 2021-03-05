# Super Comic Slicer

* For Modern Browsers

## Brief

Type of website: Blog / Info-site || Product site

An artist's go to for dividing long comic page(s). Plus it features file compression.


### Demographic

- General artists attempting Webcomic medium.
- Webcomic artists, such as, *Webtoon* specifically. Tapas later.
- Ages: 10-30s


#### Tags

webcomic, Webtoon, online comic, digital comic


### Targeted Devices

Mobile, Tablet (also priority) and Desktop (main) devices.


## Sample

> Image source of website UI


## Technical Wesbsite Supports

- [ ] Responsive mobile / tablet / laptop - **R**
    Recommended:
        - 375w (min)
        - 768w
        - 992w (max)

    * Other view dimensions or angles may suffer. :smiling_imp:

- [x] Ally (Web Accessibility) - **A11y**
    - [ ] Screenreaders
    - [x] Color accessible

- [ ] Old Browser Support - **OBS** [REJECTED]

- [ ] Progressive Web Application **PWA** [pending]
    - [ ] Service Worker
    - [ ] Manifest file

- [ ] Graceful Degradation / *Progressive Enhancement* **PE** [pending]
    - CSS PE
    - JavaScript PE

- [ ] Available at GitHub Pages [pending]

- [ ] Google Analytics **Analytics** [pending]


## Browsers Compatibility

### Modern Browsers

e.g.
* Tested on the following browsers:
    - FireFox
    - Google Chrome

It is possible Microsoft Edge will work well (because it runs on the same engine as Chrome - the V8 engine).


### Older Browsers

*n/a*


## Development Setup

### Installation(s)

* NodeJS
* NPM v10 (required for Webpack 5)
* Webpack v5
    * Webpack CLI
        * It is mandatory Webpack has a `.browserslistrc` file because it does not configure transpile unless it exist.
* React v17+


#### NPM Packages

**dev-dependency**

* Webpack
    * [x] webpack
    * [x] webpack-cli
    * [x] webpack-dev-server
    * webpack-bundle-analyzer (optional; debugging: optimization helper tool)
    Loaders
        * [x] css-loader
        * [x] style-loader (option #1 CSS injection method: for inline style)
        * [x] sass-loader
        * [x] postcss-loader
        * [x] file-loader (optional)
    Plugins
        * [x] mini-css-extract-plugin (option #2 CSS injection method: for separate stylesheet)
        * [x] html-webpack-plugin
        * [x] clean-webpack-plugin
        * [x] image-minimizer-webpack-plugin

* [x] sass (AKA `dart-sass` --since 2020)
* [x] postcss
* [x] postcss-preset-env
* [x] babel-loader
* [x] @babel/core
* [x] @babel/preset-env
* [x] @babel/preset-react
* [x] jest (optional; for Unit Testing)

Image File Compressions
* [x] imagemin-jpegtran
* [x] imagemin-optipng
* [x] imagemin-svgo

**dependency**
* [ ] core-js (mandatory; for further older browsers support such as IE)
* [x] react
* [x] react-dom



##### Webpack

Install webpack setup
```
npm install --save-dev webpack webpack-cli webpack-dev-server
```


**Debugging**

* Use `devtool` option and set to `source-map` in Webpack configurations . This will allow you to trace and see pre-compile or pre-transpile files in the browser's developer tool. Note, there are more options in Webpack doc.

* (Optional) Use `hot` option and set to `true` if you want css injection in browser to persist.


**Module Analyzer**

(WIP)

If you want to try and optimize, check what is bloating your app:
```
npm i -D webpack-bundle-analyzer
```

Also, write npm script to run server for it.


###### Styles

* Styles compiler and transpiler

If you don't mind inline styling injected to your html, use `style-loader`. Otherwise, exclude it.
```
npm install --save-dev css-loader sass-loader
```

Instead, add the plugin Mini CSS Extract Plugin:
```
npm i -D mini-css-extract-plugin
```

Extracts styles and puts it in its own CSS file instead of having it inline with the bundler.js file. Let's you use sourcemap. Better for debugging.

For PostCSS, the following is needed for transpiling:
```
npm i -D postcss postcss-loader postcss-preset-env
```

**All in one line (excluding `style-loader`):**
```
npm install --save-dev css-loader sass sass-loader mini-css-extract-plugin postcss postcss-loader postcss-preset-env
```


###### Scripts

* JavaScript compiler and transpiler

```
npm install -save-dev @babel/core @babel/preset-env babel-loader
```

After adding a cofiguration preset for babel, it will enable transforms for ES2015+.

If you want to support older browsers such as IE8 or IE11, you will need to install the following dependency.

`core-js` gets all the required polyfills for the list of target browsers. Save as dependency.
```
npm i -S core-js
```


##### Misc.

* `html-webpack-plugin`

To change the name of the entry points or add a new one, the generated bundles would be renamed on a build, but our `index.html` file would still reference the old names. We can fix that with `HTMLWebpackPlugin`.


* `clean-webpack-plugin`

Removes files for new production files.


**All in one line (ONLY `clean-webpack-plugin` + `html-webpack-plugin`):**
```
npm install --save-dev html-webpack-plugin clean-webpack-plugin
```

* `image-minimizer-webpack-plugin`

Brought to you by `imagemin`.
```
npm i -D image-minimizer-webpack-plugin
```

Images can be optimized in two modes:

Lossless (without loss of quality).
Lossy (with loss of quality).

Recommended imagemin plugins for lossless optimization
```
npm install imagemin-gifsicle imagemin-jpegtran imagemin-optipng imagemin-svgo --save-dev
```

Recommended imagemin plugins for lossy optimization
```
npm install imagemin-gifsicle imagemin-mozjpeg imagemin-pngquant imagemin-svgo --save-dev
```


**Mandatory Requirement**

`image-minimizer-webpack-plugin` uses `file-loader` (or `url-loader`) to find the images to use and process.

Install `file-loader`:
```
npm install file-loader --save-dev

```

Now you may import image files to your bundler JavaScript file.


*Personal Optimization Options*

```
// `webpack.config.js`
    plugins: [
        // ...other plugins ...

        new ImageMinimizerPlugin({
            exclude: /\.ico$/i,
            minimizerOptions: {
                plugins: [
                    // ! Configure - imagemin plugins must be installed before use
                    //  ? Use lossless combination
                    ["gifsicle", {
                        interlaced: true,
                        optimizationLevel: 3
                    }],
                    ["mozjpeg", {
                        quality: 90
                    }],
                    ["pngquant", {}],
                    ["pngquant", { // *lossy settings
                        speed: 1,
                        quality: [0.95, 1]
                    }],
                    ["svgo", {
                        removeViewBox: false
                    }],

                    // ? Use lossy combination
                    ["gifsicle", {
                        interlaced: true,
                        optimizationLevel: 3
                    }],
                    ["jpegtran", {
                        progressive: true
                    }],
                    ["optipng", {}],
                    ["svgo", {
                        removeViewBox: false
                    }],
                ],
            },
            loader: true
        }),

        // ...other plugins ...
    ],
```

Reference: [This Guy - LoyEgor](https://gist.github.com/LoyEgor/e9dba0725b3ddbb8d1a68c91ca5452b5)

**All in one line (Use loseless optimization; Minimum: PNG, JPEG; including `file-loader`):**
```
npm install --save-dev image-minimizer-webpack-plugin imagemin-mozjpeg imagemin-pngquant file-loader
```

**All in one line (Use loseless optimization; Maximum: all; including `file-loader`):**
```
npm install --save-dev image-minimizer-webpack-plugin imagemin-gifsicle imagemin-mozjpeg imagemin-pngquant imagemin-svgo file-loader
```

**All in one line (use lossy optimization; Maximum: all; including `file-loader`):**
```
npm install --save-dev image-minimizer-webpack-plugin imagemin-gifsicle imagemin-mozjpeg imagemin-pngquant imagemin-svgo file-loader
```


##### Unit Testing with Jest (Optional)

Basic unit testing will be done with Jest and vanialla JavaScript.
```
npm i -D jest
```


#### React

To use React in webpack and production, it needs to be installled as dependency:
```
npm i react react-dom
```

For further transpile and to allow JSX, install the following babel react preset as dependency:
```
npm i -D @babel/preset-react
```


##### Testing with Jest (WIP)

(WIP)

To test React with jest, you'll be working with another environment.
```
 react-test-renderer
 ```

Ref: [test React with Jest](https://jestjs.io/docs/en/tutorial-react)


## Development Configurations

### gitignore

Add production files in `dist` folder to `.gitignore` for development purposes. When it is ready, you may remove it from `.gitignore`. Therefore, you won't have to include in your version control commands all the time.


### Browserslist

`.browserslistrc`

**Browsers Data Updating**

`npx browserslist@latest --update-db` updates `caniuse-lite` version in your npm, yarn or pnpm lock file. If you're writing for Modern browsers, this may be necessary. [Reasons found here.](https://github.com/browserslist/browserslist#browsers-data-updating)


**Debug**

To csee what browsers was selected by your queries, run the following command in the project directory:
```
Run npx browserslist
```


**Older Browsers Support Options**

> Decide how far back are you going to support older browsers. There is as far as IE8 and IE11. Make configuration to your `.browserslistrc`

option 1 (Default)
```
last 2 versions
>1%
ie11
maintained node versions
not dead
```

option 2
```
last 3 versions
>0.7%
ie8
```

> Remeber the older it is, the more polfills you'll need and the more bloated your website will be!


### Babel

`.babelrc` [REjECTED]

In some cases, you may use `.babelrc`. However, with Webpack 5, use `babel.config.js`.


`babel.config.js` [ACCEPTED]

For simiplicity sake:
```
module.exports = {
    "presets": [
        [
            "@babel/preset-env"
        ]
    ]
}
```

For more supports for older browsers (and that you don't mind it getting bloated), add the the following option and configure `debug` to `true` to check what modern JavaScript has been targeted, otherwise you can set to `false` or remove it:
```
module.exports = {
    "presets": [
        [
            "@babel/preset-env",
            {
                "debug": true,
                "useBuiltIns": "usage",
                "corejs": 3
            }
        ]
    ]
}
```

This will print debugging logs.

Babel will transpile according to the browserlists configurations / options or however you inject the browserlist option. It will ignore size concerns and add as many polyfills for your modern JavaScript.

Warning: For REALLY new cutting edge Modern JavaScript, look further in the Babel docs. Otherwise, build your website simpler.


**Babel with React**

For simplicity sake, add the following to the configuration option:
```
module.exports = {
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
    ]
}
```

There is a way to opt in to not having to import a React whenever you're just using jsx in a file. Under the hood, it is suppose to make a little more efficient. So the only time you need to import React is when you need methods or state - anything like that from the React library.

However, you may opt in the following:
```
module.exports = {
    "presets": [
        "@babel/preset-env",
        [
            "@babel/preset-react",
            {runtime: "automatic"}
        ]
    ]
}
```

Since React v17+,  Babel joined with the React team, they added options for the react preset.


### PostCSS

`postcss.config.js`

Configure the following to allow transpile:
```
module.exports = {
    plugins: [
        require("postcss-preset-env")
    ]
};
```


### NPM Scripts

```
"scripts": {
    "watch": "webpack --watch",
    "dev": "webpack serve",
    "build-dev": "webpack",
    "build": "set NODE_ENV=production&&webpack",
}
```

* "watch": "webpack --watch"

Logs change WITHOUT live reload. Code re-compile. For development purpose.

Note: This is 1/3 options available in webpack that help you automatically compile your code whenever it changes. `webpack-dev-server` is 2/3, and `webpack-dev-middleware` is 3/3.


* "dev": "webpack serve"

Logs change WITH live reload. For development purpose.

webpack-dev-server doesn't write any output files after compiling. Instead, it keeps bundle files in memory and serves them as if they were real files mounted at the server's root path. If your page expects to find the bundle files on a different path, you can change this with the publicPath option in the dev server's configuration.


* "build-dev: "webpack"

Outputs files pre-transpile stage where you can read code (no minification either). For development purpose.


* "build" "set NODE_ENV=production&&webpack"

Outputs production files, ready to deploy.

**Warning**: This is specific to Windows OS v10. It may differ for your terminal on how you go about setting the environment variable.


#### Unit Testing

Basic Unit Testing setup.

```
"scripts": {
    "test": "jest",
    "test:result": "jest --coverage",
    "test:watch": "jest --watchAll",

}
```

[To watch a single file, read more about it at Jest docs.](https://jestjs.io/docs/en/jest-platform#jest-changed-files)


### Environment Variables

Personal use case:
* Git Bash Terminal
* Windows OS


Environment variables are used to switch and from development to production mode and set different Webpack configurations.

Use `printenv` to see environment variables used (unordered, short), or use `set` (ordered, long).


#### Optional (WIP)

(WIP)

However, this may pose a problem with software that uses different terminal. Use *dotenv* module and create an `.env` file.

`.env`
```
NODE_ENV=production
NODE_ENV=development
```


## Notes on Font types

Modern browsers use the following font types:

* `woff`
* `woff2`


Older and much more diverse browsers will vary, use many fallback if needed:

* `.eot` - `` IE9 Compat Modes
* `eot?#iefix` - `embedded-opentype` IE6-IE8
* `.ttf` - `truetype` Safari, Android, iOS
* `.svg#svgFontName` - `svg` Legacy iOS

Be awre of the following when supporting older browsers:

* [Bug] Fonts won't work in IE if the font-family entry in css is named differently than the font name
* For IE 6-11, use EOT fonts, but be aware it is not supported by any other browser.
* For IE >=9 & all other browsers, use woff fonts, as it has the widest support and the best compression, since it was designed specifically for the web.


## Biography

n/a