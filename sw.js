const CACHE_NAME = "rutina-v1";

const urlsToCache = [
  "./",
  "./index.html",
  "./deadhang.gif",
  "./flexinclinadas.gif",
  "./remoaustralian.gif",
  "./fondosbarra.gif",
  "./sentadillasasistida.gif",
  "./elevacionrodillas.gif"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});