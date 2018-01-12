---
title: Oque é o spread?
lang: pt
date: 2017-09-06 14:42:04
description: Nova feature da es6, você pode encontrar mais em [Mudancas da es5 para a es6](/javascript/mudancas-da-es5-para-a-es6/).
tags: [Javascript, ECMAScript, Mudancas da es5 para a es6, es6]
categories: 
- Javascript
---
## Entendendo
O [spread](http://www.ecma-international.org/ecma-262/6.0/#sec-expressions) tranforma um array em multiplos elementos "Array literal"
Combinar arrays
```javascript
// es5
var vogais = ['a', 'e', 'i', 'o', 'u'];
var consoantes = ['b', vogais, 'c', 'd']; 
console.log(consoantes); // Array [ 'b', […], 'c', 'd' ]

// es6
var vogais = ['a', 'e', 'i', 'o', 'u'];
var consoantes = ['b', ...vogais, 'c', 'd']; 
console.log(consoantes); // Array [ 'b', 'a', 'e', 'i', 'o', 'u', 'c', 'd' ]
```

Ou extender

```javascript
// es5
var vogais = ['a', 'e', 'i', 'o', 'u'];
var consoantes = ['b', 'c', 'd'];
Array.prototype.push.apply(consoantes, vogais);
console.log(consoantes); // Array [ 'b', 'c', 'd', 'a', 'e', 'i', 'o', 'u' ]

// es6
var vogais = ['a', 'e', 'i', 'o', 'u'];
var consoantes = ['b', 'c', 'd'];
consoantes.push(...vogais);
console.log(consoantes); // Array [ 'b', 'c', 'd', 'a', 'e', 'i', 'o', 'u' ]
```