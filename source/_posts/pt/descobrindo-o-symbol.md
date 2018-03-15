---
title: Descobrindo o Symbol
lang: pt
date: 2017-12-04 22:10:04
photo:
description: Descobrindo oque é o symbol a es6 e como utiliza-lo.
author: 
    job: Frontend
    name: Marcos Junior 
    link: https://www.linkedin.com/in/codermarcos/ 
    photo: https://s.gravatar.com/avatar/5ccddd4e7cf7a5266ac229a691cabb5a?s=80
    email: coder.marcos@gmail.com 
    phone: 11 971353293
tags: [Javascript, ECMAScript, Mudancas da es5 para a es6, es6]
categories: 
- Javascript
---
## Entendendo
O [symbol](https://tc39.github.io/proposal-Symbol-description/) é um tipo de dado primitivo e imutável e pode ser usado como um identificador unico para propriedades de objeto, sem interferência das propriedades ja existentes objeto.
### Instanciando 
Symbol não contem contructor por isso não precisa do new
```javascript
// Pode ser instanciado em branco
var symbol = Symbol();
// Ou passando sua identificão
var symbol = Symbol('foo');
```

### É realmente unico ?
Veja você mesmo 
```javascript
var key = 'descricao';

var a = Symbol(key);

var b = Symbol(key);

console.log( a === b );         // false
console.log( a == b );          // false
console.log( Object.is(a, b) ); // false
```
Legal não é mesmo ?

#### Oque ha de bom ?
Por gerar um tipo unico mesmo com valores iguais ajuda a evitar conflitos em objetos exemplo:

Exemplo com key simples de string

```javascript
var a = {};

var key = 'chave';

a[key] = 1;
a[key] = 2;

console.log(a); // Object { chave: 2 }
```

Exemplo com Symbol

```javascript
var b = {};

var key = 'chave';
var x = Symbol(key);
var y = Symbol(key);

b[x] = 1;
b[y] = 2;

console.log(b); // Object { Symbol(chave): 1, Symbol(chave): 2 }
```

- [for](http://www.ecma-international.org/ecma-262/6.0/#sec-symbol.for) O **symbol.for** busca um symbol da chave recebida se encontrado ele traz a referencia da mesma, se não ele cria um novo symbol

```javascript
var key = 'chave';
var symbol = Symbol.for(key);

console.log( Symbol.for(key) === symbol ); // true
```

- [keyFor](http://www.ecma-international.org/ecma-262/6.0/#sec-symbol.keyfor)  O **symbol.keyFor** retorna a key do symbol passado como parametro.

```javascript
var b = {};

var key = 'chave';
var symbol = Symbol.for(key);

console.log( Symbol.keyFor(symbol) ); // "chave"
```
