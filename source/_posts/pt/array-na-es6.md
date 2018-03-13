---
title: Array na es6
lang: pt
date: 2017-08-30 00:00:01
description: Novos prototypes da classe Array que foram implementados na es6.
author: 
    job:
    name: 
    link: 
    photo:
    email: 
    phone:
tags: [Javascript, ECMAScript, Mudancas da es5 para a es6, es6]
categories: 
- Javascript
---
## Arrays
Nas novidades que temos da [es5(ECMAScript 5.1)](http://www.ecma-international.org/ecma-262/5.1/) para a [es6(ECMAScript 6)](http://www.ecma-international.org/ecma-262/6.0/) referente a arrays temos dois novos metodos de busca que ajudaram a melhorar a sintax. 

> Voçê pode encontrar mais mudaças em [Mudanças da es5 para a es6](pt/javascript/mudancas-da-es5-para-a-es6)

1. [find](http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.find) = Semelhante ao filter mas retorna um unico objeto.

```javascript
// es5
[ {id: 2}, {id: 10}, {id: 7} ].filter(x =>  x.id === 10)[0]; // Object { id: 10 }

// es6
[ {id: 2}, {id: 10}, {id: 7} ].find(x =>  x.id === 10);      // Object { id: 10 }
```

2. [findIndex](http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.findindex) = Retorna o index do primeiro objeto encontrado no filter.

```javascript
// es5
var index = -1;
[ {id: 2}, {id: 10}, {id: 7} ].forEach((element, i) => { 
  if(element.id === 10 && index === -1) index = i; 
});
console.log(index);                                          // 1

// es6
[ {id: 2}, {id: 10}, {id: 7} ].findIndex(x => x.id === 10); // 1
```
