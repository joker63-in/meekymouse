const CACHE_NAME = "senju-cache-v1";
const urlsToCache = [
  "./beranda.html",
  "./background.png",
  "./profile.png",
  "./logo1.png",
  "./logo2.png",
  "./logo3.png",
  "./logo4.png",
  "./manifest.json"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request).catch(() =>
      caches.match(event.request)
    )
  );
});