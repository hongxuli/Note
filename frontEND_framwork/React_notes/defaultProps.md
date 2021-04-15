#### use the logical operator || to set a fallback value

``` JS
// ES6 class
class CatComponent extends React.Component {
    constructor(props) {}
    render() {
        return <div>{this.props.catName || "Sandy"} Cat, Eye Color: {this.props.eyeColor || "deepblue" }, Age: {this.props.age || "120"}</div>
    }
}
// Functional component
function CatComponent(props) {
    return <div>{props.catName || "Sandy"} Cat, Eye Color: {props.eyeColor || "deepblue"}, Age: {props.age || "120"}</div>
}
```


#### defaultProps

- es6 React Component
``` JS
class ReactComp extends React.Component {}
ReactComp.defaultProps = {}
// or
class ReactComp extends React.Component {
    static defaultProps = {}
}
```
example: 
``` JS
// ES6 class
class CatComponent extends React.Component {
    constructor(props) {}
    render() {
        return <div>{this.props.catName} Cat, Eye Color: {this.props.eyeColor }, Age: {this.props.age}</div>
    }
}
CatComponent.defaultProps = {
    catName: "Sandy",
    eyeColor: "deepblue",
    age: "120"
}
// or 
class CatComponent extends React.Component {
    constructor(props) {}
    static defaultProps = {
        catName: "Sandy",
        eyeColor: "deepblue",
        age: "120"        
    }
    render() {
        return <div>{this.props.catName} Cat, Eye Color: {this.props.eyeColor }, Age: {this.props.age}</div>
    }
}
```

- Functional Component

``` JS
function Reactcomp(props) {}
ReactComp.defaultProps = {}
```
example: 
``` JS
// Functional component
function CatComponent(props) {
    return <div>{props.catName} Cat, Eye Color: {props.eyeColor}, Age: {props.age}</div>
}
CatComponent.defaultProps = {
    catName: "Sandy",
    eyeColor: "deepblue",
    age: "120"    
}
```


- TS 

**class**
``` JS
type catAge = "120"
type eyeColor = "deepblue"
type catName = "Sandy"
export interface CatProps {
    catName: catName ,
    eyeColor: eyeColor,
    age: catAge
}
class CatComponent extends React.Component<CatProps> {
    constructor(props) {}
    static defaultProps = {
        catName: "Sandy",
        eyeColor: "deepblue",
        age: "120"        
    }
    render() {
        return <div>{this.props.catName} Cat, Eye Color: {this.props.eyeColor }, Age: {this.props.age}</div>
    }
}
```
**function**
``` JS
type catAge = "120"
type eyeColor = "deepblue"
type catName = "Sandy"
export interface CatProps {
    catName: catName ,
    eyeColor: eyeColor,
    age: catAge
}
function CatComponent(props: CatProps) {
    return <div>{props.catName} Cat, Eye Color: {props.eyeColor}, Age: {props.age}</div>
}
CatComponent.defaultProps = {
    catName: "Sandy",
    eyeColor: "deepblue",
    age: "120"    
}
```

reference: https://blog.bitsrc.io/understanding-react-default-props-5c50401ed37d