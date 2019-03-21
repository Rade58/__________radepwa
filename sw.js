// self JE, SPECIJALNI KEYTERM, KOJI SE ODNOSI NA window
//  ALI TIME CU SE DETALJNO POZBAVITI
self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('first-app')
        .then(function(cache) {
          cache.addAll([
            '/',
            '/index.html',
            '/app.css',
            '/app.js'
          ])
        })
    );
    return self.clients.claim();
});
  
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
        .then(function(res) {
            return res;
        })
    );
});