---
title: Copiar objetos no javascript
lang: pt
description: Aprendendo as diferentes maneiras de copiar no javascript
tags:
  - Javascript
  - Object
categories:
  - Javascript
date: 2018-02-28 18:14:29
---


## Iniciando

Para um melhor entendimento, vou criar um objeto pessoa que ira ser modificado mas antes deve ser clonado seu estado original.

## Criando a pessoa

Primeiro criamos um objeto na memoria

```javascript
var pessoa = {
  nome: 'Marcos',
  contatos: {
    email: 'coder.marcos@gmail.com'
  }
};
```

<br>
Uma representação grafica do que acontece no javascript seria algo assim
<p align="center">
    <img width="100%" src="https://raw.githubusercontent.com/codermarcos/frontend-weekly/assets/javascript/copiar-objetos-no-javascript/create-pessoa.png" alt="Criar objeto pessoa">
</p>

## Copiar com referencia

Agora iremos copiar o objeto da forma mais simples atribuindo o objeto para a variavel clone desta forma

```javascript
var clone = pessoa;
```

<br>
Internamente o javascript não criou outro objeto ele criou uma refencia na memoria que aponta para pessoa
<p align="center">
    <img width="100%" src="https://raw.githubusercontent.com/codermarcos/frontend-weekly/assets/javascript/copiar-objetos-no-javascript/assign-pessoa-to-clone.png" alt="Criar objeto clone">
</p>

Por este motivo quando alterar a pessoa o clone estara exatamente igual

```javascript
pessoa.idade = 19;

console.log(clone);
// Object {
//      contatos: Object {
//          email: "coder.marcos@gmail.com"
//      },
//      idade: 19,
//      nome: "Marcos"
// }
```

<p align="center">
    <img width="100%" src="https://raw.githubusercontent.com/codermarcos/frontend-weekly/assets/javascript/copiar-objetos-no-javascript/create-property-idade.png" alt="Criar propriedade idade">
</p>

Isso ocorre quando se atribui uma variavel do tipo object diretamente. Ele ira apontar a posição na memoria daquela variavel. Legal não é mesmo :D

## Circular references

Por este motivo se você atribui um objeto ao outro e vice-versa tera uma referencia ciclica.

```javascript
var a = {};
var b = {};

a.b = b; // Cria a referencia em a para o B

b.a = a; // Cria a referencia em b para o A

console.log(a);
// {…}
// b: {…}
// a: {…}
// b: Object { a: {…} }
```

Isso pode gerar alguns problemas como por exemplo quando você tentar converter este object para string

```javascript
JSON.stringify(a); // TypeError: cyclic object value
```

Para resolver é bem simples basta criar um replacer para auxiliar o stringify

```javascript
var seen = [];

var replacer = (key, value) => {
  if (value != null && typeof value == 'object') {
    if (seen.indexOf(value) >= 0) {
      return;
    }
    seen.push(value);
  }
  return value;
};

JSON.stringify(a, replacer);
```

