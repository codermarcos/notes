---
title: Conhecendo os recursos do xhr
lang: pt
date: 2017-11-21 14:07:04
description: Conheçendo recursos do XMLHttpRequest mais conhecido como XHR.
author: 
    job:
    name: 
    link: 
    photo:
    email: 
    phone:
tags: [Javascript, Comparadores]
categories: 
- Javascript
---
**Oque é** o XMLHttpRequest ou como é mais conhecido XHR, segundo á [mdn](https://developer.mozilla.org/pt-BR/docs/Web/API/XMLHttpRequest) é uma API que fornece funcionalidade ao cliente para transferir dados entre um cliente e um servidor.
### Uso basico
Exemplo de uso com **json**
```javascript
  let xhr = new XMLHttpRequest(); // Instancia o xhr 

  let json = JSON.stringify({
    field: 'name',
    value: 'Mike'
  });

  const method = 'POST';
  const url = 'https://jsonplaceholder.typicode.com/posts';

  xhr.open(method, url); // Inicializa o xhr com os parametros necessarios
  
  xhr.onload = () => { 
    console.log('O request terminou',  JSON.parse(xhr.responseText)); // Evento chamado ao fim do request
  };

  xhr.send(json);  // Enviar com os parametros do request
```
Exemplo de uso com **form**
```javascript
  let xhr = new XMLHttpRequest(); // Instancia o xhr
  let form  = new FormData(); // Instancia do Form para adicionar seus campos

  let field = 'name';
  let value = 'Mike';

  form.append(field, value); // adiocinando ao form 
  

  const method = 'POST';
  const url = 'https://jsonplaceholder.typicode.com/posts';


  xhr.open(method, url); // Inicializa o request mudando seu status para 1
  
  xhr.onload = () => { 
    console.log('O request terminou',  JSON.parse(xhr.responseText)); // status termina com status 4
  };

  xhr.send(form);  // envia seu request
```

### State 

[states](https://xhr.spec.whatwg.org/#states) é oque identifica o estado atual do xhr que pode ser 0, 1, 2, 3, 4.

```
0 = UNSENT, Foi instanciado mas ainda não foi iniciado. O metodo open() não foi chamado;
1 = OPENED, Apos a chamada do metodo open();
2 = HEADERS_RECEIVED, Recebeu os headers, só chama o metodo [onreadystatechange]() quando é setado algum header
3 = LOADING, Recebeu ou esta recebendo o response
4 = DONE, O Request finalizou
``` 
[readyState](https://xhr.spec.whatwg.org/#dom-xmlhttprequest-readystate) é um atributo do objeto xhr que contem o state atual do xhr. 

[onreadystatechange](https://xhr.spec.whatwg.org/#event-xhr-readystatechange) Metodo usado para acompanhar o status do request.

```javascript
  xhr.onreadystatechange = () => { 
	  if(xhr.readyState !== XMLHttpRequest.DONE) return;
    // request terminou
  };
```

### Adicionando um header

[setRequestHeader](https://xhr.spec.whatwg.org/#dom-xmlhttprequest-setrequestheader) Prototype utilizado para adicionar os headers do request.

```javascript
  let xhr = new XMLHttpRequest(); // Instancia o xhr
  xhr.setRequestHeader('Content-Type', 'application/json');
```

### Abort

[abort](https://xhr.spec.whatwg.org/#dom-xmlhttprequest-abort) Metodo do xhr utilizado para cancelar o request.

```javascript
  xhr.onabort = () => {
    console.log('O request foi cancelado'); // Evento chamado quando request é cancelado
  };
  
  xhr.abort(); // Cancela seu request
```

### Progress

[loadstart](https://xhr.spec.whatwg.org/#event-xhr-loadstart) Metodo do xhr utilizado para acompanhar o INICIO do request.

```javascript
  xhr.onloadstart = (e) => { 
    	console.log(e.loaded); // Evento chamado ao fim do request
  };
```

[progress](https://xhr.spec.whatwg.org/#event-xhr-progress) Metodo do xhr utilizado para acompanhar o ANDAMENTO do request.

```javascript
  xhr.onprogress = (p) => { 
	  if(p.lengthComputable) {
    	console.log(p.total); // Total de progresso
    	console.log(p.loaded); // Total ja percorrido
    }
  };
```

[loadend](https://xhr.spec.whatwg.org/#event-xhr-loadend) Metodo do xhr utilizado para acompanhar o FIM do request.

```javascript
  xhr.loadend = (e) => {
    console.log(e.loaded); // Request terminou e ja retornou seu response
  }
```