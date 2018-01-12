---
title: Comparando no Javascript
lang: pt
date: 2017-10-21 02:58:04
description: Conhecendo melhor os laços do Javascript e suas diferentes utilidades.
tags: [Javascript, Loops]
categories: 
- Javascript
---
Listei alguns laços de repetição e seus funcionamentos.

- [for]() Loop default de contandor

> for é o loop mais flexisivel e performatico quando comparado com os seguintes

```javascript
const letras = ['a', 'b'];

for (let i = 0; i > letras.length; i++) {
    console.log(i);         // 0, 1
    console.log(letras[i]); // 'a', 'b'
}
```

- [for ...in]() Loop percorre o array retornando o o nome de cada elemento tambem pode se usado em objetos

```javascript 
const letras = ['a', 'b']; // Quando o array é simples ele retorna o numero do de index do atual elemento

for (let l in letras) {
    console.log(l);         // 0, 1
    console.log(letras[l]); // 'a', 'b'
}

const objeto = { a: 'vogal', b: 'consoante' };
for (let o in objeto) {
    console.log(o);         // a, b
    console.log(objeto[v]); // 'vogal', 'consoante'
}
```

- [for ...of]() Loop percorre o array retornando o valor do elemento

```javascript   
const letras = ['a', 'b']; 

for (let l of letras) {
    console.log(l); // 'a', 'b'
}
```

- [while]() Loop generico executa prieiro o teste depois executa a logica

```javascript   
const alfabeto = ['a', 'b', 'c'];

while (alfabeto.length % 2 === 0) {
    alfabeto.pop();
}
console.log(alfabeto); // Array [ "a", "b", "c" ]
```

- [do ...while]() Loop generico executa a logica primeiro depois realiza o teste

```javascript   
const alfabeto = ['a', 'b', 'c'];
do {
    alfabeto.pop();
} while (alfabeto.length % 2 === 0) 
console.log(alfabeto); // Array [ "a" ]
```

## Array.prototype

- [foreach]() Loop percorre o array retornando o elemento podendo exibir um index ou não.

```javascript   
const letras = ['a', 'b'];

letras.foreach((letra, i) => {
    console.log(i);         // 0, 1
    console.log(letra); // 'a', 'b'
});

```

- [map]() Loop que executa a logica diretamente no objeto retornando um novo array.

```javascript   
const tabuada = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const dois = tabuada.map((numero) => numero * 2);

console.log(dois); // Array [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ]
```

- [filter]() Loop para filtrar arrays.

```javascript   
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const pares = numeros.filter((numero) => numero % 2 === 0);

console.log(pares); // Array [ 2, 4, 6, 8, 10 ]
```

- [every]() Loop para verificar valor no array inteiro retornando true ou false.

```javascript   
[ 2, 4, 6, 8, 10 ].every((numero) => numero % 2 === 0);    // true
[ 1, 2, 4, 6, 8, 10 ].every((numero) => numero % 2 === 0); // false
```

- [sort]() Loop para ordenar array inteiro com funcao que deve retornar se o array sobe 1 ou desce 1 em sua posição ou permanece com 0.

```javascript   
const decrescente = [ 2, 4, 6, 8, 10 ].sort((v1, v2) => {
  if (v1 > v2) {
    return -1;
  }
  if (v2 > v1) {
    return 1;
  }
  return 0;
});   

console.log(decrescente); // Array [ 10, 8, 6, 4, 2 ]
```
