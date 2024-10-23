'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "13685bfd207941829f79ef5d655fd58e",
"assets/AssetManifest.bin.json": "552c2e1893b69d985825c125aa0dfc07",
"assets/AssetManifest.json": "1dc1f3b8e9c9f0c786f5374b2f5be805",
"assets/assets/fonts/Tajawal-Bold.ttf": "76f83be859d749342ba420e1bb010d6a",
"assets/assets/fonts/Tajawal-ExtraBold.ttf": "066a37467c3af47d359507f7c7976071",
"assets/assets/fonts/Tajawal-ExtraLight.ttf": "cce1763b8395a41d57dfdf63a2e97e62",
"assets/assets/fonts/Tajawal-Light.ttf": "b6f8ed4fd29cc11d562ce730712aeaae",
"assets/assets/fonts/Tajawal-Medium.ttf": "3358032dd0994cf4a2116f0b16f80d70",
"assets/assets/fonts/Tajawal-Regular.ttf": "e3fe295c55a0cb720f766bccc5eecf63",
"assets/assets/gifs/waring.gif": "018104076ade0f9e84dc437d59a5e228",
"assets/assets/icons/Beauty%2520Solution%2520LOGO%25201.svg": "d472f6f67f9acf0223f9cea128223a20",
"assets/assets/images/Beauty-Station-LOGO%25201.png": "61158d854a66c52b395639fc17858868",
"assets/assets/images/Beauty-Station-LOGO-2.png": "7277869931bafa700f6e9b099142da2e",
"assets/assets/images/Beauty-Station-LOGO.png": "1cca18678310f200f5a8ec80508126ce",
"assets/assets/images/ping-logo%25201.png": "da46789c51738f5f24f22796740de8ce",
"assets/assets/images/WELCOME.jpg": "d1aadd6cf6aa4be6e3a279503e3861a6",
"assets/assets/jsons/lang/ar.json": "55d08ae0ef174e06cfa54ea913f2f3b6",
"assets/assets/jsons/lang/en.json": "0acdc467a55285f7f0fededd0c4a7c09",
"assets/FontManifest.json": "acf10beef469aebe9cbc21a8e32721f0",
"assets/fonts/MaterialIcons-Regular.otf": "cd43b35f5a6e3026a31d90bdd9e95e93",
"assets/NOTICES": "6eaf92dba38dcca961c6023e519805c2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "85c446b19818c5bc1fd6f6252d4d2454",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"images/android-icon-144x144.png": "5182f8cf7f3409cdfa16b49fac3125ee",
"images/android-icon-192x192.png": "de93bd29fa86ac7bef22a2a7f8278612",
"images/android-icon-36x36.png": "58350869f665702ce50aa8f92569ea8d",
"images/android-icon-48x48.png": "b62389519c5583cc6b51a7ab4f1370d3",
"images/android-icon-72x72.png": "35c3b76f37c63471956c4d74ddde9f59",
"images/android-icon-96x96.png": "232c24bc4ef6e1b60d6ec491b7ee73ec",
"images/apple-icon-114x114.png": "f51277e685d679fefe26c78be7ffaf40",
"images/apple-icon-120x120.png": "35c407b81ffb63b14ce49b044763b2df",
"images/apple-icon-144x144.png": "5182f8cf7f3409cdfa16b49fac3125ee",
"images/apple-icon-152x152.png": "5db1f750228d1c5b2bbe05af64d093ff",
"images/apple-icon-180x180.png": "7d13765a1290deaaf410219b9e2fd263",
"images/apple-icon-57x57.png": "6680e71c47cad1a3101279ab49c494d3",
"images/apple-icon-60x60.png": "c9e742b720f5a15ff64574275c14f8a4",
"images/apple-icon-72x72.png": "35c3b76f37c63471956c4d74ddde9f59",
"images/apple-icon-76x76.png": "02a2433445b21870a044ab03a1335bf6",
"images/apple-icon-precomposed.png": "eca225431d2d6fbefec45ee0b8d79d0d",
"images/apple-icon.png": "eca225431d2d6fbefec45ee0b8d79d0d",
"images/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"images/favicon-16x16.png": "99c05970499055b2d19fbb3d82842c0a",
"images/favicon-32x32.png": "36720f58373ff7d71c2338c082666563",
"images/favicon-96x96.png": "e3cc8936dab2de25f8bc492c21e528fb",
"images/favicon.ico": "9908259a67fbe33c00eb54b7711ab390",
"images/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"images/ms-icon-144x144.png": "5182f8cf7f3409cdfa16b49fac3125ee",
"images/ms-icon-150x150.png": "b0055f4b125ee132a516ca33d0bfecdb",
"images/ms-icon-310x310.png": "78515d7e4edcf03caa44595d606d0e87",
"images/ms-icon-70x70.png": "dba2d751a276db308a7ae868a96a4672",
"index.html": "a07a6c72c4c81a2505e59bfd7c8c021f",
"/": "a07a6c72c4c81a2505e59bfd7c8c021f",
"main.dart.js": "d87e9aa71d76e255f81eccc4cdc88d22",
"manifest.json": "dd4a64bcc641c4c3bb6da6d9465c97ec",
"version.json": "0d3983109f9d3a451ced967998d80d3f"};
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