Mas esse não é o unico problema se você ja conhece o [GB (Garbage collection)](https://en.wikipedia.org/wiki/Garbage_collection_(computer_science) sabe que ele é nosso algoritimo de limpar a memoria. Ele sempre limpa o espaço da variavel assim que ela deixa de ser referenciada.

```javascript
function teste() {
  var a = {};
  var b = {};

  a.b = b; // Cria a referencia em a para o B

  b.a = a; // Cria a referencia em b para o A

  return 'qualquer coisa';
}

teste();
```

No exemplo acima a e b sempre seram referenciadas então o algoritimo considera que ambos os objetos estão sendo referenciados pelo menos uma vez então nenhum deles podem ser coletados da memoria.

## Copiar sem referencia

Para copiar um objeto de fato sem referencia você pode atribuir uma propriedade de cada vez desta forma

```javascript
var clone = {
  nome: pessoa.nome,
  contatos: pessoa.contatos
};

pessoa.idade = 19;

console.log(clone);
// Object {
//      contatos: Object {
//          email: "coder.marcos@gmail.com"
//      },
//      nome: "Marcos"
// }
```

Agora o objeto permanece como foi copiado. Podemos alterar tudo, que ele continua o mesmo.

## Deep copy

Exceto se uma propriedade dele for um objeto tambem... rsrsr. 

```javascript
var clone = {
  nome: pessoa.nome,
  contatos: pessoa.contatos
};

pessoa.idade = 19;
pessoa.contatos.github = 'codermarcos';

console.log(clone);
// Object {
//      contatos: Object {
//          email: "coder.marcos@gmail.com",
//          github: "codermarcos"
//      },
//      nome: "Marcos"
// }
```

<p align="center">
    <img width="100%" src="https://raw.githubusercontent.com/codermarcos/frontend-weekly/assets/javascript/copiar-objetos-no-javascript/wtf.jpg" alt="WTF">
</p>

O que aconteceu na verdade foi bem simples, como a propriedade contato é um objeto, ele apontou o **clone.contatos** e **pessoa.contatos** para **contatos**. 
É por esse motivo javascript é uma das linguagens mais performaticas, sempre que você atribui diretamente um objeto, ele não copia, ele criar uma referencia. Veja a representação grafica o que aconteceu.

<p align="center">
    <img width="100%" src="https://raw.githubusercontent.com/codermarcos/frontend-weekly/assets/javascript/copiar-objetos-no-javascript/create-clone.png" alt="Create clone">
</p>
**Deep copy** sua tradução literal é "copia profunda". Exatamente oque é um algoritimo que realiza uma copia manual sem referencia, de todas a propriedades que são objetos.

### Soluções

Então, sempre que for copiar um objeto tenho que passar propriedade por propriedade? meio chato né? Uma solução é fazer um algorito de deep copy:
<br>

#### Objeto simples

Se estiver usando um **objeto simples** (apenas propriedades com valores primitivos), pode usar

**Assign** da [es6](/pt/javascript/mudanças-da-es5-para-a-es6/)

```javascript
var pessoa = { nome: 'Marcos' };
var clone = Object.assing({}, pessoa);

pessoa.idade = 19;

console.log(clone); // Object { nome: "Marcos" }
```

Ou **Spread** tambem da [es6](/pt/javascript/mudanças-da-es5-para-a-es6/)

```javascript
var clone = { ...pessoa };

pessoa.idade = 19;

console.log(clone); // Object { nome: "Marcos" }
```

<br>

#### Objeto simples de multiplos niveis

Se estiver usando um **objeto que contenha outros objetos simples** você pode usar desta forma

```javascript
var pessoa = { nome: 'Marcos', contatos: { email: 'coder.marcos@gmail.com' } };

var clone = JSON.parse(JSON.stringify(pessoa));

pessoa.idade = 19;
pessoa.contatos.github = 'codermarcos';

console.log(clone); // Object { nome: "Marcos", contatos: { email: "coder.marcos@gmail.com" } }
```

Assim ele tranforma seu objeto em um valor primitivo criando um novo espaço na memória e então apartir deste valor ele cria um novo objeto.
<br>

#### Objeto complexos

Uma forma mais flexível é criar uma função de deep copy

```javascript
var pessoa = { 
    nome: 'Marcos', 
    contatos: { 
        email: 'coder.marcos@gmail.com' 
    },
    hello: () => console.log('Hello')
};

function clonar(object) {
  let clone = {};
  for (var i in object) {
    if (object[i] != null && typeof object[i] == 'object')
      clone[i] = clonar(object[i]);
    else clone[i] = object[i];
  }
  return clone;
}

var clone = clonar(pessoa);

pessoa.idade = 19;
pessoa.contatos.github = 'codermarcos';

console.log(clone);
```
 Esta função serve para quase todos os casos.

 ### Conclusão

 Copiar objetos no javascript pode ser algo muito complexo, porque acabar criando muitas referencia e causar um [memory leak](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Memory_Management) (Ecedex de consumo de memoria) por isso deve se saber bem oque se faz ;D