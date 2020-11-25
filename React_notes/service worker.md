### what is a service worker?
a service worker is a type of webwork. it's essentially a JS file that runs separately from the main browser thread, intercepting network requests, caching or retrieving resources from the cache, and delivering push messages.

Because workers run separately from the main thread, service workers are independent of the application they are associated with. This has several consequences:

- Because the service worker is not blocking (it's designed to be fully asynchronous) synchronous XHR and localStorage cannot be used in a service worker.
- The service worker can receive push messages from a server when the app is not active. This lets your app show push notifications to the user, even when it is not open in the browser.
- The service worker can't access the DOM directly. To communicate with the page, the service worker uses the postMessage() method to send data and a "message" event listener to receive data.

### things to note about service worker:
- a service worker is a newtwork proxy that lets you caontrol how network requests from your page are handled
- service worker only run over HTTPS.
- The service worker becomes idle when not in use and restarts when it's next needed. You cannot rely on a global state persisting between events. If there is information that you need to persist and reuse across restarts, you can use IndexedDB databases.

### what service workers do?
it can provide offline access to cached content.

two API that service worker used to work offline:
- Fetch
- Cache(a persistent content storage for application data)


### advanced features
- notifications API
- Push API
  
  An API that enables your app to subscribe to a push service and receive push messages. Push messages are delivered to a service worker, which can use the information in the message to update the local state or display a notification to the user. Because service workers run independently of the main app, they can receive and display notifications even when the browser is not running.
- Background Sync API
- Channel Messaging API


### service worker lifecycle 
- registation 
- installation 
- activation 