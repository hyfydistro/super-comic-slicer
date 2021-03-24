# Changelog

## 19/03/2021 - Version 1.0.2 (Current)

### Performance Improvements

* Remove CDNs `file-saver` and `jszip`, and instead add them as dependencies.
* Remove sourcemaps in production mode
* Split some dependencies into chunks.
    - `node_modules` (`file-saver`, `jszip`)
    - `react-beautiful-dnd`

## 19/03/2021 - Version 1.0.1 (Current)

### Performance Improvements (older versions)

* Remove use of CDN FontAwesome 4.7
* Generate selected icons (from FontAwesome 4.7) with Icomoon
    * Add font files and a svg file
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