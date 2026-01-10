self.addEventListener("install", e=>{
  e.waitUntil(
    caches.open("yango-pro").then(cache=>{
      return cache.addAll([
        "pro.html",
        "manifest.json"
      ]);
    })
  );
});

self.addEventListener("fetch", e=>{
  e.respondWith(
    caches.match(e.request).then(res=>{
      return res || fetch(e.request);
    })
  );
});
