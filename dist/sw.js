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
    "url": "assets.bundle.594e198adef8b1b8c165.js",
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
    "url": "images/apple-touch-icon.png",
    "revision": "557fe0e5ad5a0313c8585e072202327e"
  }, {
    "url": "images/bmc-btn.png",
    "revision": "a051732a2612282e0dcf156f84c20f55"
  }, {
    "url": "images/favicon-32x32.png",
    "revision": "6145982fb911b0a18f5649a8e653b264"
  }, {
    "url": "images/header-bg.png",
    "revision": "b87ab2418cca11c5b94ad066518be8fb"
  }, {
    "url": "images/icomoon.svg",
    "revision": "56fd0297ecd0c40842fcb18cfb3aa031"
  }, {
    "url": "images/og-supercomicslicer.png",
    "revision": "d12dcca1a19c4cdecb370a5d7e3f92c9"
  }, {
    "url": "images/salespitch.svg",
    "revision": "4dff486d7af62d6bf95cad7d2ecba856"
  }, {
    "url": "images/tapas-icon.png",
    "revision": "3d6be825fa47843cf13e725f761925e8"
  }, {
    "url": "images/webtoon-icon.svg",
    "revision": "140c74e82ea7dc88f25c4353f5f2765e"
  }, {
    "url": "index.bundle.d08dbba58ebc1b9ec824.js",
    "revision": null
  }, {
    "url": "index.html",
    "revision": "a04fd67c529048994e5b1bd11fc4626a"
  }, {
    "url": "libs.bundle.cce9f7a21a6ca852ff03.js",
    "revision": null
  }, {
    "url": "node_modules_file-saver_dist_FileSaver_min_js.bundle.50fe64f47c67addc183a.js",
    "revision": null
  }, {
    "url": "reactreactBeautifulDnd.bundle.228f68a468419461367b.js",
    "revision": null
  }, {
    "url": "site.webmanifest",
    "revision": "131aca1fb3040bff277abe9ef14951a4"
  }, {
    "url": "src_scripts_components_Contact_js.bundle.a0d718790a7b936769de.js",
    "revision": null
  }, {
    "url": "src_scripts_components_Footer_js.bundle.e13d51edd6e2717ffc03.js",
    "revision": null
  }, {
    "url": "src_scripts_components_FormOptions_js.bundle.2d2ff0766e64068b19f1.js",
    "revision": null
  }, {
    "url": "src_scripts_components_FormResults_js.bundle.7c978f8f30ecb8f3ad54.js",
    "revision": null
  }, {
    "url": "src_scripts_components_FormSelect_js.bundle.abbee3e761850c825771.js",
    "revision": null
  }, {
    "url": "src_scripts_components_FormUpload_js.bundle.af0b340a6e8b19a910ba.js",
    "revision": null
  }, {
    "url": "src_scripts_components_Form_js.bundle.6f71890d53028e68de24.js",
    "revision": null
  }, {
    "url": "src_scripts_components_Header_js.bundle.3501e772d1a1ba209a2a.js",
    "revision": null
  }, {
    "url": "src_scripts_components_Intro_js.bundle.5a0a3fa1156835a45eb1.js",
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
