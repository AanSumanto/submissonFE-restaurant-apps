var serviceWorkerOption = {
  "assets": [
    "/2556a48f07f0cbbe390a6b34291c8c1f.ttf",
    "/bundle.js",
    "/src/public/favicon.png",
    "/src/public/manifest.json",
    "/src/public/icons/favicon-114x114.png",
    "/src/public/icons/favicon-120x120.png",
    "/src/public/icons/favicon-144x144.png",
    "/src/public/icons/favicon-48x48.png",
    "/src/public/icons/favicon-512x51.png",
    "/src/public/icons/favicon-57x57.png",
    "/src/public/icons/favicon-64x64.png",
    "/src/public/icons/favicon-72x72.png",
    "/src/public/icons/favicon152.png",
    "/src/public/icons/favicon16.png",
    "/src/public/icons/favicon24.png",
    "/src/public/icons/favicon32.png",
    "/src/public/images/heros/hero-image_3.jpg",
    "/index.html"
  ]
};
        
        !function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){self.addEventListener("install",(function(e){console.log("Installing Service Worker...")})),self.addEventListener("activate",(function(e){console.log("Activating Service Worker")})),self.addEventListener("fetch",(function(e){console.log(e.request)}))}]);