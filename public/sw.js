// self JE, SPECIJALNI KEYTERM, KOJI SE ODNOSI NA window
//  ALI TIME CU SE DETALJNO POZBAVITI
self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('my_first_pwa')
        .then(function(cache) {
          cache.addAll([
            '/',
            '/index.html',
            '/src/css/app.css',
            '/src/js/app.js'
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