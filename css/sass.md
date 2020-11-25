
Statements 

1. universial Statements
   - variable declaration, $var: value
   - flow control at-rules, @if and @each 
   - the @error, @warn, and @debug rules
2. css statements 
   - mixin uses using @include
3. top-level statements
   - module loads, using @use
   - imports, using @import
   - mixin definitions, using @mixin
   - function definitions, using @function
4. other statements

Expressions

- literals
- operations
- other expressions
  - function calls, nth($list, 1)
  - special functions, calc(1px + 100%)




### variable 
embed variable into string have to use #{}
``` CSS
$side : left 
.rounded{
  border-#{$side}-radius: 5px
}
```

### inherit 
inherit another class
``` CSS
.class1{
  border: 1px solid 
}
.calss2{
  @extend .calss1
  font-size:120%
}
```

### mixin
reuseable code block 
``` CSS
@mixin left{
  float: left 
  margin-left: 10px;
}

div{
  @include left 
}
```
you can add parameters for mixin 
``` CSS
  @mixin left($value: 10px){
  float: left 
  margin-left: $value;
}

div{
  @include(20px)
}
```

### Flow control
- @if and @else @else if 
``` CSS
p{
  @if 1+1 ==2 { border: 1px}
  @if 5<3 { border : 2px}
}

@mixin theme-colors($light-theme: true){
  @if $light-theme{
    background-color: $light-background
  } @else{
    background-color: $dark-background
  }
}

@mixin triangle($size, $color, $direction) {
  height: 0;
  width: 0;

  border-color: transparent;
  border-style: solid;
  border-width: $size / 2;

  @if $direction == up {
    border-bottom-color: $color;
  } @else if $direction == right {
    border-left-color: $color;
  } @else if $direction == down {
    border-top-color: $color;
  } @else if $direction == left {
    border-right-color: $color;
  } @else {
    @error "Unknown direction #{$direction}.";
  }
}

```
-  @for loop
``` CSS
@for $i from 1 to 10{
  .border-#{$i}{
    border: #{$i}px solid blue 
  }
}

```

- @each 
``` CSS
$sizes:40px, 50px

@each $size in $sizes {
  .icon-#{$size}{
    font-size: $size
  }
}
```

### Function
``` CSS
@function double($n){
  @return $n * 2
}


#sidebar{
  width: double(5px)
}
```










``` CSS
.projCard-Content-collapse {
  .read-more {
    ~ * {    //   all the sibling elements of read-more 
      display: none;
    }
  }
}

.projCard-Content-collapse {
  .read-more {
    & * {    //   all the children elements of read-more 
      display: none;
    }
  }
}


```
