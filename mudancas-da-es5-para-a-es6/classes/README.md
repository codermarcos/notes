# Mudancas da es5 para a es6

Mostrarei as mudanças na declaração de classes da [es5(ECMAScript 5.1)](http://www.ecma-international.org/ecma-262/5.1/) para a [es6(ECMAScript 6)](http://www.ecma-international.org/ecma-262/6.0/) de forma mais clara possivel, como ocorreu muitas mudaças, separei em diferentes arquivos você encontra-los em [Mudancas da es5 para a es6](https://github.com/codermarcos/javascript-weekly/tree/master/mudancas-da-es5-para-a-es6/).

Classes
=
Neste exemplo declaro a classe funcionário que herda da classe pessoa.
### sintaxe no es6
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
### sintaxe no es5
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