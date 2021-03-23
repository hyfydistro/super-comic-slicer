# Changelog

## 19/03/2021 - Version 1.0.1 (Current)

### Performance Improvements

* Remove use of CDN FontAwesome 4.7
* Generate selected icons (from FontAwesome 4.7) with Icomoon
    * Add font files and a svg file
Saved 72KB to 4.5KB
* `favicon.ico` is missing in `dist` (which create less load time)
* *Code split* the following components: `Header.js` to `header.js`, `Intro.js` to `intro.js`, `Form.js` into `form.js`, `Footer.js` into `footer.js`, and `Contact.js` to `contact.js`. This will allow larger file uploads to be given in portions rather than waiting for one large file to finish.


## 19/03/2021 - Version 1.0.0 (Current)

### Features

* Drag and reorder image files align with output.
* scale image files accordingly to the selected options available.

## 00/00/00 (older versions)

### Bug Fixes

n/a

### Features

n/a

### BREAKING CHANGES

n/a

### Performance Improvements

n/a