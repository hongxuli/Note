Basically the reducer gets the previous state of your predefined object as an argument and the function must return in every single case the new state of the object.

The reducer is a pure function that takes the previous state and an action, and returns the next state.
Reducers specify how the application's state changes in response to actions sent to the store. Remember that actions only describe what happened, but don't describe how the application's state changes.