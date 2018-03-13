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
<p align="center">
    <img width="100%" src="https://raw.githubusercontent.com/codermarcos/frontend-weekly/assets/javascript/proxy-no-javascript/proxy.png" alt="Criar objeto pessoa">
</p>

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

E o comportamento customizado sera usando a trap (armadilha) no **set** ou seja quando alguem definir um novo valor para qualquer propriedade do objeto ele que ira interceptar esta ação.
```javascript
var handler = {
  set(target, key, value, receiver) {
    console.log(`A propriendade "${key}" esta recebedo "${value}"`);
    console.log(target);    // target é o objeto original
    console.log(key);       // key é o nome da prop que esta sendo alterada
    console.log(value);     // value é o novo valor que esta sendo definido
    console.log(receiver);  // receiver é como o proxy estara apos o disparo da armadilha

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

Traps nada mais são que os tipos de armadilhas que pode ter dentro de um handler ou seja qual ação vai disparar o proxy. Listei abaixo as que acho mais uteis:

##### get
Como visto acima o set é disparado quando alguem define um novo valor para uma propriedade.

```javascript
var pessoa = {
  nome: 'Marcos'
};

var proxy = new Proxy(pessoa, {
  set(target, key, value, receiver) {
    target[key] = value.toUpperCase();
  }
}); 

proxy.nome = 'Junior';

console.log(pessoa); // Object { nome: "JUNIOR" }
```
> Observação se não atribuir o value ao objeto target ele não atualizara o valor
<br>

##### get
O get é disparado toda vez que alguem solicitar alguma propriedade daquele objeto.

```javascript
var pessoa = {
  nome: 'Marcos'
};

var proxy = new Proxy(pessoa, {
  get(target, key) {
    return `O valor solicitado é ${target[key]}`;
  }
}); 

console.log(proxy.nome); // O valor solicitado é Marcos
```
<br>

##### has
Has muito parecido com get porem dispara quando é verificado se existe aquela propriedade naquele objeto.

```javascript
var pessoa = {
  nome: 'Marcos'
};

var proxy = new Proxy(pessoa, {
  has(target, key) {
    // Negaremos a saida para afetar o resultado
    return !(key in target);
  }
}); 

// Ele retornara false mesmo existindo nome em proxy
console.log('nome' in proxy); // false
```
<br>

#### deleteProperty

deleteProperty por sua tradução ja diz tudo "excluir propriedade", é exatamente assim que essa armadilha é disparada, toda vez que alguem tentar excluir uma propriedade.

```javascript
var pessoa = {
  nome: 'Marcos'
};

var proxy = new Proxy(pessoa, {
  deleteProperty(target, key) {
    console.log(`Deletando ${key}`);
    delete target[key]
  }
}); 

delete proxy.nome; // Deletando nome
```
<br>

#### defineProperty

defineProperty tambem por sua tradução ja diz tudo "definir propriedade", é exatamente assim que essa armadilha é disparada, toda vez que alguem tentar criar uma nova propriedade.
```javascript
var pessoa = {
  nome: 'Marcos'
};

var proxy = new Proxy(pessoa, {
  defineProperty(target, key, descriptors) {
    console.log(`Criando uma nova propriedade chamada ${key} com valor ${descriptors.value}`);
    console.log(descriptors);
    return target;
  }
}); 

proxy.idade = 19; // Criando uma nova propriedade chamada idade com valor 19
                             // Object { value: 19, writable: true, enumerable: true, configurable: true }
```

## Uso real

Não é muito interessante para executar ações simples. Mas pode se tornar muito interessante e util para deixar o codigo mais limpo e reutilizavel. Alguns exemplos são:

* Validações
* Correção de variaveis
* Implementar ações no DOM 
* Restringir acesso a valores 
* Extender objetos nativos do javascript.


## Suporte 
Seu suporte jas esta em **87,66%** segundo o [can i use](https://caniuse.com/#feat=proxy) então pode usar tranquilo. Claro que se estiver usando um transpilador como [Babel](https://babeljs.io/) não precisa nem se preucupar com isso.

## Conclusão 

É sempre bom sair do "arroz e feião" do javascript conhecer novos objetos, funções e caracteristicas que facilitam ou até mesmo ajudam a limpar nosso codigo. Nesse caso acho que o **Proxy** em grande parte veio para limpar nosso codigo e deixa-lo mais legivel e reutilizavel. Como [Addy Osmani](https://developers.google.com/web/resources/contributors/addyosmani) disse  "Embora estejamos despedindo de **Object.observe()** agora é possível temos um possivel polyfill usando o Proxie"