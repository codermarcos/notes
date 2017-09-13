# Novidades da es7
Novidades da [es7(ECMAScript 7)](http://www.ecma-international.org/ecma-262/7.0/) veja tambem oque ja foi implementado na grande implementação da [es6(ECMAScript 6)](http://www.ecma-international.org/ecma-262/6.0/) lendo [Mudanças da es5 para a es6](https://github.com/codermarcos/javascript-weekly/tree/master/mudancas-da-es5-para-a-es6)

### Spread para objetos
=
O operador spread que era usado no es6 para array agora pode ser usado para objetos
> se não ainda não tinha visto o spread em array recomendo fortemente que leia [Spread](https://github.com/codermarcos/javascript-weekly/tree/master/mudancas-da-es5-para-a-es6/spread)
```javascript
// es6 
let {bracos, pernas} = {bracos: 'arms', pernas: 'legs', joelho: 'knee', pe: 'foot'};
console.log(bracos); // arms
console.log(pernas); // legs

// es7
let {bracos, ...pernas} = { bracos: 'arms', pernas: 'legs', joelho: 'knee', pe: 'foot'};
console.log(cabeca); // head
console.log(bracos); // arms
console.log(pernas); // Object { pernas: 'legs', joelho: 'knee', pe: 'foot' }
```
### Pow
=
Realizar potencializaçao
```javascript
Math.pow(2, 2);  // 4
Math.pow(2, 4);  // 16
```
