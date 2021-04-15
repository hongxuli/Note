
[stateMergeHook](#here-is-a-custome-state-merger-hook)


Multiple calls to state updater from useState in component causes multiple re-renders

``` JS
const getData = url => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(async () => {

        const test = await api.get('/people')

        if(test.ok){
            setLoading(false);
            setData(test.data.results);
        }

    }, []);

    return { data, loading };
};
```

this component will rerender **twice** because of there are two useState.(only rerender in virtual DOM),it's better to combine these state togather.

``` JS

const {useState, useEffect} = React;

function App() {
  const [userRequest, setUserRequest] = useState({
    loading: false,
    user: null,
  });

  useEffect(() => {
    // Note that this replaces the entire object and deletes user key!
    setUserRequest({ loading: true });
    fetch('https://randomuser.me/api/')
      .then(results => results.json())
      .then(data => {
        setUserRequest({
          loading: false,
          user: data.results[0],
        });
      });
  }, []);

  const { loading, user } = userRequest;

  return (
    <div>
      {loading && 'Loading...'}
      {user && user.name.first}
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
```

**Note**: Unlike the setState in class components, the setState returned from useState doesn't merge objects with existing state, it replaces the object entirely. If you want to do a merge, you would need to read the previous state and merge it with the new values yourself. Refer to the docs.

#### here is a custome state merger hook
``` JS
const {useState, useEffect} = React;

function useMergeState(initialState) {
  const [state, setState] = useState(initialState);
  const setMergedState = newState => 
    setState(prevState => Object.assign({}, prevState, newState)
  );
  return [state, setMergedState];
}

function App() {
  const [userRequest, setUserRequest] = useMergeState({
    loading: false,
    user: null,
  });

  useEffect(() => {
    setUserRequest({ loading: true });
    fetch('https://randomuser.me/api/')
      .then(results => results.json())
      .then(data => {
        setUserRequest({
          loading: false,
          user: data.results[0],
        });
      });
  }, []);

  const { loading, user } = userRequest;

  return (
    <div>
      {loading && 'Loading...'}
      {user && user.name.first}
    </div>
  );
}
```
