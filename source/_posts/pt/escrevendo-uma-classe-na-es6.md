---
title: Escrevendo uma classe na es6
lang: pt
date: 2017-08-27 22:57:04
photo:
description: Nova sintax de classes na es6.
author: 
    job: Frontend
    name: Marcos Junior 
    link: https://www.linkedin.com/in/codermarcos/ 
    photo: https://s.gravatar.com/avatar/5ccddd4e7cf7a5266ac229a691cabb5a?s=80
    email: coder.marcos@gmail.com 
    phone: 11 971353293
tags: [Javascript, ECMAScript, Mudancas da es5 para a es6, es6]
categories: 
- Javascript
---
## Diferenças
A antiga forma ainda é valida esta é a **sintaxe na es5** 
```javascript
'use strict';
function Pessoa(nomeCompleto) {
    this.nomeCompleto = nomeCompleto;
}

Pessoa.prototype.constructor = Pessoa;
Pessoa.prototype.quem = function() {
  return 'Oi, eu sou ' + this.nomeCompleto;
};

Object.defineProperty(Pessoa.prototype, 'nomeCompleto', {
  set: function(nomeCompleto) {
    var nomes = nomeCompleto.split(' ');
    this.primeiroNome = nomes[0] || '';
    this.ultimoNome = nomes[1] || '';
  },
  get: function() {
    return this.primeiroNome + ' ' + this.ultimoNome;
  }
});

function Funcionario(nome, cargo = 'Estagiario', salario = 0) {
    this.cargo = cargo;
    this.salario = salario;
    Pessoa.call(this, nome);
}

Funcionario.prototype = Object.create(Pessoa.prototype);
Funcionario.prototype.constructor = Funcionario;

Funcionario.prototype.profissao = function() {
  return 'Eu sou ' + this.cargo + ' ganho ' + this.salario;
};


Object.defineProperty(Pessoa.prototype, 'salario', {
  set: function(valor) {
    this._salario = valor;
  },
  get: function() {
    return this._salario.toLocaleString('pt-BR', {
        currency: 'BRL',
        style: 'currency',
        minimumFractionDigits: 2
      });
  };
});
```


Esta é a nova **sintaxe na es6** podendo mesclar algumas coisas entre as duas
```javascript
'use strict';
class Pessoa { 
  constructor(nomeCompleto) {
    this.nomeCompleto = nomeCompleto;
  }
	
  // retorna uma apresentacao com o nome completo
  quem() {
	  return `Oi, eu sou ${this.nomeCompleto}`;
  }
	
  // seta o primeiro e o segundo nome
  set nomeCompleto(nomeCompleto) {
    const nomes = nomeCompleto.split(' ');
    this.primeiroNome = nomes[0] || '';
    this.ultimoNome = nomes[1] || '';
  }

  // retorna o nome completo
  get nomeCompleto() {
    return `${this.primeiroNome} ${this.ultimoNome}`;
  }
}

class Funcionario extends Pessoa {
  constructor(nome, cargo = 'Estagio', salario = 0) {
    super(nome);
    this.cargo = cargo;
    this.salario = salario;
  }

  // retorna o cargo e o salario
  profissao() {
    return `Eu sou ${this.cargo} ganho ${this.salario}`;
  }

  // seta o salario
  set salario(valor) {
    this._salario = valor;
  }

  // formata o salario
  get salario() {
    return this._salario.toLocaleString('pt-BR', {
      currency: 'BRL',
      style: 'currency',
      minimumFractionDigits: 2
    });
  }
}
```
