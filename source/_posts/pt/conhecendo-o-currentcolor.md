---
title: Conhecendo o currentcolor
lang: pt
date: 2017-11-21 14:57:03
photo:
description: Entendendo os conceitos do currentColor
author: 
    job: Frontend
    name: Marcos Junior 
    link: https://www.linkedin.com/in/codermarcos/ 
    photo: https://s.gravatar.com/avatar/5ccddd4e7cf7a5266ac229a691cabb5a?s=80
    email: coder.marcos@gmail.com 
    phone: 11 971353293
tags: [Css]
categories: 
- Css
---
## Entendendo
O [currentColor](https://www.w3.org/TR/css3-color/#currentcolor), é uma variavel dinamica que contem como valor a cor atual da propriedade color do elemento.

### Exemplos
Botão outline
```css
button {
  background-color: transparent;
  border: solid 1.5px currentColor;
  box-shadow: 2px 2px 2px currentColor;
  border-radius: 5px; 
  padding: 5px 15px;
  color: #2c3e50;
}
```
Titulo com lines 
```css
h1 {
    text-align: center;
}

h1::before,
h1::after {
    content: '';
    display: inline-block;
    margin: 10px 10px;
    height: 2px;
    width: 80px;
    background: currentColor;
}
```

### Compatibilidade 

**86%** dos browsers ja suportam esta feature voce pode conferir melhor o suporte no [can i user](https://caniuse.com/#feat=css-variables).
