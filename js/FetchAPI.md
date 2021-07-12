# FetchAPI

```JS
const response = await fetch(resource[, options])
```

1. resource: url String or a request object 
2. configuration object with properities like method, headers, body, credentials ... 



## Fetching Json 

```JS
async function fetchData() {
  try {
    const response = await fetch('/movie')

    // fetch does not throw error when server return bad HTTP response e.g. client(400-499)  server(500-599)
    if(!response.ok){ // response.ok = true when status (200-299)
      throw new Error (`An error has occured: ${response.status}`)
    }

    // response.json return a promise
    const movies = await response.json()

    return movies 
  } catch (e) {
    return null 
  }
}
```

Response object offers a lot methods (all promises): 

1. .json()
2. .text()
3. .formData()
4. .blob()
5. .arrayBuffer()


## Cancel a fecth request 

It need an additional tool to cancel request  (**AbortController**)

```JS
// Step 1: instantiate the abort controller
const controller = new AbortController();

// Step 2: make the fetch() aware of controller.signal
fetch(..., { signal: controller.signal });

// Step 3: call to cancel the request
controller.abort();
```

```JS
let controller = null;

fetchMoviesButton.addEventListener('click', async () => {
  controller = new AbortController();
  try {
    const response = await fetch('/movies', { 
      signal: controller.signal 
    });
  } catch (error) {
    console.log('Fetch error: ', error);
  }
  controller = null;
});

cancelFetchButton.addEventListener('click', () => {
  if (controller) {
    controller.abort();
  }
});
```
