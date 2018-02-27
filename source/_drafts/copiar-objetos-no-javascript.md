---
title: Copiar objetos no javascript
lang: pt
description: Aprendendo as diferentes maneiras de copiar no javascript
tags: [Javascript, Object]
categories:
- Javascript
---
## Criando
Primeiro criamos um objeto na memoria
```javascript 
var pessoa = { 
    nome: 'Marcos', 
    contatos: {
        email: 'coder.marcos@gmail.com'
    } 
};
```
<p align="center">
    <img width="100%" src="https://raw.githubusercontent.com/codermarcos/frontend-weekly/assets/javascript/copiar-objetos-no-javascript/create-pessoa.png" alt="Criar objeto pessoa">
</p>

Agora copiamos o objeto para a variavel clone certo

```javascript 
var clone = pessoa;
```
Internamente o javascript não criou outro objeto ele criou uma refencia na memoria que aponta para pessoa
<p align="center">
    <img width="100%" src="https://raw.githubusercontent.com/codermarcos/frontend-weekly/assets/javascript/copiar-objetos-no-javascript/assign-pessoa-to-clone.png" alt="Criar objeto clone">
</p>

Por este motivo quando alterar a pessoa que o clone ira estar exatamente igual

```javascript 
pessoa.idade = 19;

console.log(clone); // Object { contatos: Object {...}, idade: 19, nome: "Marcos", }
```

<p align="center">
    <img width="100%" src="https://raw.githubusercontent.com/codermarcos/frontend-weekly/assets/javascript/copiar-objetos-no-javascript/create-property-idade.png" alt="Criar propriedade idade">
</p>

Isso ocorre quando se atribui um objeto diretamente, para contornar isto você pode atribuir uma propriedade de cada vez assim 

```javascript 
var clone = {
    nome: pessoa.nome,
    contatos: pessoa.contatos
};

pessoa.idade = 19;

console.log(clone); // Object { contatos: Object { email: "coder.marcos@gmail.com" }, nome: "Marcos", }
```

Agora o objeto permanace como foi copiado certo?  

```javascript 
var clone = {
    nome: pessoa.nome,
    contatos: pessoa.contatos
};

pessoa.idade = 19;
pessoa.contato.github = 'codermarcos';

console.log(clone); // Object { contatos: Object { email: "coder.marcos@gmail.com", github: "codermarcos" }, nome: "Marcos", }
```
<p align="center">
    <img width="100%" src="https://raw.githubusercontent.com/codermarcos/frontend-weekly/assets/javascript/copiar-objetos-no-javascript/wtf.jpg" alt="WTF">
</p>
