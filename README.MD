# Super Comic Slicer
![logo](https://github.com/hyfydistro/super-comic-slicer/assets/24542308/7f4d2581-2588-4c63-a8b2-b989ebe14866)

## Brief
An artist's long comic page cutter into their desired webcomic platform.

### Features
- Drag&Drop and Click to Upload
- Drag to Re-Organise
- Webcomic platform options available: Webtoon and more soon!
- File extensions options: JEPG, and PNG available
- Scale to optimize (or expand to lossless pixels)
- Zip folder

**Sample**
![splash](https://github.com/hyfydistro/super-comic-slicer/assets/24542308/385d507e-31c4-46a1-8f9a-52a2154631b7)

### Supports
#### Demographic
For the general public and artists.

#### Browser Compatibility
For modern browsers.

#### A11y
- Color accessible

Screenreaders will not be supported.

#### PWA
- Service Worker [PENDING]
- Offline app experience [PENDING]

### Target Devices
- tablet
- desktop (Window Desktop App WIP via Tauriel)

## Development Setup
Consider the following when contributing:
- Maintenance and versioning update
- Better UI experience
- Optimizations
- Bug fixes
- Testing

### Installations

```
npm install
```

Note: I work on windows, so cross-env is required to be implemented in the future.

## Feedbacks
Send me an DM here: hyfydistro@gmail.com

## TODO List

### Phases

#### Phase #1
- [ ] Same working features as old design.
- [ ] New design
- [ ] fix broken social media links

#### Phase #2
- [ ] Add File Name Edits feature
- [ ] i18n; translations request
  - [ ] FR - French
  - [ ] JP - Japan
  - [ ] KR - Korean
  - [ ] DE - German
  - [ ] CH - Chinese
  - [ ] PH - Filipino
  - [ ] ID - Indonesia
  - [ ] SP - Spanish
- [ ] Fix up service Worker
- [ ] testing

Note: Add public Google Sheet link here.

#### Phase #3
- [ ] Add About Page
  - [ ] About description
  - [ ] Video Tutorial Guide

#### Phase #4
- [ ] Move to Tauriel to make available as desktop app

### Development Notes
- [ ] warning feature for mobile size is not available
- [ ] Loader for main page startup
- [ ] testing (storybook, jest or playwright)

- Add eslint
- Add JS config for pathway naming easier
- add testing (storybook, jest or playwright)

Fixes
- [ ] add node environment only to run service worker in prod build
- [ ] setup environment to work from "secure origin"
- [ ] cross-env environment ??
- [x] switch to dnd-kit (OR Use Gesture) and for animation use auto-animate
- [ ] refactor File Extenion and Squash radio options. They both could be reused.
- [ ] Refactor the Checkbox and input Style. They are some repeated.
e.g.
  - CheckboxTextInput.scss
  - WebcomicInputSelect
- [ ] on unselected radio or checkbox, the value should be removed else it may get effected in processing the result.

Optimizations:
- use MemoryRouter for testing, excluding Browser history.
- use Memo for the re-renders
- use useCallback on functions to prevent re-renders

User Experience:
- [ ] loading component
- [ ] sw

NOTE:
- dnd-kit has 1* moderate severity vulnerability.

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
