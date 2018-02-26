---
title: Declaração de variaveis na es6
lang: pt
date: 2017-09-06 14:42:04
description: Novas formas de declarar variaveis na es6.
tags: [Javascript, ECMAScript, Mudancas da es5 para a es6, es6]
categories: 
- Javascript
---

Na es6 o javascript ganhou mais 2 formas de atribuir variaveis, agora temos 3 tipos de declarações usando:
1. [var](http://www.ecma-international.org/ecma-262/6.0/#sec-variable-statement) = Inicialização opcional, pode ser declarada multiplas vezes com o mesmo nome.

```javascript
(()=> {
  console.log(contador); // undefined

  var contador = 0;

  for(var i = 0; i < 1; i++) {

    var contador = i;

    setTimeout(() => {

      console.log(i);   // 1

    }, 100);

  } 

  console.log(i);       // 1
})();
```

2. [let](http://www.ecma-international.org/ecma-262/6.0/#sec-let-and-const-declarations) = Inicialização opcional, faz parte apenas do bloco onde é declarada, não é hosted.

```javascript
(()=> {

  console.log(contador); // ReferenceError: can't access lexical declaration `contador' before initialization

  let contador = 0;

  for(let i = 0; i < 1; i++) {

    let contador = i;		

    setTimeout(() => {

      console.log(i);   // 0

    }, 100);

  } 

  console.log(i);       // ReferenceError: i não está definido
})();
```

3. [const](http://www.ecma-international.org/ecma-262/6.0/#sec-let-and-const-declarations) = Variavel apenas para leitura, não pode declarar uma função ou variável com o mesmo nome no mesmo escopo tambem não é hoisted.

```javascript
(()=> {

  console.log(contador); // ReferenceError: can't access lexical declaration `contador' 

  const contador = 0;

  for(var i = 0; i < 1; i++) {

    var contador = i;   // SyntaxError: redeclaration of const contador

    setTimeout(() => {

      console.log(i);   // 1

    }, 100);

  } 

  console.log(i);  

})();
```

### Diferenças 

Entre elas as mais importantes são:

- [Scopo](https://developer.mozilla.org/pt-BR/docs/Glossario/Escopo) Valor não sai do scopo

Usando **var fora de funções com scopo** seu valor entra no scopo atual no caso o window  

```javascript
var a = 19;
let b = 19;
const c = 19;
console.log(a, b, c); // 19 19 19
console.log(this.a , this.b, this.c); // 19 undefined undefined
```

Usando **var dentro de blocos** seu valor tambem sai do bloco

```javascript
{
  var a = 19;
  let b = 19;
  const c = 19;
  console.log(a, b, c); // 19 19 19
}
console.log(a); // 19
console.log(b); // ReferenceError: b is not defined
console.log(c); // ReferenceError: c is not defined
```

Usando **var dentro de loops** seu valor tambem sai do scopo do loop

```javascript
for (var i = 0; i < 10; i++) {
  var contador = i + 1;
}
console.log(i, contador); // 10 11
```

Ja o **let dentro de loops** seu valor se mantem no scopo do loop mas ainda existe fora do loop. Ja oque esta dentro do bloco não sai bloco.

```javascript
for (let i = 0; i < 10; i++) {
  let contador = i + 1;
}
console.log(i);        // undefined
console.log(contador); // ReferenceError: contador is not defined
```


- [Hoisting](https://developer.mozilla.org/pt-BR/docs/Glossario/Hoisting) Uso antes da declaração ou seja 

Isso é perfeitamente normal usando **var** 

```javascript
a = 19;
console.log(a); // 19
var a;
```

Ja usando **let** teremos um exception ReferenceError

```javascript
a = 19; // ReferenceError: can't access lexical declaration `a' before initialization
console.log(a); 
let a = 0;
```

E usando **const** tambem por não serem hoisted

```javascript
a = 19; // ReferenceError: can't access lexical declaration `a' before initialization
console.log(a); 
const a = 0; 
```

- [Redeclaration](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Errors/Redeclared_parameter) Declarar uma variavel ou função com o mesmo nome no mesmo scopo:

Usando **var** não tera problema
```javascript
function teste (a) {
  var a = 19;
  console.log(a); // 19
}
teste(20);
```

Com **let** recebera um exception de SyntaxError
```javascript
function teste (a) {
  let a = 19; // SyntaxError: redeclaration of formal parameter a
  console.log(a); 
}
teste(20);
```

E **const** o mesmo exception
```javascript
function teste (a) {
  const a = 19; // SyntaxError: redeclaration of formal parameter a
  console.log(a); 
}
teste(20);
```

- [Re-assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Invalid_const_assignment) sempre deve iniciar uma variavel **const** com algum valor ja que seu valor não pode ser alterado.

Com **var** e **let** não tera problemas em inicialo depois.
```javascript
var a;
let b;
a = 1;
b = 2;
console.log(a, b); // 1 2
```

E **const** o mesmo exception de SyntaxError

```javascript
const a; // SyntaxError: missing = in const declaration
a = 1;
console.log(a);
```