---
title: Proxy no javascript
lang: pt
date: 2018-03-10 21:15:00
description:
tags: [Javascript, es6, ECMAScript, Mudancas da es5 para a es6]
categories:
- Javascript
---

## Oque é proxy

O **Proxy** normalmente é um intermediário para ações entre o usuário e seu servidor. Mas no javascript o [Proxy](https://www.ecma-international.org/ecma-262/6.0/#sec-proxy-objects) é um objeto usado para criar um comportamento customizado para um objeto, definir ações para determinado comportamento.
<br>

### Uso simples

Seu uso é bem simples precisa apenas de um target que é um objeto e um handler que definira o comportamento customizado:

```javascript
var proxy = new Proxy(target, handler); 
```
<br>

#### Exemplo
Neste caso o **target** sera **pessoa**
```javascript
var pessoa = {
  nome: 'Marcos',
  idade: 19
};
```

E o comportamento customizado sera usando a trap (armadilha) no **set** ou seja quando alguem definir um novo valor para qualquer propriedade do objeto
```javascript
var handler = {
  set(target, key, value) {
    console.log(`A propriendade "${key}" esta recebedo "${value}"`);
    console.log(target); // target é o objeto original
    console.log(key);    // key é o nome da prop que esta sendo alterada
    console.log(value);  // value é o novo valor que esta sendo definido

    target[key] = value; // para alterar o objeto original
  }
};
```

Agora que esta definido o target e o handler basta apenas instanciar o objeto Proxy
```javascript
var proxy = new Proxy(pessoa, handler); 
// Proxy {​
//  < target > : { idade: 19​​, nome: "Marcos"​,​ __proto__: Object {…} }
//  < handler > : { set: function set(), __proto__: Object {…} }
// }
```

Então quando **alterar** alguma **propriedade do proxy** nosso comportamento customizado sera chamado
```javascript
proxy.nome = 'Marcos Junior';
// A propriendade "nome" esta recebedo "Marcos Junior"
// Object { nome: "Marcos", idade: 19 }
// "nome" 
// "Marcos Junior"
```
## Tipos de traps (Armadinhas)

##### Set
Como visto acima o set é disparado quando alguem define um novo valor para uma propriedade

```javascript
```