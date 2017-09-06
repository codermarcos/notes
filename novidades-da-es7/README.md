# Novidades da es7
Novidades da [es7(ECMAScript 7)](http://www.ecma-international.org/ecma-262/7.0/) se ainda não sabe todas de novo que veio com a grande implementação da [es6(ECMAScript 6)](http://www.ecma-international.org/ecma-262/6.0/) pode entender melhor lendo [Mudanças da es5 para a es6](https://github.com/codermarcos/javascript-weekly/tree/master/mudancas-da-es5-para-a-es6)

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

### Async/Await 
=
Uma funcão async espara o retorno das promises para continuar sua execução
> Você pode entender um pouco melhor sobre Async/Await em [Promises com AsyncAwait](https://github.com/codermarcos/javascript-weekly/tree/master/promises-com-async-await)

```javascript
let request = new Promise((res, rej) => { setTimeout(() => { res('request completo') },1000) });

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