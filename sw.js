// Service worker mínimo: Chrome lo pide para ofrecer "Instalar app".
// No guarda nada en caché: todo se pide siempre a internet.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () {});
