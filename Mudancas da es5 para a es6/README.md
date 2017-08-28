# Mudancas do es5 para o es6
Principais diferenças da [es5(ECMAScript 5)](http://speakingjs.com/es5/ch25.html) para a [es6(ECMAScript 6)](http://exploringjs.com/es6/)

Classes
=
Neste exemplo tenho a classe funcionário que herda da classe pessoa e funcionario por padrao o cargo é estagiario com salario zero.
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
      })};
  }
});
```

Mudanças
-
##### Declaração de variaveis
Agora temos 3 tipos de declarações usando:
1. [var]() = Inicialização opcional pode ser multiplas vezes com o mesmo nome
```javascript
(()=> {
  console.log(contador); // undefined
  var contador = 0;
  for(var i = 0; i < 1; i++){
    var contador = i;
    setTimeout(() => {
      console.log(i); // 1
    }, 100);
  } 
  console.log(i); // 1
})();
```

2. [let]() = Inicialização opcional faz parte apenas do bloco onde é declarada, não é hoisted;
```javascript
(()=> {
  console.log(contador); // ReferenceError: can't access lexical declaration `contador' before initialization
  let contador = 0;
  for(let i = 0; i < 1; i++){
    let contador = i;		
    setTimeout(() => {
      console.log(i); // 0
    }, 100);
  } 
  console.log(i);	// ReferenceError: i não está definido
})();
```

3. [const]() = Variavel apenas para leitura e não pode declarar uma função ou variável com o mesmo nome no mesmo escopo tambem não é hoisted
```javascript
(()=> {
  console.log(contador); // ReferenceError: can't access lexical declaration `contador' 
  const contador = 0;
  for(var i = 0; i < 1; i++){
    var contador = i; // SyntaxError: redeclaration of const contador
    setTimeout(() => {
      console.log(i); // 1
    }, 100);
  } 
  console.log(i);  
})();
```


