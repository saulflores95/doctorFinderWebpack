/*
** CONFIG
*/
const CACHE_VERSION = '0.1.9.7'
const CACHE_NAME = `healthcare-baja-v${CACHE_VERSION}`
const CACHED_ASSETS = [
  /* [PLACEHOLDER_FOR_FILES] */
  '/static/healthcarebaja.png',
  '/static/Veterinarian.jpg'
]

function clearPreviousCaches (keys) {
  const deletedCachesPromises = keys.map(key => {
    if (key !== CACHE_NAME) {
      return caches.delete(key)
    }
  })

  return Promise.all(deletedCachesPromises)
}

/*
** INSTALL SW
*/
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.keys()
      .then(keys => clearPreviousCaches(keys))
      .then(_ => caches.open(CACHE_NAME))
      .then(cache => cache.addAll(CACHED_ASSETS))
      .then(_ => self.skipWaiting())
  )
})

/*
** ACTIVATE SW
*/
self.addEventListener('activate', (event) => {
  console.log('[ServiceWorker] activating...')
  event.waitUntil(self.clients.claim())
})

/*
** INTERCEPT REQUESTS
*/
self.addEventListener('fetch', (event) => {
  console.log('[ServiceWorker] fetching..')
  if (event.request.url === `http://localhost:3000/login`) {
    console.log('Login cache ignored')
    event.respondWith(fetch(event.request))
  }
  if (event.request.url === `http://localhost:3000/api/doctors`) {
    console.log('Login cache ignored')
    event.respondWith(fetch(event.request))
  }
  if (event.request.url === `http://localhost:3000/dev`) {
    console.log('Login cache ignored')
    event.respondWith(fetch(event.request))
  }
  if (event.request.url === `https://healthcarebaja.com/login`) {
    console.log('Login cache ignored')
    event.respondWith(fetch(event.request))
  }
  if (event.request.url === `https://healthcarebaja.com/dev`) {
    console.log('Dev cache ignored')
    event.respondWith(fetch(event.request))
  }
  if (event.request.url === `https://healthcarebaja.com/api/email`) {
    console.log('Email cache ignored')
    event.respondWith(fetch(event.request))
  }
  if (event.request.url === `https://healthcarebaja.com/register`) {
    console.log('Register cache ignored')
    event.respondWith(fetch(event.request))
  }
  if (event.request.url === `https://healthcarebaja.com/api/logout`) {
    console.log('Logout cache ignored')
    event.respondWith(fetch(event.request))
  }
  if (event.request.url === `https://healthcarebaja.com/doctor-registration` || event.request.url === `https://healthcarebaja.com/lab-registration` || event.request.url === `https://healthcarebaja.com/pharmacie-registration` || event.request.url === `https://healthcarebaja.com/hospital-registration` || event.request.url === `https://healthcarebaja.com/clinic-registration`) {
    console.log('registration cache ignored')
    event.respondWith(fetch(event.request))
  }
  if (event.request.url === 'http://localhost:3000/doctor-registration' || event.request.url === `http://localhost:3000/lab-registration` || event.request.url === `http://localhost:3000/pharmacie-registration` || event.request.url === `http://localhost:3000/hospital-registration` || event.request.url === `http://localhost:3000/clinic-registration`) {
    console.log('local host registration cache ignored')
    event.respondWith(fetch(event.request))
  }
  if (event.request.url === 'http://localhost:3000/api/image-upload') {
    console.log('localhost image upload ignored')
    event.respondWith(fetch(event.request))
  }
  if (event.request.url === 'https://healthcarebaja.com/api/image-upload') {
    console.log('hcb request for image upload ignored')
    event.respondWith(fetch(event.request))
  }
  event.respondWith(
    caches.match(event.request)
      .then(resp => resp ||
        // If not in cache, request it over the network and add it to current cache
        fetch(event.request).then(response => {
          const isChromeExtension = event.request.url.startsWith('chrome-extension')

          if (!isChromeExtension) {
            caches.open(CACHE_NAME)
              .then(cache => cache.put(event.request, response.clone()))
          }

          return response.clone()
        })
      )
  )
})
