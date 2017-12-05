
# Mudancas da es5 para a es6

Mostrarei as mudanças da [es5(ECMAScript 5.1)](http://www.ecma-international.org/ecma-262/5.1/) para a [es6(ECMAScript 6)](http://www.ecma-international.org/ecma-262/6.0/) de forma mais clara possivel, como ocorreu muitas mudaças, separei em diferentes arquivos você encontra-los em [Mudancas da es5 para a es6](/javascript/mudancas-da-es5-para-a-es6/).

Arrays
=
Temos dois novos metodos de busca que ajudaram a melhorar a sintax

1. [find](http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.find) = Semelhante ao filter mas retorna um unico objeto.

```javascript
// es5
[ {id: 2}, {id: 10}, {id: 7} ].filter(x =>  x.id === 10)[0]; // Object { id: 10 }

// es6
[ {id: 2}, {id: 10}, {id: 7} ].find(x =>  x.id === 10);      // Object { id: 10 }
```

2. [findIndex](http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.findindex) = Retorna o index do primeiro objeto encontrado no filter.

```javascript
// es5
var index = -1;
[ {id: 2}, {id: 10}, {id: 7} ].forEach((element, i) => { 
  if(element.id === 10 && index === -1) index = i; 
});
console.log(index);                                          // 1

// es6
[ {id: 2}, {id: 10}, {id: 7} ].findIndex(x => x.id === 10); // 1
```
