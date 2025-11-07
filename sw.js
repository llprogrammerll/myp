const CACHE = 'arduino-lab-v1';
const FILES = [
  '/',
  '/index.html',
  '/manifest.json',
  '/lessons/week1.html',
  '/lessons/week2.html',
  '/lessons/week3.html',
  '/lessons/week4.html',
  '/upload.html',
  '/assets/logo.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(FILES))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((resp) => resp || fetch(e.request))
  );
});