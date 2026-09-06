const CACHE_NAME = 'butros-catalog-v1';
const assetsToCache = [
  './index.html',
  'https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&display=swap'
];

// تثبيت التطبيق وحفظ الملفات في التخزين المؤقت
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(assetsToCache);
    })
  );
});

// جلب الملفات من التخزين المؤقت عند انقطاع النت
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});