# Mudancas do es5 para o es6
Principais diferenças da [es5(ECMAScript 5)](http://www.ecma-international.org/ecma-262/5.1/) para a [es6(ECMAScript 6)](http://www.ecma-international.org/ecma-262/6.0/)

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
      })};
  }
});
```

Mudanças
-
##### Declaração de variaveis
Agora temos 3 tipos de declarações usando:
1. [var](http://www.ecma-international.org/ecma-262/6.0/#sec-variable-statement) = Inicialização opcional, pode ser declarada multiplas vezes com o mesmo nome
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

2. [let](http://www.ecma-international.org/ecma-262/6.0/#sec-let-and-const-declarations) = Inicialização opcional, faz parte apenas do bloco onde é declarada, não é hoisted;
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
  console.log(i); // ReferenceError: i não está definido
})();
```

3. [const](http://www.ecma-international.org/ecma-262/6.0/#sec-let-and-const-declarations) = Variavel apenas para leitura, não pode declarar uma função ou variável com o mesmo nome no mesmo escopo tambem não é hoisted
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
##### Strings

Na classe string temos 4 novos metodos que podem melhorar a sintax são eles:
1. [repeat](http://www.ecma-international.org/ecma-262/6.0/#sec-string.prototype.repeat) = Para repetir a string n vezes.
```javascript
// es5
Array(4).join('abc'); // abcabcabc

// es6
'abc'.repeat(3); // abcabcabc
```

2. [startsWith](http://www.ecma-international.org/ecma-262/6.0/#sec-string.prototype.startswith) = Verifica se a string inicia ou contem o parametro passado em apartir de determinada posicao
```javascript
// es5
'abcdef'.indexOf('abc') === 0; // true 

// es6
'abcdef'.startsWith('abc') // true 
'abcdef'.startsWith('bcd', 1) // true 
```

3. [endsWith](http://www.ecma-international.org/ecma-262/6.0/#sec-string.prototype.endswith) = Verifica se a string inicia ou contem o parametro passado em apartir de determinada posicao
```javascript
// es5
'abcdef'.indexOf('cde') === (5 - 'cde'.length); // true 

// es6
'abcdef'.endsWith('def') // true 
'abcdef'.endsWith('cde', 5) // true 
```

4. [includes](http://www.ecma-international.org/ecma-262/6.0/#sec-string.prototype.includes) = Verifica se a string contem o parametro passado em determinada posicao
```javascript
// es5
'abcdef'.indexOf('cde') !== -1; // true 

// es6
'abcdef'.includes('def') // true 
'abcdef'.includes('cde', 2) // true 
```
##### Arrays
Temos dois novos metodos de busca que ajudaram a melhorar a sintax
1. [find](http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.find) = Para repetir a string n vezes.
```javascript
// es5
[ {id: 2}, {id: 10}, {id: 7} ].filter(x =>  x.id === 10)[0]; // Object { id: 10 }

// es6
[ {id: 2}, {id: 10}, {id: 7} ].find(x =>  x.id === 10); // Object { id: 10 }
```

2. [findIndex](http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.findindex) = Verifica se a string inicia ou contem o parametro passado em apartir de determinada posicao
```javascript
// es5
[ {id: 2}, {id: 10}, {id: 7} ].filter(x =>  x.id === 10)[0]; // Object { id: 10 }

// es6
[ {id: 2}, {id: 10}, {id: 7} ].findIndex(x =>  x.id === 10); // 1
```
