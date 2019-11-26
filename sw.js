importScripts('https://cdn.jsdelivr.net/npm/workbox-cdn@4.3.1/workbox/workbox-sw.js')

// --------------------------------------------------
// Configure
// --------------------------------------------------

// Set workbox config
workbox.setConfig({
  "debug": false
})

// Start controlling any existing clients as soon as it activates
workbox.core.clientsClaim()

// Skip over the SW waiting lifecycle stage
workbox.core.skipWaiting()

workbox.precaching.cleanupOutdatedCaches()

// Enable offline Google Analytics tracking
workbox.googleAnalytics.initialize()

// --------------------------------------------------
// Precaches
// --------------------------------------------------

// Precache assets

// --------------------------------------------------
// Runtime Caching
// --------------------------------------------------

// Register route handlers for runtimeCaching
workbox.routing.registerRoute(new RegExp('(/static/content)?/api/v0/.*'), new workbox.strategies.NetworkFirst ({"cacheName":"servisy_aplaut_api","cacheExpiration":{"maxEntries":10,"maxAgeSeconds":300}}), 'GET')
workbox.routing.registerRoute(new RegExp('/static/(?!content).*$'), new workbox.strategies.CacheFirst ({}), 'GET')
workbox.routing.registerRoute(new RegExp('/'), new workbox.strategies.NetworkFirst ({}), 'GET')
