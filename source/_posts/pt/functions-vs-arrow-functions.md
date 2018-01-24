---
title: Functions vs Arrow-functions
lang: pt
date: 2018-01-24 15:59:14
description: Entendendo melhor function e arrow function
tags: [Javascript, Functions]
categories: 
- Javascript
---

## Entendendo melhor

A [Arrow-Funciton](http://www.ecma-international.org/ecma-262/6.0/#sec-arrow-function-definitions) incluida na [es6](http://frontend-weekly.codermarcos.com/pt/javascript/mudancas-da-es5-para-a-es6/) não é apenas uma sugar syntax de [Function](https://www.ecma-international.org/ecma-262/6.0/#sec-function-definitions) as duas sintax tem suas peculiaridades abaixo listei algumas delas:

* [Hoisting]() Usando uma função não nomeada "anonymous-function" ela não se tornar hoisted, como arrow functions são apenas anonimas ou seja só podem ser atribuidas a uma variavel não é possivel usalas antes de sua declaração. Segue exemplo:

```javascript
falarNome('Marcos'); // 'Marcos'

function falarNome(nome) {
  console.log(nome);
}

falarIdade(19); // Exception: TypeError: falarIdade is not a function

// Declarando uma function anonima
var falarIdade = function(idade) {
  console.log(idade);
};

falarProfissao('frontend'); // Exception: TypeError: falarProfissao is not a function

// Declarando uma arrow function
var falarProfissao = profissao => {
  console.log(profissao);
};
```

* [Constructor]() Uma arrow function não pode ser usada como um contructor. Segue Exemplo:

```javascript
new function() {}(); // Object { }

new (() => {})(); // TypeError: () => {} is not a constructor
```

* [Scope]() Arrow functions consequentemente por não poder se usado como constructor isto é "ele não criar um objeto com seu proprio scopo" ele tem um **this** lexico isto significa que seu escopo sera igual do contexto vinculado. Segue exemplo:

```javascript
function Message() {
  this.mensagem = 'Passou';
  (() => console.log(this.mensagem))(); // Passou
}
new Message();

function Message() {
  this.mensagem = 'Passou';
  (function() {
    console.log(this.mensagem);         // undefined
  })();
}
new Message();
```

* [arguments]()

* [return]()