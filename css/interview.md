---
layout: blog-post
title: Css interview questions
tags:
  - css
date: 2020-08-12
description: common css questions
---


### What are the different ways you could integrate CSS into your HTML page?
1. use style tag
2. write css file and use link tag
3. integrate style using inline-styling 

### RGB stream 
RGB is a system of representing a certain colour in CSS. There are three streams in this nomenclature of representing a colour, namely the Red, Green and Blue stream. The intensity of the three colours is represented in numbers ranging from 0 to 256. This allows CSS to have a wide range of colours spreading across the entire spectrum of visible colours.

### what are ways to assgin a certain color to an element in css
1. hexadecimal notationn  # 
2. RGB functional notation  RGB()
3. HSL functional notation HLS()

### explain the CSS box model 
if the DOCTYPE is declared. The browser is going to compile box as W3C(content-box)
1. IE border-box width and height inculding the content border and padding
2. W3C content-box width and height only refer the content, not padding nor border

### z-index 
z-index indicates the stack order of positioned elements that may overlap one another.

### what are pseudo-elements in css?
it's a keyword added to a selector that lets you style a specific part of the selected element. They can be used for decoration(:first-line, :first-letter) or adding content before or after(::before   ::after)


### what are pseudo-classes in css?
it's used for apply css based on the state of an element.
e.g.  :hover   :focus

### different modules used in CSS
1. selector
2. background and border
3. animation 
4. box model
5. 2D/3D transformations
6. text effects 
7. multiple column layout 
8. user interface
   
### different media types allowed by css
1. all - for all meida type devices
2. print - for printers
3. speech -  for screenreader 
4. screen - for computer screen, tablets, samart-phone

### What are the different units used in CSS?
CSS has two types of lengths. Relative length and absolute length. Different units are used for them.

unit|descrption|
-----|-----|
em|relative to the font-size of the element|
rem|relative to the font-size of the root element|
vw|	Relative to 1% of the width of the viewport*|
vh|Relative to 1% of the height of the viewport*|
vmin|Relative to 1% of viewport’s* smaller dimension|
vmax|Relative to 1% of viewport’s* larger dimension|
%|Relative to 1% of viewport’s* larger dimension|
ex||
ch||

###  What is the overflow property in CSS used for?
overflow specific what should happen if content overflow an element box
- auto 
- hidden
- scroll
- visible
- inherit

### what is respnsive web design?
it's an approach to make use of flexiable layouts

### explain the cpncept of specificity in css(weight of selector)
Specificity is a weight that is applied to a given CSS declaration, determined by the number of each selector type in the matching selector. 
- !important
- inline style
- id selector    100 
- class, pseudo class, property 10
- tag, pseudo element   1 


### what are the various font-related attributes in CSS
- font-style
- font-size/line-height
- font-family 
- font-variant
- font-weight
- Caption 
- Icon 


### flexbox
parent container :

- flex-direction 
- flex-wrap
- justify-content 
- align-items
child container :

flex: grow shrink basis 

- flex-basis (define the size of the item in terms of the space)
- flex-grow (if it's postive intger, it will divide the rest of space by ratio then add to it's element )
- flex-shrink (if there is no sufficent room for basis element, it shrink the element by ratio )


### mobile-first strategy
 it agrees we should default and define all the styles for mobile devices, and only add specific responsive rules to other devices later.
 ``` CSS
 .my-class {

font-size: 12px;

}
/* see min means greater than it 
see max means smaller than it   */
@media (min-width: 600px) {

.my-class {

font-size: 24px;

}

}
 ```
A mobile-first strategy has 2 main advantages:

- It’s more performant on mobile devices since all the rules applied for them don’t have to be validated against any media queries
- It forces to write cleaner code in respect to responsive CSS rules.

### What are the different ways to position a certain element in CSS?
- fixed (relative to the viewport and doesn’t move when scrolled.)
- static 
- absolute 
- sticky
- relative 

###  what is block formatting context BFC
BFC is a mini layout in your layout 

A BFC is an HTML box that satisfies at least one of the following conditions:

- The value of float is not none.
- The value of position is neither static nor relative.
- The value of display is table-cell, table-caption, inline-block, flex, or inline-flex.
- The value of overflow is not visible.
- In a BFC, each box’s left outer edge touches the left edge of the containing block (for right-to-left formatting, right edges touch).


### what are Vendor - Prefixs?
- -webkit- (chrome, safari, newer verison of Opera, all ios browsers )
- -moz- (firefox)
- -o- (old, pre-webkit, versions of Opera)
- -ms- (Internet Exploer ,microsoft Edge) 