const CACHE_NAME='english-trainer-v5';
const APP_SHELL=['./','./index.html?v=5','./manifest.json','./icon-180.png?v=5','./icon-192.png?v=5','./icon-512.png?v=5','./sound-icon.svg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(APP_SHELL)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;const u=new URL(e.request.url);if(u.pathname.endsWith('/index.html')){e.respondWith(fetch(e.request,{cache:'no-store'}).catch(()=>caches.match(e.request)));return}e.respondWith(caches.match(e.request).then(x=>x||fetch(e.request)))});
