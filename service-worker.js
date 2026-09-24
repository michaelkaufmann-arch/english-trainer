const CACHE="english-trainer-v12";
const CORE=["./","./index.html","./manifest.json","./icon-v2.png","./icon.png","./apple-touch-icon-v2.png","./speech-button.png"];
const DATA=[
  "https://cdn.jsdelivr.net/gh/giniedp/media_education@master/drehbuch/doc/resources/vocabulary/more/Vokabellisten_Englisch/Deutsch%20-%20Englisch%20Grundwortschatz%20%5B1681%5D.csv",
  "https://cdn.jsdelivr.net/gh/GliteTech/research-ace-cefr@main/tasks/t0010_download_efllex_lexicon/assets/dataset/efllex-2018/files/EFLLex.tsv"
];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(async c=>{await c.addAll(CORE); for(const u of DATA){try{const r=await fetch(u,{cache:"no-store"}); if(r.ok) await c.put(u,r.clone())}catch(_){}}}).then(()=>self.skipWaiting())));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",e=>{
  if(e.request.method!=="GET")return;
  const url=new URL(e.request.url);
  const isData=DATA.includes(e.request.url);
  if(isData){
    e.respondWith(caches.match(e.request).then(cached=>cached||fetch(e.request,{cache:"no-store"}).then(r=>{const c=r.clone(); caches.open(CACHE).then(x=>x.put(e.request,c)); return r;}).catch(()=>cached)));
    return;
  }
  if(e.request.mode==="navigate"||url.pathname.endsWith("/index.html")){
    e.respondWith(fetch(e.request,{cache:"no-store"}).then(r=>{const c=r.clone();caches.open(CACHE).then(x=>x.put(e.request,c));return r}).catch(()=>caches.match(e.request).then(x=>x||caches.match("./index.html"))));
    return;
  }
  e.respondWith(caches.match(e.request).then(cached=>cached||fetch(e.request).then(r=>{
    if(url.origin===location.origin){const c=r.clone();caches.open(CACHE).then(x=>x.put(e.request,c))}
    return r;
  }).catch(()=>cached)));
});
