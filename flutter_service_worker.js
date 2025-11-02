'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "6697ddf9439b692497b15dfecf9ab92b",
"version.json": "e807d89b8d18e822bd26a8c723ed10bf",
"index.html": "b6ad9dac11d6edeb7be0846563be8222",
"/": "b6ad9dac11d6edeb7be0846563be8222",
"main.dart.js": "26bed375156c8f3e0e7f8517b5141f91",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "fc2675b60c6d3a0997dad0f2562f8dbd",
"assets/AssetManifest.json": "ecd04cf6336df2535b2e14f5ea71a0e2",
"assets/NOTICES": "05dd89854f3cbc959a700ed0e57db635",
"assets/FontManifest.json": "11d6a7c36334e334e59d3a46eb9b93bc",
"assets/AssetManifest.bin.json": "2990dbecade0a868e765dc7c6ea387ad",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "f6a3b726607661c5f65a47dc07402c26",
"assets/fonts/MaterialIcons-Regular.otf": "d7f7b27bb12fad36c8d111861920da4b",
"assets/assets/trips_mock.json": "e2c4f1cd68b2ac8cc423bda6f4ecdb23",
"assets/assets/icons/settings.svg": "5af8fd6c2cfd8607a1c262f47da38bd1",
"assets/assets/icons/person.jpg": "32a92aa7b07407faf9df10ece7dc3f4f",
"assets/assets/icons/more.svg": "941e910ac124e971c1f50dcb50b2a3a1",
"assets/assets/icons/filter.svg": "8a948ec607d767ff99a15ef33d6f438d",
"assets/assets/icons/logo_icon.svg": "3d8dae0d899c8e2546b786c3a27a31c1",
"assets/assets/icons/alarm.svg": "32080c5fac8d86f54ffd18dbb5f34e20",
"assets/assets/fonts/inter/Inter_18pt-ExtraBoldItalic.ttf": "b03bfa9ceab3df1f81834d0523331c30",
"assets/assets/fonts/inter/Inter_18pt-LightItalic.ttf": "6eb3a2d2c6f095080ac034867886d0bf",
"assets/assets/fonts/inter/Inter_18pt-ExtraLight.ttf": "2c6c78d98816958b53fea58451f921d3",
"assets/assets/fonts/inter/Inter_18pt-ThinItalic.ttf": "95d83862ccec5b0d0487f243e34fcc61",
"assets/assets/fonts/inter/Inter_18pt-ExtraBold.ttf": "a6ed481bff60bc9270904d214947ab13",
"assets/assets/fonts/inter/Inter_18pt-BoldItalic.ttf": "da935c5b19ddded26aab2c880d835a8e",
"assets/assets/fonts/inter/Inter_18pt-Thin.ttf": "6f2d2f41f504aee66da88684f15d7e1d",
"assets/assets/fonts/inter/Inter_18pt-BlackItalic.ttf": "6a6d7edd78447c5edcb33570ce97efe8",
"assets/assets/fonts/inter/Inter_18pt-Bold.ttf": "f77ce9588dccbc52fdbf0b79f0d63714",
"assets/assets/fonts/inter/Inter_18pt-ExtraLightItalic.ttf": "24df6449633144fa3f4258c775dd67c5",
"assets/assets/fonts/inter/Inter_18pt-Medium.ttf": "8540f35bf8acd509b9ce356f1111e983",
"assets/assets/fonts/inter/Inter_18pt-Black.ttf": "b797a429ef21b9b7d44b96038cdb10f2",
"assets/assets/fonts/inter/Inter_18pt-MediumItalic.ttf": "c64a8c393f4d6ffd87f80723727b7f2c",
"assets/assets/fonts/inter/Inter_18pt-Light.ttf": "dfaec8b8820224135d07f1b409ceb214",
"assets/assets/fonts/inter/Inter_18pt-Italic.ttf": "ab4004692577ac82604c777fa83da556",
"assets/assets/fonts/inter/Inter_18pt-SemiBoldItalic.ttf": "0f93bef7d8e8ea0612ba37a71efcccff",
"assets/assets/fonts/inter/Inter_18pt-SemiBold.ttf": "e5532d993e2de30fa92422df0a8849dd",
"assets/assets/fonts/inter/Inter_18pt-Regular.ttf": "37dcabff629c3690303739be2e0b3524",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
