### applyMiddleWares()
``` JS
export default function applyMiddleware(...middlewares) {
  return (createStore) => (reducer, preloadedState, enhancer) => {
    var store = createStore(reducer, preloadedState, enhancer);
    var dispatch = store.dispatch;
    var chain = [];

    var middlewareAPI = {
      getState: store.getState,
      dispatch: (action) => dispatch(action)
    };
    chain = middlewares.map(middleware => middleware(middlewareAPI));
    dispatch = compose(...chain)(store.dispatch);

    return {...store, dispatch}
  }
}
```
``` JS
function applyMiddleware (...middlewares){
    return function(createStore){
        return function (reducer, preloadedState, enhancer) {
            var store = createStore(reducer, preloadedState, enhancer);
            var dispatch = store.dispatch;
            var chain = [];

            var middlewareAPI = {
            getState: store.getState,
            dispatch: (action) => dispatch(action)
            };
            chain = middlewares.map(middleware => middleware(middlewareAPI));
            dispatch = compose(...chain)(store.dispatch);

            return {...store, dispatch}
          }
    }
}
```
