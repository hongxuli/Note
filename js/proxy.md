
### Proxy(target, handler)
- traget
- handler
  - trap  ----- the rules in hanlder


``` JS
 var proxy = new Proxy (target, handler)

 const handler = {
	//get is a trap
	get: (target, prop) => {
		if (prop === 'director') {
			return 'God'
		}
		return target[prop]
	},

	set: function (target, prop, value) {
		if (prop === 'actor') {
			target[prop] = 'John Travolta'
		} else {
			target[prop] = value
		}
	}
};

const movieProxy = new Proxy(movie, handler);

console.log(movieProxy.director); //God

movieProxy.actor = "Tim Roth";
movieProxy.actress = "Uma Thurman";

console.log(movieProxy.actor); //John Travolta
console.log(movieProxy.actress); //Uma Thurman
```
---
Vue 3.0 gives up use object.defineProperty(use to define or change property of  current object and return the object) and use Proxy to hajack data so that it can monitor the change of data

cause object.defineProperty can only monitor properties. However Proxy can monitor the entire Object.