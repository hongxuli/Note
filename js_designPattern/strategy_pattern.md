### strategy pattern 
strategy pattern is consist of two parts:
1. a group of strtagies 
2. context 


#### traditional OOD implementation



#### JS implementation
```
var strategy = {
    'S': function (salary) { 
        return salary * 4
     },
    'A': function (salary) {  
        return salary * 3
    },
    'B': function (salary) { 
        return salary * 2
     }
}


var calculateBouns = function ( level, salary ) { 
    return strategy[level](salary)
 }

```