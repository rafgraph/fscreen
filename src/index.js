const key = {
  fullscreenEnabled: 0,
  fullscreenElement: 1,
  requestFullscreen: 2,
  exitFullscreen: 3,
  fullscreenchange: 4,
  fullscreenerror: 5,
};

const webkit = [
  'webkitFullscreenEnabled',
  'webkitFullscreenElement',
  'webkitRequestFullscreen',
  'webkitExitFullscreen',
  'webkitfullscreenchange',
  'webkitfullscreenerror',
];

const moz = [
  'mozFullSreenEnabled',
  'mozFullScreenElement',
  'mozRequestFullScreen',
  'mozCancelFullScreen',
  'mozfullscreenchange',
  'mozfullscreenerror',
];

const ms = [
  'msFullscreenEnabled',
  'msFullscreenElement',
  'msRequestFullscreen',
  'msExitFullscreen',
  'MSFullscreenChange',
  'MSFullscreenError',
];

// so it doesn't throw if no document
const document = typeof window.document !== undefined ? window.document : {};

const vendor = (
  ('fullscreenEnabled' in document && Object.keys(key)) ||
  (webkit[0] in document && webkit) ||
  (moz[0] in document && moz) ||
  (ms[0] in document && ms) ||
  []
);

export default {
  requestFullscreen: element => element[vendor[key.requestFullscreen]](),
  reuqestFullscreenFunction: element => element[vendor[key.requestFullscreen]],
  get exitFullscreen() { return document[vendor[key.exitFullscreen]]; },
  addEventListener: (type, handler, options) => document.addEventListener(vendor[key[type]], handler, options),
  removeEventListener: (type, handler) => document.removeEventListener(vendor[key[type]], handler),
  get fullscreenEnabled() { return Boolean(document[vendor[key.fullscreenEnabled]]); },
  set fullscreenEnabled(val) {},
  get fullscreenElement() { return document[vendor[key.fullscreenElement]]; },
  set fullscreenElement(val) {},
  get onfullscreenchange() { document[`on${vendor[key.fullscreenchange]}`.toLowerCase()]; },
  set onfullscreenchange(handler) { document[`on${vendor[key.fullscreenchange]}`.toLowerCase()] = handler; },
  get onfullscreenerror() { document[`on${vendor[key.fullscreenerror]}`.toLowerCase()]; },
  set onfullscreenerror(handler) { document[`on${vendor[key.fullscreenerror]}`.toLowerCase()] = handler; },
};
