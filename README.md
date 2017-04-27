# Fscreen - fullscreen spec api

Vendor agnostic wrapper around the [fullscreen spec api](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API). Build with fullscreen api as intended without worrying about vendor prefixes.

```shell
$ npm install --save fscreen
```

```javascript
import fscreen from 'fscreen';

fscreen.fullscreenEnabled === true / false;
// boolean to tell if fullscreen mode is available
// replacement for: document.fullscreenEnabled
// mapped to: document.vendorMappedFullscreenEnabled

fscreen.fullscreenElement === null / DOM Element;
// null if the document is not in fullscreen mode, otherwise it is the DOM element that is currently presented in fullscreen mode
// replacement for: document.fullscreenElement;
// mapped to: document.vendorMappedFullsceenElement;
// note that fscreen.fullscreenElement uses a getter to retrieve the element each time the property is accessed.


fscreen.requestFullscreen(element);
// replacement for: element.requestFullscreen()
// mapped to: element.vendorMappedRequestFullscreen()
// returns a promise, so can do fscreen.requestFullcreen(element).then(…)

fscreen.requestFullscreenFunction(element);
// replacement for: element.requestFullscreen - without calling the function
// mapped to: element.vendorMappedRequestFullscreen

fscreen.exitFullscreeen();
// replacement for: document.exitFullscreen()
// mapped to: document.vendorMappedExitFullscreen()
// returns a promise, so can do fscreen.exitFullscreen().then(…)
// note fscreen.exitFullscreen is mapped to document.vendorMappedExitFullscreen - without calling the function


fscreen.onfullscreenchange = handler;
// replacement for: document.onfullscreenchange = handler;
// mapped to: document.vendorMappedOnfullscreenchange = handler;

fscreen.addEventListener(‘fullscreenchange’, handler, options);
// replacement for: document.addEventListener(‘fullscreenchange’, handler, options)
// mapped to: document.addEventListener(‘vendorMappedFullscreenchange’, handler, options)

fscreen.removeEventListener(‘fullscreenchange’, handler);
// replacement for: document.removeEventListener(‘fullscreenchange’, handler)
// mapped to: document.removeEventListener(‘vendorMappedFullscreenchange’, handler)


fscreen.onfullscreenerror = handler;
// replacement for: document.onfullscreenerror = handler;
// mapped to: document.vendorMappedOnfullscreenerror = handler;

fscreen.addEventListener(‘fullscreenerror’, handler, options);
// replacement for: document.addEventListener(‘fullscreenerror’, handler, options)
// mapped to: document.addEventListener(‘vendorMappedFullscreenerror’, handler, options)

fscreen.removeEventListener(‘fullscreenerror’, handler);
// replacement for: document.removeEventListener(‘fullscreenerror’, handler)
// mapped to: document.removeEventListener(‘vendorMappedFullscreenerror’, handler)
```

## Usage

Use it just like the spec api:

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
