const CACHE = "arduino-lab-v1";
const FILES = [
  "/", "index.html",
  "manifest.json",
  "assets/logo.png",
  "lessons/week1.html"
  // Add all files here
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(FILES))
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(resp => resp || fetch(e.request))
  );
});