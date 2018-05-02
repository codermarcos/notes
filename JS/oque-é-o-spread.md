# Oque é o spread

## Entendendo

O [spread](http://www.ecma-international.org/ecma-262/6.0/#sec-expressions) é um novo operador que entrou na [es6]() e tem muitas utilidades confira abaixo


### Uso em object

Ele destroçar o objeto ou seja transforma em propriedades separadas 

Pode ser usado para [copiar objetos](javascript/copiar-objetos-no-javascript/) sem refecencia

```javascript
var pessoa = { nome: 'Marcos', idade: 19 };

var clone = { ...pessoa, altura: 1.80 };

pessoa.idade = 19;

console.log(clone); // Object { nome: "Marcos", idade: 19 }
```

### Uso em arrays

Pode seu usado da mesma forma em array, ele transforma um array em multiplos elementos "Array literal"

Combinar arrays
```javascript
// es5
var vogais = ['a', 'e', 'i', 'o', 'u'];
var consoantes = ['b', vogais, 'c', 'd']; 
console.log(consoantes); // Array [ "b", […], "c", "d" ]

// es6
var vogais = ['a', 'e', 'i', 'o', 'u'];
var consoantes = ['b', ...vogais, 'c', 'd']; 
console.log(consoantes); // Array [ "b", "a", "e", "i", "o", "u", "c", "d" ]
```

Ou extender

```javascript
// es5
var vogais = ['a', 'e', 'i', 'o', 'u'];
var consoantes = ['b', 'c', 'd'];
Array.prototype.push.apply(consoantes, vogais);
console.log(consoantes); // Array [ "b", "c", "d", "a", "e", "i", "o", "u" ]

// es6
var vogais = ['a', 'e', 'i', 'o', 'u'];
var consoantes = ['b', 'c', 'd'];
consoantes.push(...vogais);
console.log(consoantes); // Array [ "b", "c", "d", "a", "e", "i", "o", "u" ]
```

### Uso em parametro de funções

Ele ira adicionar todos os parametros recebidos em um array

```javascript
function saldacao(...nomes) {
    nomes.forEach(nome => console.log(`Ola ${nome}`));
}

saudacao('Marcos', 'Junior', 'Monica'); // "Ola Marcos"
                                        // "Ola Junior"
                                        // "Ola Monica"
```