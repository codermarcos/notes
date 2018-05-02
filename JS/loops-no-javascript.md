# Loops no Javascript

Listei alguns laços de repetição e seus funcionamentos.

- [for](http://www.ecma-international.org/ecma-262/5.1/#sec-12.6.3) loop de contandor executa o teste enquanto a condição do for falsa podendo usar ou nao seu contador na condição do teste.

> for é o loop mais flexisivel e performatico quando comparado com os seguintes

```javascript
const letras = ['a', 'b'];

for (let i = 0; i > letras.length; i++) {
    console.log(i);         // 0, 1
    console.log(letras[i]); // 'a', 'b'
}
```

- [for ...in](https://www.ecma-international.org/ecma-262/6.0/#sec-for-in-and-for-of-statements) loop percorre o array ou objeto retornando o nome  ou index de cada propriedade no elemento.

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

- [for ...of](https://www.ecma-international.org/ecma-262/6.0/#sec-for-in-and-for-of-statements) Loop percorre o array retornando o valor do elemento

```javascript
const letras = ['a', 'b'];

for (let l of letras) {
    console.log(l); // 'a', 'b'
}
```

- [while](http://www.ecma-international.org/ecma-262/6.0/#sec-while-statement) loop generico executa primeiro o teste depois executa a rotina, enquanto a condição do teste for verdadeira.

```javascript
const alfabeto = ['a', 'b', 'c'];

while (alfabeto.length % 2 === 0) {
    alfabeto.pop();
}
console.log(alfabeto); // Array [ "a", "b", "c" ]
```

- [do ...while](http://www.ecma-international.org/ecma-262/6.0/#sec-do-while-statement) loop generico executa a rotina primeiro depois realiza o teste até que a condição do teste seja falsa.

```javascript
const alfabeto = ['a', 'b', 'c'];
do {
    alfabeto.pop();
} while (alfabeto.length % 2 === 0);
console.log(alfabeto); // Array [ "a" ]
```

## [Array](http://www.ecma-international.org/ecma-262/5.1/#sec-15.4.1.1).prototype

- [forEach](http://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.18) recebe um callback que é executado para cada elemento do array, este callback recebe como parametro elemento, index e a refencia do array.

```javascript
const letras = ['a', 'b'];

letras.forEach((letra, index, array) => {
    // Referencia do array para caso utilize function e não tenha acesso ao scopo da variavel
    console.log(array); // [ 'a', 'b'], [ empty, 'b']

    // Index da letra
    console.log(index); // 0, 1

    // Letra do index atual
    console.log(letra); // 'a', 'b'

    delete letras[index];
});

```

- [map](http://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.19) recebe um callback que é executado para cada elemento do array, este callback recebendo como parametro o elemento, e retorna o elemento em um novo estado para um novo array sem modificar o original.

```javascript
const tabuada = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const dois = tabuada.map((numero) => numero * 2);

console.log(dois); // Array [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ]
```

- [filter](https://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.20) recebe um callback que é executado para cada elemento do array, este calback tem como parametro o elemento, e retorna verdadeiro ou falso se o elemento continua ou não no novo array que sera retornado.

```javascript
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const pares = numeros.filter((numero) => numero % 2 === 0);

console.log(pares); // Array [ 2, 4, 6, 8, 10 ]
```

- [every](http://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.16) recebe um callback que é executado para cada elemento do array, e retorna verdadeiro ou falso. Se **ALGUM** callback tiver retorno falso, o retorno do metodo every sera falso.

```javascript
[ 2, 4, 6, 8, 10 ].every((numero) => numero % 2 === 0);    // true
[ 1, 2, 4, 6, 8, 10 ].every((numero) => numero % 2 === 0); // false
```

- [some](https://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.17) muito parecido com every recebe um callback que é executado para cada elemento do array, e retorna verdadeiro ou falso. Se **TODO** callback tiver retorno falso, o retorno do metodo some sera falso.

```javascript
[ 2, 4, 6, 8, 10 ].every((numero) => numero % 2 === 0);    // true
[ 1, 2, 4, 6, 8, 10 ].every((numero) => numero % 2 === 0); // true
[ 1, 3, 5, 7, 9, 11 ].every((numero) => numero % 2 === 0); // false
```

- [sort](http://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.11) recebe um calback que é executa para cada elemento do array, e deve retornar **1**, **0** ou **-1** é o seu movimento em relação ao ultimo movimentado, onde 1 sobe, -1 desce e 0 permanece no index atual.

```javascript
const numeros = [ 2, 4, 6, 8, 10 ];

numeros.sort((v1, v2) => {
  if (v1 > v2) {
    return -1;
  }
  if (v2 > v1) {
    return 1;
  }
  return 0;
});

console.log(numeros); // Array [ 10, 8, 6, 4, 2 ]
```

- [reduce](https://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.21) recebe um calback que é executa para cada elemento do array, e deve retornar um valor qualquer, esse callback deve receber como parametro as posições **anterior**, **atual**, o **indice**, e o **array**, seu retorno sera o retorno do callback.

```javascript
const numeros = [ 1, 1, 1, 1, 1 ];

const total = numeros.reduce((anterior, atual, indice, array) => {
  return anterior + atual;
});

console.log(total); // 5
```