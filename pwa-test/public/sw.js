const cacheData = "appV1";

this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                "/static/js/bundle.js",
                "/static/js/vendors~main.chunk.js",
                "/static/js/main.chunk.js",
                "/index.html",
                "/users",
                "/about",
                "/"
            ])
        })
    )
});

this.addEventListener("fetch", (event) => {

    // console.warn("url",event.request.url)

    if (!navigator.onLine) {

        if (event.request.url === "http://localhost:3000/static/js/main.chunk.js") {
            event.waitUntil(
                this.registration.showNotification("Internet", {
                    body: "internet not working",
                    icon:"data:image/jpeg;base64,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"
                })
            )
        }

        event.respondWith(
            caches.match(event.request).then((result) => {
                if (result) {
                    return result
                }
                let requestUrl=event.request.clone();
                return fetch(requestUrl)
            })
        )
    }
});