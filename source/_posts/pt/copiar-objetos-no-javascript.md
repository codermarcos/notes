---
title: Copiar objetos no javascript
lang: pt
date: 2018-02-25 16:02:53
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
    <img width="100%" src="/create-pessoa.png" alt="Criar objeto pessoa">
</p>

Agora copiamos o objeto para a variavel clone certo?

```javascript 
var clone = pessoa;
```

Podemos alterar a pessoa que o clone se mantem igual

```javascript 
pessoa.idade = 19;

console.log(clone); // Object { constatos: Object {...}, idade: 19, nome: "Marcos", }
```

Oque acontece no javascript se eu copio um objeto desta forma?



```
Quando o clone foi criado não existia a propriedade idade na pessoa ele foi adicionado depois, da copia e mesmo assim foi adicionado ao clone, porque isso acontece?

No javascript quando se atribui um objeto a outro ele cria uma referencia na memoria
