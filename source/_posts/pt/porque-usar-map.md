---
title: Porque usar Map
lang: pt
date: 2018-02-18 20:50:56
description: Entendendo a utilidade do map e quando usa-lo.
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

## Entendendo

O [Map](https://www.ecma-international.org/ecma-262/6.0/#sec-map-objects) muito parecido com [Object](https://www.ecma-international.org/ecma-262/6.0/#sec-object-objects) e o [Array](https://www.ecma-international.org/ecma-262/6.0/#sec-array-objects) porem possui algumas peculiaridades, que o torna mais flexivel, e util em alguns casos vejamos abaixo:


* **Ordem** uma caracteristica muito interessante do Map é ele manter a ordem em que os elementos foram adicionados diferente do object que ordena pela chave

```javascript
var object = new Object();
object[2] = 'Marcos';
object[1] = 'Junior'; 
console.log(object); // Object { 1: "Junior", 2: "Marcos" }

// Se realizar um loop nas chaves vera que estão em outra ordem
for (var key of Object.keys(object)) {
    console.log(key); // 1, 2
}

var map = new Map();
map.set(2, 'Marcos');
map.set(1, 'Junior'); 
console.log(map); // Map { 2 → "Marcos", 1 → "Junior" }

// Realizando um loop é possivel ver que estão na ordem em que foram adicionadas
for (var key of map.keys()) { 
    console.log(key); // 2, 1
}
```

* **Chave** o Map pode conter **qualquer tipo como chave**, diferente do Object que aceita apenas Symbol, Number e String, se recebe algo diferente ele converte para string  

```javascript
var pessoa = {sexo:'Masculino'};

var object = new Object();
object[pessoa] = 'Marcos'; // Object { "[object Object]": "Marcos" }

// Perceba que a chave foi convertida para string 

var map = new Map();
map.set(pessoa, 'Marcos'); // Map { {…} → "Marcos" }
```

* **Tipo de chave** o Map pode conter **distinguir os tipos de chaves**, diferente do Object que converte para um tipo primitivo simples

```javascript
var object = new Object();
object['1'] = 'Marcos'; // Object { 1: "Marcos" }
object[1] = 'Junior';   // Object { 1: "Junior" }

// Perceba que a primeira chave foi convertida para inteiro fazendo com que a segunda substitui-se o valor da primeira

var map = new Map();
map.set('1', 'Marcos'); // Map { "1" → "Marcos" }
map.set(1, 'Marcos'); // Map { "1" → "Marcos", 1 → "Junior" }

// O Map mantem os dois tipos de chaves
```


* **Deletar** ao deletar um elemento do map ele retorna se esse elemento foi realmente excluido ou não. Diferente do Object que sempre retorna true

```javascript
var object = new Object();
object.nome = 'Marcos';

delete object.nome; // true

// Object sempre retorna true quando chamamos o delete em propriedades do Object
delete object.nome; // true

var map = new Map();
map.set('nome', 'Marcos'); // Map { "nome" → "Marcos" }
map.delete('nome'); // true

// Por ja ter sido removido ele não tem mais oque remover por isso retorna false
map.delete('nome'); // false
```

* **Loop** é possivel executar um loop diretamente no map ao contrario do object que é preciso utilizar suas keys

```javascript
var object = new Object();
object.nome = 'Marcos';

for (var key of Object.keys(object)) {
    console.log(object[key]); // "Marcos"
}

var map = new Map();
map.set('nome', 'Marcos'); // Map { "nome" → "Marcos" }

map.forEach((e) => console.log(e)); // "Marcos"
```

## Semelhaças 

* **Descobrir se contem a chave** no Object normalmente utiliza-se hasOwnProperty no map utiliza-se apenas has 

```javascript
var object = new Object();
object.nome = 'Marcos';

object.hasOwnProperty('nome');  // true
object.hasOwnProperty('idade'); // false

var map = new Map();
map.set('nome', 'Marcos');

map.has('nome');  // true
map.has('idade'); // false
```

* **Descobrir tamanho** no Object normalmente utiliza-se Object.keys no map utiliza-se apenas size 

```javascript
var object = new Object();
object.nome = 'Marcos';

Object.keys(object).length;  // 1

var map = new Map();
map.set('nome', 'Marcos');

map.size // 1
```

* **Limpar** no Object não existe um prototype que limpe o object no map temos o clear 

```javascript
var object = new Object();
object.nome = 'Marcos';

object = {};  // Object {}

var map = new Map();
map.set('nome', 'Marcos');

map.clear() // Map {}
```

## Pontos importantes 

* **Criar em branco** no Map não é possivel criar um Map sem prototype difirente do Object que é possivel

```javascript
var object = Object.create(null);
console.log(object); // Object {}

var map = new Map();
console.log(map); // Map { size: 0, <entries>, __proto__: Object {...} }
```

* **JSON.stringify** não é possivel converter um map para JSON usando JSON.stringify

```javascript
var map = new Map();
map.set('nome', 'Marcos');

JSON.stringify(map); // Object {}
```
> Ao inves de JSON.stringify utilize 
```javascript
const MapToJson = (map) => JSON.stringify([...map]);
const JsonToMap = (string) => new Map(JSON.parse(jsonStr));
```