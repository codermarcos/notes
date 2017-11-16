# Mudancas da es5 para a es6
Mostrarei as mudanças da [es5(ECMAScript 5.1)](http://www.ecma-international.org/ecma-262/5.1/) para a [es6(ECMAScript 6)](http://www.ecma-international.org/ecma-262/6.0/) de forma mais clara possivel, como ocorreu muitas mudaças, separei em diferentes arquivos você encontra-los em [Mudancas da es5 para a es6](https://github.com/codermarcos/frontend-weekly/tree/master/mudancas-da-es5-para-a-es6/).

String
=
Na classe string temos 4 novos metodos que podem melhorar a sintax são eles:
1. [repeat](http://www.ecma-international.org/ecma-262/6.0/#sec-string.prototype.repeat) = Para repetir a string n vezes.
```javascript
// es5
Array(4).join('abc'); // abcabcabc

// es6
'abc'.repeat(3);      // abcabcabc
```

2. [startsWith](http://www.ecma-international.org/ecma-262/6.0/#sec-string.prototype.startswith) = Verifica se a string inicia ou contem o parametro passado em apartir de determinada posicao
```javascript
// es5
'abcdef'.indexOf('abc') === 0; // true 

// es6
'abcdef'.startsWith('abc');    // true 
'abcdef'.startsWith('bcd', 1); // true 
```

3. [endsWith](http://www.ecma-international.org/ecma-262/6.0/#sec-string.prototype.endswith) = Verifica se a string inicia ou contem o parametro passado em apartir de determinada posicao
```javascript
// es5
'abcdef'.indexOf('cde') === (5 - 'cde'.length); // true 

// es6
'abcdef'.endsWith('def') ;    // true 
'abcdef'.endsWith('cde', 5);  // true 
```

4. [includes](http://www.ecma-international.org/ecma-262/6.0/#sec-string.prototype.includes) = Verifica se a string contem o parametro passado em determinada posição
```javascript
// es5
'abcdef'.indexOf('cde') !== -1; // true 

// es6
'abcdef'.includes('def');       // true 
'abcdef'.includes('cde', 2);    // true 
```