---
title: Functions vs Arrow-functions
lang: pt
date: 2018-01-23 15:40:14
description: Entendendo melhor function e arrow function
tags: [Javascript, Functions, ECMAScript, Mudancas da es5 para a es6, es6]
categories: 
- Javascript
---

## Entendendo melhor

A [Arrow-Funciton](http://www.ecma-international.org/ecma-262/6.0/#sec-arrow-function-definitions) incluida na [es6](http://frontend-weekly.codermarcos.com/pt/javascript/mudancas-da-es5-para-a-es6/) não é apenas uma sugar syntax de [Function](https://www.ecma-international.org/ecma-262/6.0/#sec-function-definitions) as duas sintaxes tem suas peculiaridades, abaixo listei algumas delas:

* [Hoisting]() Usando uma função não nomeada "anonymous-function" ela não é hoisted, como arrow functions são apenas anonimas ou seja só podem ser atribuidas a uma variavel não é possivel usalas antes de sua declaração. Segue exemplo:

```javascript
falarNome('Marcos'); // 'Marcos'

// Traditional function
function falarNome(nome) {
  console.log(nome);
}

falarIdade(19); // Exception: TypeError: falarIdade is not a function

// Anonimous function
var falarIdade = function(idade) {
  console.log(idade);
};

falarProfissao('frontend'); // Exception: TypeError: falarProfissao is not a function

// Arrow function
var falarProfissao = profissao => {
  console.log(profissao);
};
```

* [Constructor]() Uma arrow function não pode ser usada como um contructor. Segue Exemplo:

```javascript
// Traditional function
new function() {}(); // Object { }

// Arrow function
new (() => {})(); // TypeError: () => {} is not a constructor
```

* [Scope]() Arrow functions por não poder se usado como constructor isto é "ele não cria um objeto com seu proprio scopo" ele tem um **this** lexico, isto significa que seu escopo sera igual do contexto vinculado. Segue exemplo:

```javascript
function Message() {
  
  // Arrow function
  this.mensagem = 'Passou';
  (() => console.log(this.mensagem))(); // 'Passou'
}
new Message();

function Message() {
  
  // Traditional function
  this.mensagem = 'Passou';
  (function() {
    console.log(this.mensagem);         // undefined
  })();
}
new Message();
```

* [arguments]() Arrow functions não contem arguments pelo mesmo fato do anterior **arguments** tambem é lexico ou seja seu escopo sera igual do contexto vinculado. Segue exemplo:

```javascript
// Traditional function
var crescente = function() {
  return Array.from(arguments).sort((a, b) => a > b)
};
crescente(3,2,5,1,4,8,7,6); // Array [ 1, 2, 3, 4, 5, 6, 7, 8 ]

// Arrow function
var crescente = () => {
  return Array.from(arguments).sort((a, b) => a > b);
}
crescente(3,2,5,1,4,8,7,6); // Exception: ReferenceError: arguments is not defined
```
> uma solução para usar arrow function neste caso seria usar 
```javascript 
var crescente = (...arguments) => {}
```

* [sintax]() Arrow function alem de ter uma declaração diferente podemos omitir os conchetes quando omitidos o retorno da esspreção sera o retorno da função. Segue exemplo:

 ```javascript
(nome => `Nome: ${nome}`)('Marcos'); // 'Marcos'

(nome => { `Nome ${nome}` })('Marcos'); // undefined
 ```

Para retornar objetos temos que utilizar da seguinte forma

```javascript
(nome => ({nome}))('Marcos'); // 'Marcos'

(nome => {nome})('Marcos'); // undefined 
```