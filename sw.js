/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-9637eeee'], (function (workbox) { 'use strict';

  self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "assets/app-CRbySh0J.js",
    "revision": null
  }, {
    "url": "assets/aR13CH5N.js",
    "revision": null
  }, {
    "url": "assets/BA7rjPiq.css",
    "revision": null
  }, {
    "url": "assets/BaOSN7Gl.js",
    "revision": null
  }, {
    "url": "assets/C6Dx7pxG.css",
    "revision": null
  }, {
    "url": "assets/C8ukEo7o.js",
    "revision": null
  }, {
    "url": "assets/CG6uKW2T.js",
    "revision": null
  }, {
    "url": "assets/CJWvpnsb.css",
    "revision": null
  }, {
    "url": "assets/cover-mh0L3JCC.jpg",
    "revision": null
  }, {
    "url": "assets/D2B4WApD.css",
    "revision": null
  }, {
    "url": "assets/D4AfOCEQ.js",
    "revision": null
  }, {
    "url": "assets/DDIsul0q.js",
    "revision": null
  }, {
    "url": "assets/Dmlq1FOa.css",
    "revision": null
  }, {
    "url": "assets/donate-iTAF6ci1.jpg",
    "revision": null
  }, {
    "url": "assets/DQP6gcI8.css",
    "revision": null
  }, {
    "url": "assets/DuZU8riv.js",
    "revision": null
  }, {
    "url": "assets/DYsTnSyo.js",
    "revision": null
  }, {
    "url": "assets/taichi-Cpe_iz6n.png",
    "revision": null
  }, {
    "url": "assets/wx-BEFoXXau.jpg",
    "revision": null
  }, {
    "url": "assets/zjxGnTij.css",
    "revision": null
  }, {
    "url": "assets/Zp_JjF59.js",
    "revision": null
  }, {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "8ad2065cb860ba19b6791132da2cdf50"
  }, {
    "url": "icons/logo.svg",
    "revision": "cfd651d4741bdd642bb631c37be99b7b"
  }, {
    "url": "icons/maskable-icon-512x512.png",
    "revision": "fcfa50157969bbb251b4bc5f82c2f286"
  }, {
    "url": "icons/pwa-192x192.png",
    "revision": "4cb5fb54ac22131b7bcdb8237fbc7048"
  }, {
    "url": "icons/pwa-512x512.png",
    "revision": "2b6e2b2bb1c3ad706702e3d0fda3d02f"
  }, {
    "url": "icons/pwa-64x64.png",
    "revision": "4655d157f43206c5a69752c1f53d30e6"
  }, {
    "url": "animations/1726653612002.lottie",
    "revision": "eb2d8b40b144b78f764a42527130d766"
  }, {
    "url": "animations/1726656220209.lottie",
    "revision": "0d5a1fa0be9db98c4ed3361773cdfa75"
  }, {
    "url": "animations/dotlottie-player.wasm",
    "revision": "cdd2778e636008c04170c1a7d59d2ac4"
  }, {
    "url": "about.html",
    "revision": "801c8cb0ec55a3c1f745aad587b07a04"
  }, {
    "url": "answer.html",
    "revision": "d331dc5c5fc5176631e1b241063f544a"
  }, {
    "url": "bagua.html",
    "revision": "168ea644040906d15d1572099da1a337"
  }, {
    "url": "bazi.html",
    "revision": "23cb08a993de81a0c71b175f729a9d82"
  }, {
    "url": "index.html",
    "revision": "51e42edd8bec9d78b8e12efd2204bea2"
  }, {
    "url": "registerSW.js",
    "revision": "1872c500de691dce40960bb85481de07"
  }, {
    "url": "icons/pwa-192x192.png",
    "revision": "4cb5fb54ac22131b7bcdb8237fbc7048"
  }, {
    "url": "icons/pwa-512x512.png",
    "revision": "2b6e2b2bb1c3ad706702e3d0fda3d02f"
  }, {
    "url": "manifest.webmanifest",
    "revision": "41334d2c427e4723d77c6487ad8d2fe5"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html")));

}));
