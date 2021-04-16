# Changelog

## 16/04/2021 - Version 1.0.6 (Current)

### Performance Improvements

* _Lazy Load_ (import) the following the following components:
    - `Form.js`
    - `FormUpload`
    - `FormSelect`
    - `FormOptions`

* Change gif animations to CSS animations,
Reduced from 14KB to 4KB
* Inject styles with `style-loader`, instead of creating a separate stylesheet.
* Add font files and Google Fonts CDN with `font-display: swap;` to allow page painted with font styles immediately.
* Add Service worker for an offline experience.

## 24/03/2021 - Version 1.0.5 (Current)

### Performance Improvements

* _Lazy load_ (import) for the following components:
    - `Header.js`
    - `Intro.js`
    - `FormResults.js`
    - `Contact.js`
    - `Footer.js`

## 24/03/2021 - Version 1.0.4 (older versions)

### Bug Fixes

* Fix alert message "Process Complete" timing.

## 24/03/2021 - Version 1.0.3

### Performance Improvements

* Add dynamic import for the following dependencies:
    - `file-saver`
    - `jszip`

## 24/03/2021 - Version 1.0.2

### Performance Improvements

* Remove CDNs `file-saver` and `jszip`, and instead add them as dependencies.
* Remove sourcemaps in production mode.
* Split some dependencies into chunks.
    - `node_modules` (`file-saver`, `jszip`)
    - `react-beautiful-dnd`

## 19/03/2021 - Version 1.0.1

### Performance Improvements

* Remove use of CDN FontAwesome 4.7.
* Generate selected icons (from FontAwesome 4.7) with Icomoon.
    * Add font files and a svg file.
Saved 72KB to 4.5KB
* `favicon.ico` is missing in `dist` (which create less load time)

## 19/03/2021 - Version 1.0.0

### Features

* Drag and reorder image files align with output.
* scale image files accordingly to the selected options available.

## 00/00/00

### Bug Fixes

n/a

### Features

n/a

### BREAKING CHANGES

n/a

### Performance Improvements

n/a