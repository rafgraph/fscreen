# Fscreen - Fullscreen API

[![npm](https://img.shields.io/npm/dm/fscreen?label=npm)](https://www.npmjs.com/package/fscreen)

[Demo website](https://fscreen.rafgraph.dev) (demo code on the [`gh-pages` branch](https://github.com/rafgraph/fscreen/tree/gh-pages))

---

Vendor agnostic access to the [Fullscreen API](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API). Build with the Fullscreen API as intended without worrying about vendor prefixes.

```shell
$ npm install --save fscreen
```

```javascript
import fscreen from 'fscreen';

fscreen.fullscreenEnabled === true / false;
// boolean to tell if fullscreen mode is supported
// replacement for: document.fullscreenEnabled
// mapped to: document.vendorMappedFullscreenEnabled

fscreen.fullscreenElement === null / undefined / DOM Element;
// null if not in fullscreen mode, or the DOM element that's in fullscreen mode
// (if fullscreen is not supported by the device it will be undefined)
// replacement for: document.fullscreenElement
// mapped to: document.vendorMappedFullsceenElement
// note that fscreen.fullscreenElement uses a getter to retrieve the element
// each time the property is accessed.


fscreen.requestFullscreen(element);
// replacement for: element.requestFullscreen()
// mapped to: element.vendorMappedRequestFullscreen()

fscreen.requestFullscreenFunction(element);
// replacement for: element.requestFullscreen - without calling the function
// mapped to: element.vendorMappedRequestFullscreen

fscreen.exitFullscreen();
// replacement for: document.exitFullscreen()
// mapped to: document.vendorMappedExitFullscreen()
// note that fscreen.exitFullscreen is mapped to
// document.vendorMappedExitFullscreen - without calling the function


fscreen.onfullscreenchange = handler;
// replacement for: document.onfullscreenchange = handler
// mapped to: document.vendorMappedOnfullscreenchange = handler

fscreen.addEventListener('fullscreenchange', handler, options);
// replacement for: document.addEventListener('fullscreenchange', handler, options)
// mapped to: document.addEventListener('vendorMappedFullscreenchange', handler, options)

fscreen.removeEventListener('fullscreenchange', handler, options);
// replacement for: document.removeEventListener('fullscreenchange', handler, options)
// mapped to: document.removeEventListener('vendorMappedFullscreenchange', handler, options)


fscreen.onfullscreenerror = handler;
// replacement for: document.onfullscreenerror = handler
// mapped to: document.vendorMappedOnfullscreenerror = handler

fscreen.addEventListener('fullscreenerror', handler, options);
// replacement for: document.addEventListener('fullscreenerror', handler, options)
// mapped to: document.addEventListener('vendorMappedFullscreenerror', handler, options)

fscreen.removeEventListener('fullscreenerror', handler, options);
// replacement for: document.removeEventListener('fullscreenerror', handler, options)
// mapped to: document.removeEventListener('vendorMappedFullscreenerror', handler, options)


fscreen.fullscreenPseudoClass;
// returns: the vendorMapped fullscreen Pseudo Class
// i.e. :fullscreen, :-webkit-full-screen, :-moz-full-screen, :-ms-fullscreen
// Can be used to find any elements that are fullscreen using the vendorMapped Pseudo Class 
// e.g. document.querySelectorAll(fscreen.fullscreenPseudoClass).forEach(...);
```

## Usage

Use it just like the spec API.

```javascript
if (fscreen.fullscreenEnabled) {
 fscreen.addEventListener('fullscreenchange', handler, false);
 fscreen.requestFullscreen(element);
}

function handler() {
 if (fscreen.fullscreenElement !== null) {
   console.log('Entered fullscreen mode');
 } else {
   console.log('Exited fullscreen mode');
 }
}
```
