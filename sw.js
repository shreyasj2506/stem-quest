const CACHE = "stemquest-v1";
const FILES = ["/", "/index.html", "/style.css", "/app.js", "/teacher.html"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
});

self.addEventListener("fetch", e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});