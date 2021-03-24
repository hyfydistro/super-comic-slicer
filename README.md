# Super Comic Slicer

![og-supercomicslicer](https://user-images.githubusercontent.com/24542308/112158625-ed1bea00-8c1a-11eb-895e-d7fec9ba3c71.png)

## Brief

Type of website: Blog / Info-site || Product site

An artist's go to for cropping long comic page(s). Plus it features file compression.


### Demographic

- General artists attempting Webcomic medium.
- Webcomic artists, such as, *Webtoon* specifically. Tapas later.
- Ages: 10-30s


#### Tags

webcomic, Webtoon, online comic, digital comic


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



## Sample

> Image source of website UI


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
* [x] imagemin-gifsicle

**dependency**
* [ ] core-js (mandatory; for further older browsers support such as IE)
* [x] react
* [x] react-dom


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


Q. Can you drag the whole image in a folder?

When you drag folder with items what is the output?

- [Upload folder and all its content in JavaScript](https://stackoverflow.com/questions/42239663/upload-folder-and-all-its-content-in-javascript)

Q Can you have more than one single file?
assume: It won't connect from, but start a newslicing process.


## Reference

### Typography Testing

- [type-scale](https://type-scale.com/)

### Inspirations

- (Croppy)[https://knicknic.github.io/croppy/]


### Guides and Tutorials

- [What is the maximum file size for uploads in a browser?](https://kb.globalscape.com/Knowledgebase/10600/What-is-the-maximum-file-size-for-uploads-in-a-browser-)

- [Resizing Considerations](https://www.quackit.com/html/howto/how_to_resize_images_in_html.cfm#:~:text=This%20is%20because%20resizing%20it,it%20to%20your%20website%2Fblog.)

- [Tips for Creating Vertical Scrolling Webtoons](https://www.clipstudio.net/how-to-draw/archives/157055#:~:text=While%20files%20on%20Webtoon%20are,and%20flow%20of%20the%20story.)

- [merge two arrays (keys and values) into an object [duplicate]](https://stackoverflow.com/questions/6921962/merge-two-arrays-keys-and-values-into-an-object)

- [How to merge two objects in JavaScript](https://flaviocopes.com/how-to-merge-objects-javascript/)

### Error Reference

- [Updating react nested state properties](https://dev.to/walecloud/updating-react-nested-state-properties-ga6)

### Polyfills

n/a

### Research

* [HTML Drag and Drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
* DropzoneJS [REJECTED]

**SortableJS**
- [Drag & Drop List using HTML CSS & JavaScript | Draggable List in JavaScript | Sortable Js Library](https://youtu.be/4x99_pLVxiA)
- [Drag and Drop Card Using HTML CSS And JavaScript | SortableJS](https://youtu.be/9uyetVRYk8Q)
- [react-sortablejs](https://github.com/SortableJS/react-sortablejs)
- _JS DELIVER_ - [react-sortablejs](https://www.jsdelivr.com/package/npm/react-sortablejs)
- [react-dnd](https://react-dnd.github.io/react-dnd/about)
- [react-beautiful-dnd](https://react-beautiful-dnd.netlify.app/?path=/story/custom-drop-animation--funny-drop-animation)

- [How to Add Drag and Drop in React with React Beautiful DnD](https://youtu.be/aYZRRyukuIw)
- [react-sortablejs - Setting the 'onChange' method on an object with nested arrays](https://stackoverflow.com/questions/57970186/react-sortablejs-setting-the-onchange-method-on-an-object-with-nested-arrays)

**React Beautiful DnD**
- [react-beautiful-dnd - <Draggable />](https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/api/draggable.md)
- [How to Add Drag and Drop in React with React Beautiful DnD](https://www.freecodecamp.org/news/how-to-add-drag-and-drop-in-react-with-react-beautiful-dnd/)


**CTA Upload**

* Click to Upload
- [Javascript Tutorial - Custom File Upload Button | HTML + CSS](https://youtu.be/T3PDgtliezo)

* File size conversion

- [Correct way to convert size in bytes to KB, MB, GB in JavaScript](https://stackoverflow.com/questions/15900485/correct-way-to-convert-size-in-bytes-to-kb-mb-gb-in-javascript)

- [Using the File API on Upload Forms - JavaScript Tutorial](https://youtu.be/lbb4FS_mjU0)
- [Megabytes to Bytes](https://convertlive.com/u/convert/megabytes/to/bytes#18)


* Displaying (or previewing) images on upload

- [Previewing Image Before File Upload - JavaScript Tutorial](https://youtu.be/VElnT8EoEEM)

* Re-order elements
    * Update data order for Processing

- [How To Build Sortable Drag & Drop With Vanilla Javascript](https://youtu.be/jfYWwQrtzzY)
- [SortableJS]()
- Howto use SortabaleJS with grids - [Drag & Drop List using HTML CSS & JavaScript | Draggable List in JavaScript | Sortable Js Library](https://youtu.be/4x99_pLVxiA)

* validating file
- [<input type="file">](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file)
- [React. this.setState is not a function inside setTimeout [duplicate]](https://stackoverflow.com/questions/42650102/react-this-setstate-is-not-a-function-inside-settimeout)


* Other Reference
- [How To Build Sortable Drag & Drop With Vanilla Javascript](https://youtu.be/jfYWwQrtzzY)
- [Drag and Drop Card Using HTML CSS And JavaScript | SortableJS](https://youtu.be/9uyetVRYk8Q)


**CTA Options**

- [Compress Images Before Uploading for Performance | JavaScript](https://youtu.be/bXf_UdyDzSA)
- [How to compress image size in JavaScript?](https://stackoverflow.com/questions/43038250/how-to-compress-image-size-in-javascript)
- [Pixel manipulation with canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas)


**Results**
* Zip Files
- [ADM-ZIP for NodeJS with added support for electron original-fs](https://www.npmjs.com/package/adm-zip)
- [JSZip](https://github.com/Stuk/jszip)
- [How to convert multiple files as zip in nodejs?](https://stackoverflow.com/questions/54944116/how-to-convert-multiple-files-as-zip-in-nodejs)
- [Quick and Easy Library for Working with Zip Files in Node.js](https://youtu.be/N1I2e-_1cIY)
- [Saving an image from canvas in a zip](https://stackoverflow.com/questions/15287393/saving-an-image-from-canvas-in-a-zip)
- [HTMLCanvasElement.toDataURL()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL)
- [How Do I download all the images generated from canvas using javascript?](https://stackoverflow.com/questions/36522109/how-do-i-download-all-the-images-generated-from-canvas-using-javascript)

* Image Manipulation
- [Canvas Images and Pixesl](https://codepo8.github.io/canvas-images-and-pixels/)
- [Canvas Images and Pixesl Github](https://github.com/codepo8/canvas-images-and-pixels)
- [How do I handle many images in my HTML5 canvas?](https://stackoverflow.com/questions/11579745/how-do-i-handle-many-images-in-my-html5-canvas)
- [HTMLImageElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement)
- [HTML DOM Image Object](https://www.w3schools.com/jsref/dom_obj_image.asp)
- [What's the algorithm to calculate aspect ratio?](https://stackoverflow.com/questions/1186414/whats-the-algorithm-to-calculate-aspect-ratio)
- [drawImage and resize to Canvas](https://stackoverflow.com/questions/15192343/drawimage-and-resize-to-canvas)

* Save File
- [FileSaver.js](https://github.com/eligrey/FileSaver.js/)
- [FileSaver js Exporting Canvas to Blob and Download it as Image in Javascript](https://youtu.be/hWl79zIetHs)
- [How to Save Images to Local/Session Storage - JavaScript Tutorial](https://youtu.be/8K2ihr3NC40)
- [Saving base64 image with Filesaver.js](https://stackoverflow.com/questions/46405773/saving-base64-image-with-filesaver-js)
- [HTMLCanvasElement.toBlob()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob)

- [FileReader.readAsDataURL()](https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL)
- [HTMLCanvasElement.toDataURL()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL)
- [Converting a HTML canvas to a PNG file](https://youtu.be/7akcEo_-yQ4)
- [How To Save Canvas As An Image With canvas.toDataURL()?](https://stackoverflow.com/questions/10673122/how-to-save-canvas-as-an-image-with-canvas-todataurl)
- [which function should I use? .toDataURL() or .toBlob()?](https://stackoverflow.com/questions/59020799/which-function-should-i-use-todataurl-or-toblob)

**Share**

* Copy to Clipboard

Use input fields (as it is widely more supported).
- [Copying Text to Clipboard in HTML & JavaScript - Tutorial For Beginners](https://youtu.be/NHg6jQajaMs)
- [Tweet button](https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/guides/parameter-reference1)
- [Facebook share button and custom text [closed]](https://stackoverflow.com/questions/6138780/facebook-share-button-and-custom-text)
- [Making Your Own Custom Facebook and Twitter Share Links/Buttons for Beginners](https://natehoffelder.com/blog/making-your-own-custom-facebook-and-twitter-share-links-buttons-for-beginners/)
- [How To Add Social Media Sharing Buttons To Tumblr Blog Without Using Javascript Codes?](https://freyayuki.tumblr.com/post/130955097254/tutorial-add-social-media-share-button-javascript-tumblr)
- [Tumblr's share-button script doesn't work](https://stackoverflow.com/questions/43120449/tumblrs-share-button-script-doesnt-work)


**Contact**

- [Mailto on submit button](https://stackoverflow.com/questions/12626940/mailto-on-submit-button)
- [How to send email from form using Nodemailer](https://stackoverflow.com/questions/34754160/how-to-send-email-from-form-using-nodemailer)
- [React Hook Form](https://react-hook-form.com/get-started)
- [The BEST Way To Create Forms In React - React Hook Form Tutorial - How To Create Forms In React](https://www.youtube.com/watch?v=bU_eq8qyjic&ab_channel=MaksimIvanov)

**Validation**
- _Google_ - [reCAPTCHA](https://www.google.com/recaptcha/about/)

* Contact Form
- [How to submit a HTML contact form using Node?](https://stackoverflow.com/questions/46111426/how-to-submit-a-html-contact-form-using-node)

**Extra Features Consideration**

* "Meshing"
Where you you on top and combine images together...??? Reverse side effect anyone?
- [Upload two images into html5 canvas](https://stackoverflow.com/questions/38859665/upload-two-images-into-html5-canvas#:~:text=You%20can%20use%20multiple%20canvas,many%20images%20as%20you%20want.)

*Optimization Considerations**

- [Tree Shaking](https://webpack.js.org/guides/tree-shaking/)
- [6 tips to optimize bundle size](https://dev.to/mbernardeau/6-tips-to-optimize-bundle-size-50n9#:~:text=Stat%20size%20is%20the%20size,parsed%20by%20the%20client%20browser)