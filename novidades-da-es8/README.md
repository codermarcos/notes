# Novidades da es8
Novidades da [es8(ECMAScript 8)](http://www.ecma-international.org/ecma-262/) para acompanhar as outras implementações você tambem pode ler [Novidades da es7 (EcmaScript 7)](https://github.com/codermarcos/javascript-weekly/tree/master/novidades-da-es7) e tambem [Mudancas da es5 para a es6](https://github.com/codermarcos/javascript-weekly/tree/master/mudancas-da-es5-para-a-es6)

Strings
=
Temos dois novos metodos de busca que ajudaram a melhorar a sintax
1. [padStart](http://www.ecma-international.org/ecma-262/#sec-string.prototype.padstart) = Completa um comprimento definido para a string preenchendo o começo com o caracter passado no parametro ou espaços.
```javascript
'6'.padStart(4);      // "   -"
'-'.padStart(4, '6'); // "666-"
'-'.padStart(1, '6'); // "-"
```

2. [padEnd](http://www.ecma-international.org/ecma-262/#sec-string.prototype.padend) = Completa um comprimento definido para a string preenchendo o final com o caracter passado no parametro ou espaços.
```javascript
'6'.padEnd(4);      // "-   "
'-'.padEnd(4, '6'); // "-666"
'-'.padEnd(1, '6'); // "-"
```

Objects
=
1. [values](http://www.ecma-international.org/ecma-262/#sec-object.values) = Semelhante ao **Object.keys** só que ao inves de retornar um array com os nomes das propriedades este retorna um array com os valores.
```javascript
const pessoa = { nome: 'Marcos', idade: 19, proficao: 'front-end' };
Object.keys(pessoa);    // Array [ "nome", "idade", "proficao"]
Object.values(pessoa);  // Array [ "Marcos", 19, "front-end"]

// se as keys forem numericas é retornado em ordem numerica
const vogais = { 1:'e', 0:'a', 2:'i', 4:'u', 3:'o' };
Object.values(vogais);  // Array [ 'a', 'e', 'i', 'o', 'u' ]
``` 
2. [entries](http://www.ecma-international.org/ecma-262/#sec-object.entries) = Retorna o objeto como um array tranformando as propriedades e as key em um enumerable.
```javascript
const pessoa = { nome: 'Marcos', idade: 19, proficao: 'front-end' };
Object.entries(pessoa); // Array [ ["nome", "Marcos"], ["idade", 19], ["profisao", "front-end"] ]
``` 

Async/Await 
=
Uma funcão async espara o retorno das promises para continuar sua execução
> Você pode entender um pouco melhor sobre Async/Await em [Promises com AsyncAwait](https://github.com/codermarcos/javascript-weekly/tree/master/promises-com-async-await)

```javascript
const request = new Promise((res, rej) => { setTimeout(() => { res('request completo') },1000) });

// es6
(() => {
  let logger;
  request.then((done)=> logger = done);
  console.log(logger); // undefined
})();

// es7
(async () => {
  let logger;
  await request.then((done)=> logger = done);
  console.log(logger); // request completo
})();
```
getOwnPropertyDescriptors
=
```javascript
const pessoa = { 
  get nome() { return 'Marcos'; }
};

Object.getOwnPropertyDescriptors(pessoa);
// Object {
//   nome: Object {
//           configurable: true,
//           enumerable: true,
//           get: nome(), 
//           set: undefined
//     	  }       
// }
```