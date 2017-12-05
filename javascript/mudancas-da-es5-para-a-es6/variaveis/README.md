# Mudancas da es5 para a es6
Mostrarei as mudanças da [es5(ECMAScript 5.1)](http://www.ecma-international.org/ecma-262/5.1/) para a [es6(ECMAScript 6)](http://www.ecma-international.org/ecma-262/6.0/) de forma mais clara possivel, como ocorreu muitas mudaças, separei em diferentes arquivos você encontra-los em [Mudancas da es5 para a es6](/javascript/mudancas-da-es5-para-a-es6/).

Declaração de variaveis
=
Agora temos 3 tipos de declarações usando:
1. [var](http://www.ecma-international.org/ecma-262/6.0/#sec-variable-statement) = Inicialização opcional, pode ser declarada multiplas vezes com o mesmo nome
```javascript
(()=> {
  console.log(contador); // undefined
  var contador = 0;
  for(var i = 0; i < 1; i++){
    var contador = i;
    setTimeout(() => {
      console.log(i);   // 1
    }, 100);
  } 
  console.log(i);       // 1
})();
```

2. [let](http://www.ecma-international.org/ecma-262/6.0/#sec-let-and-const-declarations) = Inicialização opcional, faz parte apenas do bloco onde é declarada, não é hosted;
```javascript
(()=> {
  console.log(contador); // ReferenceError: can't access lexical declaration `contador' before initialization
  let contador = 0;
  for(let i = 0; i < 1; i++){
    let contador = i;		
    setTimeout(() => {
      console.log(i);   // 0
    }, 100);
  } 
  console.log(i);       // ReferenceError: i não está definido
})();
```

3. [const](http://www.ecma-international.org/ecma-262/6.0/#sec-let-and-const-declarations) = Variavel apenas para leitura, não pode declarar uma função ou variável com o mesmo nome no mesmo escopo tambem não é hoisted
```javascript
(()=> {
  console.log(contador); // ReferenceError: can't access lexical declaration `contador' 
  const contador = 0;
  for(var i = 0; i < 1; i++){
    var contador = i;   // SyntaxError: redeclaration of const contador
    setTimeout(() => {
      console.log(i);   // 1
    }, 100);
  } 
  console.log(i);  
})();
```