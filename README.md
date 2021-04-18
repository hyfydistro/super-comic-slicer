# Super Comic Slicer

![og-supercomicslicer](https://user-images.githubusercontent.com/24542308/112158625-ed1bea00-8c1a-11eb-895e-d7fec9ba3c71.png)

## Brief

An artist's go to for cropping long comic page(s). Plus it features file compression.

### Targeted Devices

Mobile, Tablet (also priority) and Desktop (main) devices.


## Sample

![SCS - Display UI Portfolio template - 1600x1200](https://user-images.githubusercontent.com/24542308/112167129-cd88bf80-8c22-11eb-817e-2550933ecb6d.png)


## Technical Wesbsite Supports

- [x] Responsive mobile / tablet / laptop - **R**
    Recommended:
        - 375w (min)
        - 768w
        - 992w (max)

    * Other view dimensions or angles may suffer. :smiling_imp:

- [x] Ally (Web Accessibility) - **A11y**
    - [ ] Screenreaders
    - [x] Color accessible

- [ ] Old Browser Support - **OBS** [REJECTED]

- [x] Progressive Web Application **PWA**
    - [ ] Service Worker
    - [x] Manifest file

- [ ] Graceful Degradation / *Progressive Enhancement* **PE** [REJECTED]
    - CSS PE
    - JavaScript PE

- [x]  Deployed
    At Netlify: https://supercomicslicer.netlify.app/

- [x] Google Analytics **Analytics**


## Browsers Compatibility

Automatic download is available due to the module `file-saver` used.

Here's list: [Supported Browsers](https://www.npmjs.com/package/file-saver)

### For Modern Browsers

e.g.
* Tested on the following browsers:
    - FireFox
    - Google Chrome

It is possible Microsoft Edge will work well (because it runs on the same engine as Chrome - the V8 engine).

### For Older Browsers

Not compatible with IE browsers.


## Development Setup

### Installation(s)

* NodeJS
* NPM v10 (required for Webpack 5)
* Webpack v5
    * Webpack CLI
        * It is mandatory Webpack has a `.browserslistrc` file because it does not configure transpile unless it exist.
* React v17+

### NPM Packages

**dev-dependency**

* Webpack
    * [x] webpack
    * [x] webpack-cli
    * [x] webpack-dev-server
    * [x] webpack-bundle-analyzer (optional; debugging: optimization helper tool)
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
        * [x] workbox-webpack-plugin (optoinal; to build Service Worker)

* [x] sass (AKA `dart-sass` --since 2020)
* [x] postcss
* [x] postcss-preset-env
* [x] babel-loader
* [x] @babel/core
* [x] @babel/preset-env
* [x] @babel/preset-react
* [x] jest (optional; for Unit Testing)
* [x] cross-env (allow environment variable setup for varous OS with on universal syntax)

Simple Server (to see current user experience)
* [X] http-server

Image File Compressions
* [x] imagemin-jpegtran
* [x] imagemin-optipng
* [x] imagemin-svgo
* [x] imagemin-gifsicle
* [x] imagemin-webp

**dependency**
* [ ] core-js (mandatory; for further older browsers support such as IE)
* [x] react
* [x] react-dom
* [x] file-saver
* [x] jszip


## Feature

* Drag&Drop and Click to Upload
* Drag to Re-Organise
* Webcomic platform options: *Webtoon* available
* File extensions options: `JEPG`, and `PNG` available
* Scale to optimize (or expand to lossless pixels)
* Zip folder

## FAQ

Q. How large can a file be in client side?

Internet Explorer v9 - v11, Chrome, Safari, Edge, and Firefox support the HTML5 uploader, which has a max 4GB file size limit.

Both Chrome and Edge support folder uploads.

Web browsers are limited by available memory, CPU utilization, network performance, and numerous other factors.


Q. Can you drag a folder full of image?

No.

It is a possible next Update Consideration:

- [Upload folder and all its content in JavaScript](https://stackoverflow.com/questions/42239663/upload-folder-and-all-its-content-in-javascript)


Q. Can you have more than one single file?

Assume it won't connect from a new image file given, instead it start a newslicing process.
