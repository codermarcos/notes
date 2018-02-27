---
title: Copiar objetos no javascript
lang: pt
description: Aprendendo as diferentes maneiras de copiar no javascript
tags: [Javascript, Object]
categories:
- Javascript
---
## Iniciando

Para um melhor entendimento vou criar um objeto pessoa que ira ser modificado mas antes deve ser clonado seu estado original.

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
Seria algo assim
<p align="center">
    <img width="100%" src="https://raw.githubusercontent.com/codermarcos/frontend-weekly/assets/javascript/copiar-objetos-no-javascript/create-pessoa.png" alt="Criar objeto pessoa">
</p>

## Copiar com referencia

Agora copiamos o objeto para a variavel clone desta forma

```javascript 
var clone = pessoa;
```

<br>
Internamente o javascript não criou outro objeto ele criou uma refencia na memoria que aponta para pessoa
<p align="center">
    <img width="100%" src="https://raw.githubusercontent.com/codermarcos/frontend-weekly/assets/javascript/copiar-objetos-no-javascript/assign-pessoa-to-clone.png" alt="Criar objeto clone">
</p>

Por este motivo quando alterar a pessoa que o clone ira estar exatamente igual

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

Isso ocorre quando se atribui um objeto diretamente. Ele ira apontar a posição na memoria daquele objeto.

## Copiar sem refencia 

Para contornar isto você pode atribuir uma propriedade de cada vez desta forma

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

Agora o objeto permanace como foi copiado certo? Podemos alterar tudo que ele continua o mesmo. Exceto se a propriedade dele for um objeto tambem... rsrsr

```javascript 
var clone = {
    nome: pessoa.nome,
    contatos: pessoa.contatos
};

pessoa.idade = 19;
pessoa.contato.github = 'codermarcos';

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

O que aconteceu na verdade foi bem simple como a propriedade contato é um objeto ele apontou o **clone.contatos** para **pessoa.contatos** e por esse motivo javascript é uma das linguagens mais performaticas, sempre que você atribui diretamente um objeto ele não copia ele criar uma referencia. Veja oque aconteceu.

<p align="center">
    <img width="100%" src="https://raw.githubusercontent.com/codermarcos/frontend-weekly/assets/javascript/copiar-objetos-no-javascript/create-clone.png" alt="Create clone">
</p>

## Soluções

Então sempre que for copiar um objeto tenho que passar propriedade por propriedade meio chato né?

**Criar uma função** [deepCopy]()
```javascript
```