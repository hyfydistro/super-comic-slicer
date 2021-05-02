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
  const singleRequire = name => {
    if (name !== 'require') {
      name = name + '.js';
    }
    let promise = Promise.resolve();
    if (!registry[name]) {
      
        promise = new Promise(async resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = name;
            document.head.appendChild(script);
            script.onload = resolve;
          } else {
            importScripts(name);
            resolve();
          }
        });
      
    }
    return promise.then(() => {
      if (!registry[name]) {
        throw new Error(`Module ${name} didn’t register its module`);
      }
      return registry[name];
    });
  };

  const require = (names, resolve) => {
    Promise.all(names.map(singleRequire))
      .then(modules => resolve(modules.length === 1 ? modules[0] : modules));
  };
  
  const registry = {
    require: Promise.resolve(require)
  };

  self.define = (moduleName, depsNames, factory) => {
    if (registry[moduleName]) {
      // Module is already loading or loaded.
      return;
    }
    registry[moduleName] = Promise.resolve().then(() => {
      let exports = {};
      const module = {
        uri: location.origin + moduleName.slice(1)
      };
      return Promise.all(
        depsNames.map(depName => {
          switch(depName) {
            case "exports":
              return exports;
            case "module":
              return module;
            default:
              return singleRequire(depName);
          }
        })
      ).then(deps => {
        const facValue = factory(...deps);
        if(!exports.default) {
          exports.default = facValue;
        }
        return exports;
      });
    });
  };
}
define("./sw.js",['./workbox-2a8a8a96'], function (workbox) { 'use strict';

  /**
  * Welcome to your Workbox-powered service worker!
  *
  * You'll need to register this file in your web app.
  * See https://goo.gl/nhQhGp
  *
  * The rest of the code is auto-generated. Please don't update this file
  * directly; instead, make changes to your Workbox build configuration
  * and re-run your build process.
  * See https://goo.gl/2aRDsh
  */

  self.skipWaiting();
  workbox.clientsClaim();
  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */

  workbox.precacheAndRoute([{
    "url": "assets.bundle.6c40d1c2b6bef9799a3f.js",
    "revision": null
  }, {
    "url": "fonts/JosefinSans-SemiBold.ttf",
    "revision": "22108cbbdb8b3ab5b505fdedcd334efa"
  }, {
    "url": "fonts/Quicksand-Bold.ttf",
    "revision": "0738679df4cf4e566f60343830da7bfa"
  }, {
    "url": "fonts/Quicksand-Regular.ttf",
    "revision": "216d43ee8707910af457af569eda1dec"
  }, {
    "url": "fonts/icomoon.eot",
    "revision": "3a30f5517289d1e824d2dd63193b06a2"
  }, {
    "url": "fonts/icomoon.ttf",
    "revision": "86adcbf5b34541cdc137efba3a75907d"
  }, {
    "url": "fonts/icomoon.woff",
    "revision": "5fb0e920a7001f23b1c182e3182a2890"
  }, {
    "url": "images/android-chrome-192x192.png",
    "revision": "7f8d0c3072e36e2c890abadbe1bbeef5"
  }, {
    "url": "images/android-chrome-512x512.png",
    "revision": "1380370e0b86bf8a28ec66ff69eb0a46"
  }, {
    "url": "images/apple-touch-icon.png",
    "revision": "44a60adc5eccff0ee0ea9778a499d116"
  }, {
    "url": "images/btn-bmc.png",
    "revision": "76eb1065f086d52221a54a4813c91d07"
  }, {
    "url": "images/favicon-32x32.png",
    "revision": "3bbd526d8b00600f76be5ddd236f429b"
  }, {
    "url": "images/header-bg.png",
    "revision": "fad365694e94cb7c93d35d6e68c3fa5e"
  }, {
    "url": "images/header-bg.webp",
    "revision": "fad365694e94cb7c93d35d6e68c3fa5e"
  }, {
    "url": "images/icomoon.svg",
    "revision": "56fd0297ecd0c40842fcb18cfb3aa031"
  }, {
    "url": "images/icon-tapas.png",
    "revision": "522e79bb074f3a44188908fe469c8c6f"
  }, {
    "url": "images/icon-webtoon.svg",
    "revision": "140c74e82ea7dc88f25c4353f5f2765e"
  }, {
    "url": "images/loader-hamster.gif",
    "revision": "dcb32925ae185da5282f4cae3d9f1aad"
  }, {
    "url": "images/og-supercomicslicer.png",
    "revision": "80b5d80507d59c821b1a2c66b59df67b"
  }, {
    "url": "images/salespitch.svg",
    "revision": "4dff486d7af62d6bf95cad7d2ecba856"
  }, {
    "url": "index.bundle.d31b4726a65bea4af67d.js",
    "revision": null
  }, {
    "url": "index.html",
    "revision": "094d3a3576e086d025eb8982bb50bb5b"
  }, {
    "url": "libs.bundle.eaed2a59c658de5e7f9a.js",
    "revision": null
  }, {
    "url": "node_modules_file-saver_dist_FileSaver_min_js.bundle.50fe64f47c67addc183a.js",
    "revision": null
  }, {
    "url": "reactreactBeautifulDnd.bundle.228f68a468419461367b.js",
    "revision": null
  }, {
    "url": "site.webmanifest",
    "revision": "8474c35a3624eb9aa91897eeb2cdf167"
  }, {
    "url": "src_scripts_components_Contact_js.bundle.a0d718790a7b936769de.js",
    "revision": null
  }, {
    "url": "src_scripts_components_Footer_js.bundle.3ef728719b1313573c8f.js",
    "revision": null
  }, {
    "url": "src_scripts_components_FormOptions_js.bundle.59c0a08093be71778ec2.js",
    "revision": null
  }, {
    "url": "src_scripts_components_FormResults_js.bundle.7c978f8f30ecb8f3ad54.js",
    "revision": null
  }, {
    "url": "src_scripts_components_FormSelect_js.bundle.0b9af3e9ca711b59dc2e.js",
    "revision": null
  }, {
    "url": "src_scripts_components_FormUpload_js.bundle.7c3aa4704c6bd72024d3.js",
    "revision": null
  }, {
    "url": "src_scripts_components_Form_js.bundle.b0fb37f605850e31f835.js",
    "revision": null
  }, {
    "url": "vendors-node_modules_babel_runtime_helpers_esm_inheritsLoose_js-node_modules_css-box-model_di-45dfde.bundle.e29fc9a184bcee477f26.js",
    "revision": null
  }, {
    "url": "vendors-node_modules_jszip_dist_jszip_js.bundle.cbbe79bee8329d8df635.js",
    "revision": null
  }], {});

});
//# sourceMappingURL=sw.js.map
