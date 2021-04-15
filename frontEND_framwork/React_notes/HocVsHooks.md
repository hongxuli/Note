### Good cases for HOC 
- the behavior is not specific to any single compnoent, but rather than applies to many or all compnoent in the app.
- the behavior does not need to provide a bunch of props to the components that use it
- components can be used stand-alone without the behavior from the HOC
- No custom logic needs to be added to a component being wrapped by the HOC


in conclusion, HOC should be a component that is a low coupling and tends to applie to many others components


### some problem may be caused by use HOC in a wrong way 
- moving around the order of HOCs can break thing 
- passed props are implicit dependecies.(it can get confusing to know where props are coming from)
- using lots of HOCs with lots of props can acuse prop collisions 