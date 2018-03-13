---
title: O estranho NaN
lang: pt
date: 2018-02-05 09:35:45
description: Entendendo este caso estranho de NaN ou "Not a Number".
author: 
    job:
    name: 
    link: 
    photo:
    email: 
    phone:
tags: [Javascript, NaN, Numbers]
categories:
- Javascript
---
## Entendendo

[NaN](http://www.ecma-international.org/ecma-262/5.1/#sec-15.1.1.1) ou "Not a Number", é um valor especial, que pode ser encontrado em como propriedade global e tambem estatica do [Number](http://www.ecma-international.org/ecma-262/5.1/#sec-15.7), é usado para representar um valor irrepresentável.
Para **obter** um **NaN** basta realizar uma operação invalida ou usar diretamente a propriedade Global:

```javascript
var a;
a = NaN; // NaN
a = 0/0; // NaN
a = parseInt('letra'); //NaN
```

### Comparando NaN

Não é possivel [comparar](/pt/javascript/comparando-no-javascript/) NaN com os operadores simples do javascript. Por exemplo:

```javascript
var a = 0/0; // NaN

a === Number.NaN; // false
a == Number.NaN;  // false
a === NaN;        // false
a == NaN;         // false
```

É possivel **comparar NaN** usando:

* [isNaN]() é um método Global, que retornara se a conversão do valor para Number falha. Por exemplo:
```javascript
isNaN({});        // true
isNaN('abc');     // true
isNaN(undefined); // true

isNaN(NaN); // true
isNaN(0/0); // true
```
Todos valores acima tentaram ser convertidos para Number e falharam pos isso todos retornam true.

* [Number.isNaN]() o método do Number, retorna apenas se o valor passado é NaN sem forçar a conversão para Number.

> Por estar dentro do scopo de Number é de se esperar que o valor recebido sera um Number por isso basta verificar se o valor é NaN

```javascript
Number.isNaN({});        // false
Number.isNaN('abc');     // false
Number.isNaN(undefined); // false

Number.isNaN(NaN); // true
Number.isNaN(0/0); // true
```

Para obter o mesmo resultado você pode usar este polifyll:

```javascript
function naoNumero(x) { return x !== x; };
```