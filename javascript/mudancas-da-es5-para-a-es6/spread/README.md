
# Mudancas da es5 para a es6

Mostrarei as mudanças da [es5(ECMAScript 5.1)](http://www.ecma-international.org/ecma-262/5.1/) para a [es6(ECMAScript 6)](http://www.ecma-international.org/ecma-262/6.0/) de forma mais clara possivel, como ocorreu muitas mudaças, separei em diferentes arquivos você encontra-los em [Mudancas da es5 para a es6](https://github.com/codermarcos/javascript/frontend-weekly/tree/master/mudancas-da-es5-para-a-es6/).

Spread
=

O [spread](http://www.ecma-international.org/ecma-262/6.0/#sec-expressions) tranforma um array em multiplos elementos "Array literal"

Combinar arrays
```javascript
// es5
var vogais = ['a', 'e', 'i', 'o', 'u'];
var consoantes = ['b', vogais, 'c', 'd']; 
console.log(consoantes); // Array [ 'b', […], 'c', 'd' ]

// es6
var vogais = ['a', 'e', 'i', 'o', 'u'];
var consoantes = ['b', ...vogais, 'c', 'd']; 
console.log(consoantes); // Array [ 'b', 'a', 'e', 'i', 'o', 'u', 'c', 'd' ]
```

Ou extender
```javascript
// es5
var vogais = ['a', 'e', 'i', 'o', 'u'];
var consoantes = ['b', 'c', 'd'];
Array.prototype.push.apply(consoantes, vogais);
console.log(consoantes); // Array [ 'b', 'c', 'd', 'a', 'e', 'i', 'o', 'u' ]

// es6
var vogais = ['a', 'e', 'i', 'o', 'u'];
var consoantes = ['b', 'c', 'd'];
consoantes.push(...vogais);
console.log(consoantes); // Array [ 'b', 'c', 'd', 'a', 'e', 'i', 'o', 'u' ]
```