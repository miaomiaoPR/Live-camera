// 最小的 service worker：讓 Android 可以「安裝」這個 app 並出現在分享選單。
// 只處理頁面本身的開啟；離線時顯示上次開過的頁面。
const CACHE = "livecams-v1";
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", e => {
  if (e.request.mode !== "navigate") return;
  e.respondWith(
    fetch(e.request)
      .then(res => { const copy = res.clone(); caches.open(CACHE).then(c => c.put("./", copy)); return res; })
      .catch(() => caches.match("./"))
  );
});
