# Comparando
Diferentes formas de comparar e montar um if mais legivel.
- [===]() Compara os valores em seu estado original levando em consideração seu tipo.
- [==]() Compara os valores convertendo para um tipo comum e realiza a comparacão ===

- [Object.is] Incluido no es6 você pode ver outras inclusões em [Mudanças da es5 para a es6](https://github.com/codermarcos/javascript-weekly/tree/master/mudancas-da-es5-para-a-es6). Muito parecido com === sua direfença é no caso de NaN e Zeros  

```javascript
// usando ===
console.log( 1 === 1 );     // true
console.log( +0 === -0 );   // true
console.log( '1' === 1 );   // false
console.log( false === 0 ); // false
console.log( NaN === NaN ); // false
console.log( null === undefined ); // false

// usando ==
console.log( 1 == 1 );     // true
console.log( +0 == -0 );   // true
console.log( '1' == 1 );   // true
console.log( false == 0 ); // true
console.log( NaN == NaN ); // false
console.log( null == undefined ); // true


// usando Object.is
console.log( Object.is( 1, 1 ) )     // true
console.log( Object.is( +0, -0 ) )   // false
console.log( Object.is( '1', 1 ) )   // false
console.log( Object.is( false, 0 ) ) // false
console.log( Object.is( NaN, NaN ) ) // true
console.log( Object.is( null, undefined ) ) // true
```
### Operadores lógicos
- [&&]()
```javascript
console.log( '' && 'com valor 1' ); //
console.log( 'valor 0' && 'com valor 1' ); // 'valor 1'
console.log( 'valor 0' && 'com valor 1' ); // 'valor 1'

console.log( 0 && 5 ); // 0
console.log( 5 && 5 ); // 5
```
- [||]()
```javascript
console.log( 'com valor 1' || '' ); // valor 1
console.log( 'valor 0' || 'com valor 1' ); // 'valor 1'

console.log( 0 || 5 ); // 5
console.log( 5 || 5 ); // 5
```
