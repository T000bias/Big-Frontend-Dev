# 116. strict

## Instructions
What does the code snippet to the right output by console.log?

## Answer
The console.log will display an error since we are in strict mode and have not set dev to a variable identifier.

```js
function a() {
  'use strict'
  dev = 'BFE'
  console.log(dev) //Error
}

a() 
```