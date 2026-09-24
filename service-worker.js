const CACHE_NAME = "english-trainer-v5";
const APP_SHELL=["./","./index.html","./manifest.json","./icon.png"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(APP_SHELL)).then(()=>self.skipWaiting())));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",e=>{const r=e.request;if(r.method!=="GET")return;if(r.mode==="navigate"||new URL(r.url).pathname.endsWith("/index.html")){e.respondWith(fetch(r,{cache:"no-store"}).then(res=>{caches.open(CACHE_NAME).then(c=>c.put(r,res.clone()));return res}).catch(()=>caches.match(r).then(c=>c||caches.match("./index.html"))));return}e.respondWith(caches.match(r).then(c=>c||fetch(r).then(res=>{caches.open(CACHE_NAME).then(x=>x.put(r,res.clone()));return res})))})
