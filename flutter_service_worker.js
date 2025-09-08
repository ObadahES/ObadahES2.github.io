'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "246e21cd520184bdbc6520a2c0201da4",
".git/config": "4b3a918e76956d28e546b8e3fb9ec77f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "2e23ff0310c489cfdcda861c3ee08d02",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "44b7033ab9be069d66613e061dd7304f",
".git/logs/refs/heads/gh-pages": "44b7033ab9be069d66613e061dd7304f",
".git/logs/refs/remotes/origin/gh-pages": "e9fe33794511267907dd88b5b971d918",
".git/objects/01/4cb2ac17b4adb3091735b119e4a83d61009a42": "1ce41ae052da70e2c7a2d9ad953fea4c",
".git/objects/0a/eb020d949aefab4301dfb8e18ff9b80ab2ca7b": "a4821c435f512de8ca42c92487a7261a",
".git/objects/0e/613af77c5c64b3ce31d322186aadb213ff4bb4": "f8ae92e38d8c97170422ebff82dd608d",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/12/899a76da47cb511f9fd2ab842ab5742da22222": "b669924ac6df5075fa6678259e1387cb",
".git/objects/17/233d348d9e55ce6c6b36543eb9745630f38ad0": "b4097ccecff70d9bbef8de8175dcb751",
".git/objects/17/27e51e24c2026b8439015fd5230c9500ccbff5": "af029651833d88cc19f6b5f2036490e8",
".git/objects/17/75e55eaf4fabb64113b5b7d278841143dd03ce": "40e9be17b365ebbb0e7b4f195b8c81a3",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1d/519af44a657d42b7d0c987f00b891a18fd33e2": "0b31e7a2dd63bc2a6638fa195007f0a4",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/24/c59dd396b07036f6fb536feceb710ab061d758": "2d879e38654205d4562bce4804afd7c1",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2c/d6c7bb4bec960b85f450d3619427baac07cda7": "eb1d79abd6aabdcd23f68e4d5b195fdf",
".git/objects/38/f72c3b661274731c0dca4263c6147292c3313e": "06ec909689545717240ec77454003efe",
".git/objects/39/d032db2d6e56e30200552dac8076b58b167795": "8fc0eb799d849776cfb4a4bc4ab15047",
".git/objects/3b/034fcef56204f0aafe27af14db1e0351fe2a76": "54ad1d9741070080d9687f10f3f31115",
".git/objects/43/1b9bb1ce1b2c575dea1bda99bf5c7428d7a3f0": "9b421c33dfa9d1021f23be961d9134c6",
".git/objects/49/844fe992d25ea5d05138c63384069fdf58728f": "3bdb4de775dd84c8f2e30501e3bddbf7",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4c/1a61d214ca9442d900a4e8df8b23d2bcfd1b79": "62f73016da422d9dbcdcb4e76015fc17",
".git/objects/4c/a1c51a956378d3d5d2ae4ef05942c550d5d3db": "5270f63ad11182be0bd819ab6c1ee1c3",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/91ee00d4bdc1dbb64be4a0353f151dc2ddb9aa": "32d4f366c3c89d78a0b20dbbe35f8f5b",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/6d/7b8eb9ad590628b222ab7e7884a80ea14add72": "369ef61d945fe1e3e3d9bfc31b7b467c",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/74/9bf9bdd8d41347b64a2cc1e093d2937741b65c": "6cf35cac5328743e3abdd832568c6433",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7a/d8a0934fd949fd7bdf6adc1b3499cbbbc01a00": "c99829ab5d3bc7405f653f642ce907b0",
".git/objects/7d/1408f9dd983b26af412401639d42120e9ff448": "7db9d2548d01dd04c847165c979f7149",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/b0/1a5a0604ba57d2b0329dadbb3b94baf88590c1": "2af401bb8dfe48ded3182cd929c6277c",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b5/f5525118f9a3457e803729be9d1e3bc0fbd449": "1fd518a6afc6aefd9fea386648d0aa98",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/f7318c2a581cefeb470bba8c5c645e13b64c41": "9f47289e4ea183d45a305897ff20efad",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bf/593c4e88c8664f1852aaa6c35c0d7146731d21": "e62fa9f26f2b5fc3d404d7826c21391b",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/ce/ca78a30d72357bcd50fdeb16bec63377ab5b03": "464f3477de0f6784e80a2ccc616bbfde",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/251b81e3b0d2c8b09e9b4c5d517d8b333506d1": "cf0d6b8327621c0587cc00ba80e41d82",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/2c1d8a14ffb800e3cb6210f91d6ba163f65961": "d066971451f1454aab028685af9f88a3",
".git/objects/dc/713151342eace07db95b8a518f43b91d2cca42": "1c55d94291fddfd0bd0a2b8372fb3c9d",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e7/152d1f4c67b86ba1995d4efcb95117985aee45": "eadd6f41759fdcf200f37a5ec5cd6b01",
".git/objects/e8/f80c927b7f3a510e03f0b6ac599fd987ab94b8": "5c7cc963cf1c280312eca28c4b80145a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/a3388f6dbbfe35e045ac7566b8b39dd5579ee9": "52d224350a80e2f0c89edfdbd05ec825",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/60499a5887696dbbf2ca92a9def6bfc9b9c77f": "5808dc8deb58c616502f2f8fea6c7973",
".git/objects/f4/4f43b25164ea626cb453e6795b6dd9c2b0c2a0": "e6fd3e065930b706da5d372b790ab1d4",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/refs/heads/gh-pages": "cc85961e086b8a7717b09ff40ba634ca",
".git/refs/remotes/origin/gh-pages": "cc85961e086b8a7717b09ff40ba634ca",
"assets/AssetManifest.bin": "b0f24f64a8f13533884a8467d74fc05b",
"assets/AssetManifest.bin.json": "eeb2000edf751d26c746f8658624bd56",
"assets/AssetManifest.json": "bd8a89cd431057075e0a7b7e7e620f68",
"assets/assets/blueBackGround.jpg": "d0de9286318dd7abf715473307db5171",
"assets/assets/car.jpg": "bce944124302efb6917a6dd1611fa0be",
"assets/assets/person.jpg": "496706752469164c6d8104d2678e06f4",
"assets/assets/person2.jpg": "770ef047f8242d925502636dd3214072",
"assets/assets/redBackGround.jpg": "d3574a4ef3a32ec7f16e205da745ff91",
"assets/FontManifest.json": "67a28da3784fc091c2f816d615fbf08a",
"assets/fonts/MaterialIcons-Regular.otf": "a53918501d69bb8191fa435636c5c10f",
"assets/NOTICES": "dcf36bfa9f2f0a87568d389dad6ad881",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eb3ef449463792147665c95656f6ab20",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "f68a882259006496305b8a1d8df659f2",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "5bbda703c360224dd988e8d6f3204684",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "64a33629de8b0d4eeaae4e2389781db6",
"/": "64a33629de8b0d4eeaae4e2389781db6",
"main.dart.js": "bec7edfba1d1c0a1a70dd872011e29ce",
"manifest.json": "f28270a8a8e1a8b23943344f7af12388",
"version.json": "b795537e15d0f3f20f6048f353827f10"};
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
