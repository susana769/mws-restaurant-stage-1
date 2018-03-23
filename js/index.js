console.log('Hello!');

self.addEventListener('fetch', function() {
	console.log(event.request);
});