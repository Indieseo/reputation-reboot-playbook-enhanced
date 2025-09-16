// Indie Campers SEO Dashboard Service Worker
// Solar Journey Theme - Enhanced Enterprise Experience

const CACHE_NAME = 'indie-campers-seo-dashboard-v1.0.0';
const CACHE_URLS = [
  '/',
  '/index.html',
  '/src/main.tsx',
  '/src/index.css',
  '/favicon.ico',
  '/manifest.json',
  'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap'
];

// Install event - Cache essential resources
self.addEventListener('install', (event) => {
  console.log('🌞 Indie Campers SW: Installing solar-powered service worker...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('🌞 Indie Campers SW: Caching essential resources for offline presentation');
        return cache.addAll(CACHE_URLS);
      })
      .catch((error) => {
        console.error('🌞 Indie Campers SW: Cache installation failed:', error);
      })
  );
  
  // Activate immediately
  self.skipWaiting();
});

// Activate event - Clean up old caches
self.addEventListener('activate', (event) => {
  console.log('🌞 Indie Campers SW: Activating solar journey experience...');
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('🌞 Indie Campers SW: Removing old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  
  // Take control immediately
  self.clients.claim();
});

// Fetch event - Serve cached content for offline capability
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') {
    return;
  }
  
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version if available
        if (response) {
          console.log('🌞 Indie Campers SW: Serving from cache:', event.request.url);
          return response;
        }
        
        // Otherwise fetch from network
        return fetch(event.request)
          .then((response) => {
            // Check if valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            // Clone response for caching
            const responseToCache = response.clone();
            
            // Cache new resources
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });
            
            return response;
          })
          .catch((error) => {
            console.error('🌞 Indie Campers SW: Fetch failed for:', event.request.url, error);
            
            // Return offline fallback for navigation requests
            if (event.request.destination === 'document') {
              return caches.match('/index.html');
            }
            
            throw error;
          });
      })
  );
});

// Background sync for enhanced enterprise features
self.addEventListener('sync', (event) => {
  console.log('🌞 Indie Campers SW: Background sync triggered:', event.tag);
  
  if (event.tag === 'seo-data-sync') {
    event.waitUntil(
      // Placeholder for future SEO data synchronization
      Promise.resolve().then(() => {
        console.log('🌞 Indie Campers SW: SEO data synchronized successfully');
      })
    );
  }
});

// Push notifications for presentation updates
self.addEventListener('push', (event) => {
  console.log('🌞 Indie Campers SW: Push notification received');
  
  const options = {
    body: 'Your SEO dashboard has been updated with new insights!',
    icon: '/favicon.ico',
    badge: '/favicon.ico',
    tag: 'seo-update',
    requireInteraction: true,
    data: {
      url: '/',
      timestamp: Date.now()
    },
    actions: [
      {
        action: 'open',
        title: 'View Dashboard',
        icon: '/favicon.ico'
      },
      {
        action: 'dismiss',
        title: 'Dismiss',
        icon: '/favicon.ico'
      }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification('Indie Campers SEO Dashboard', options)
  );
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  console.log('🌞 Indie Campers SW: Notification clicked:', event.action);
  
  event.notification.close();
  
  if (event.action === 'open') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Message handling for dynamic cache updates
self.addEventListener('message', (event) => {
  console.log('🌞 Indie Campers SW: Message received:', event.data);
  
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'CACHE_URLS') {
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then((cache) => {
          return cache.addAll(event.data.payload);
        })
    );
  }
});

console.log('🌞 Indie Campers SW: Solar-powered service worker loaded successfully! Ready for enterprise presentation.');
