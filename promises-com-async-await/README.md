# Promises com Async/Await

Diferentes formas de usar promises ou async/await.

## Começando

Para este exemplo usarei a api do IBGE que irá me retornar os 20 nomes mais comuns do Brasil.
Todos os exemplos abaixo podem ser testados colando o bloco de codigo inteiro no console. 
Não realize os testes em site com SSL você tera problemas de Content Security Policy ou CrossOrigin.

Exemplos
-
##### Apesar de async/await ter chegado apenas na [es7](https://www.ecma-international.org/ecma-262/7.0/), os exemplos abaixo estão usando usando sintax incluida na [es6 (ECMAScript 6)](http://www.ecma-international.org/ecma-262/6.0/) se ainda não conhece recomendo :muscle: fortemente que leia [As diferenças da es5 para a es6](https://github.com/codermarcos/javascript-weekly/tree/master/mudancas-da-es5-para-a-e6)
#####

##### Promises

1. Uma das formas mais comum de se usar promises é separando os callbacks da promise cada função receber o callback da sua anterior, realiza a logica e retorna para proxima. Se desejar tratar os erros você precisara de dois rejects e um catch ao fim
```javascript
(() => {

  // funcao que recebe o json com os 20 nomes mais comuns e exibe no console
  const showJson = (json) => {
    json[0].res.forEach(element => console.log(element.ranking, element.nome));
  };

  // callback que recebe o retorno do request quando finalizado
  const callback = (response) => {
    return response.json();
  };

  // request usando thens sequenciais
  fetch('http://servicodados.ibge.gov.br/api/v2/censos/nomes/ranking')
    .then(callback)
    .then(showJson);

})();
```
2. Outra forma de obter o mesmo resultado é usar as promises engrenando uma promise dentro da outra. Para tratar possiveis erros no request você precisara de dois rejects, varios thrwos, e um catch ou varios catchs 

```javascript
(() => {

 // request usando um then
 fetch('http://servicodados.ibge.gov.br/api/v2/censos/nomes/ranking')
  .then(response => { 
  
  // funcao para transformar o response em json
    response.json()
      .then(json => { 
      
        // exibindo os 20 nomes mais comuns e exibe no console
        json[0].res.forEach(element => console.log(element.ranking, element.nome));
        
      });
      
    });

})();
```

##### Async/Await

1. Usando variáveis sem tratar o retorno do request

```javascript
(async () => {

  // request usando retornando diretamente na variavel
  const response = await (fetch('http://servicodados.ibge.gov.br/api/v2/censos/nomes/ranking'));	
  
  // funcao para transformar o response em json
  const json = await (response.json());
  
  // exibindo os 20 nomes mais comuns e exibe no console
  json[0].res.forEach(element => console.log(element.ranking, element.nome));

})();
```
2. Outra forma é tratar o retorno antes de seguir para o próximo passo

```javascript
(async () => {

  // request sendo tratado antes de ser alocado na variavel 
  const response = await (fetch('http://servicodados.ibge.gov.br/api/v2/censos/nomes/ranking')
    .then(response => { return response; }));
	
  // funcao para transformar o response em json sendo tratado
  const json = await (response.json()
    .then(json => { return json; }));
	
  // exibindo os 20 nomes mais comuns e exibe no console
  json[0].res.forEach(element => console.log(element.ranking, element.nome));
  
})();
```
3. Uma outra forma que tambem é interessante seria não travar o processamento de todo método apenas os necessários

```javascript
(() => {
  
  // callback assincrona que só executa o forEach quando o retorno é obitido
  const callback = async (response) => {
    await( await (response.json()))[0].res.forEach(element => console.log(element.ranking, element.nome));
  };

  // request usando then com callback assincrono
  fetch('http://servicodados.ibge.gov.br/api/v2/censos/nomes/ranking')
    .then(callback);
  
})();
```

## Conclusão
-