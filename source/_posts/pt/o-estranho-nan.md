---
title: O estranho NaN
lang: pt
date: 2018-02-05 09:35:45
description: Entendendo este caso estranho de NaN ou "Not a Number".
tags: [Javascript, NaN, Numbers]
categories:
- Javascript
---
## Entendendo
[NaN](http://www.ecma-international.org/ecma-262/5.1/#sec-15.1.1.1), ou "Not a Number", é um valor especial tambem uma propriedade global usado para representar um valor irrepresentável.
Para **obter** um NaN basta realizar uma operação invalida ou usar diretamente a propriedade Global:
```javascript
var a;
a = NaN; // NaN
a = 0/0; // NaN
a = parseInt('letra'); //NaN
```
### Comparando NaN
Não é possivel [comparar](/pt/javascript/comparando-no-javascript/) NaN com os operadores simples