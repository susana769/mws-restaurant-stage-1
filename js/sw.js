importScripts('/cache-polyfill.js');
/*self.addEventListener('fetch', function() {
  console.log(event.request);
});*/

self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('airhorner').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/restaurant.html',
       '/css/main.css',
       '/js/dbhelper.js',
       '/js/index.js',
       '/js/main.js',
       '/js/restaurant_info.js',
       '/images/casaenrique.jpg'
     ]);
   })
 );
});