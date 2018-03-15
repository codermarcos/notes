---
title: Usar sass ou less no angular
lang: pt
date: 2018-03-03 11:55:34
photo: 
description: Alguns problemas que é possivel encontrar usando pre-compiladores e como resolve-los.
author: 
    job: Frontend
    name: Marcos Junior 
    link: https://www.linkedin.com/in/codermarcos/ 
    photo: https://s.gravatar.com/avatar/5ccddd4e7cf7a5266ac229a691cabb5a?s=80
    email: coder.marcos@gmail.com 
    phone: 11 971353293
tags: [Frameworks, Angular, Scss, Less]
categories:
- Frameworks
---

## Iniciando em um novo projeto

Se ainda não criou o projeto no cli você pode criar usando algumas destas linhas

Para usar **scss** --style=**scss**
```bash
ng new nome-do-app --style=scss
```

Para usar **sass** --style=**sass**
```bash
ng new nome-do-app --style=sass
```

Para usar **less** --style=**less**
```bash
ng new nome-do-app --style=less
```

## Migrando um projeto para sass

Se ja criou o app ou quer migrar seu app para sass você pode começar a criar seus novos componentes com sass usando alguma destas linhas de comando

Para usar **scss** --style=**scss**
```bash
ng set defaults.styleExt scss
```

Para usar **sass** --style=**sass**
```bash
ng set defaults.styleExt sass
```

Para usar **less** --style=**less**
```bash
ng set defaults.styleExt less
```

Para conferir se ocorreu como esperado você pode ir no arquivo **.angular-cli.json** e ver se encontra algo parecido com isto

```json
"defaults": {
  "styleExt": "scss", // sass, ou less
  "component": {
  }
}
```

Se não você pode adicionar manualmente.

<br>
Então pode alterar os arquivos ja existentes para sass, scss ou less mudando a extensão do arquivo e seu import dentro do component

```typescript
  // app.component.ts
  styleUrls: ['./app.component.scss']
```

E tambem no **.angular-cli.json**

```json
"styles": [
  "sass/styles.scss"
],
```

 
## Casos

Se for **usar um arquivo para variaveis ou funções** e deseja usa-lo nos componentes, é preciso importalo dentro de cada componente. Para importar mais facilmente pode adicionar esta linha no **.angular-cli.json**. 

```json
"stylePreprocessorOptions": {
  "includePaths": [
    "../src/pasta-dos-arquivos/"
  ]
}
```
<br>
Porque quando for importar precisa apenas de digitar o nome do arquivo. Por exemplo pense no seguinte caso
<p align="center">
    <img width="50%" src="https://raw.githubusercontent.com/codermarcos/frontend-weekly/assets/frameworks/usar-sass-ou-less-no-angular/path-files.png" alt="estrutura de arquivos no angular">
</p>

<br>
Então dentro de **variables.scss** tem o seguinte codigo

```scss

$my-color: black;

```

<br>
Então para usar a variavel $my-color em **style.scss** usaria a seguinte linha 

```scss
/*      style.scss      */
@import 'style/variables';

body {
  background-color: $my-color;
}
```

<br>
Para não precisar adicionar o caminho toda vez basta apenas adicioinar esta linha no arquivo **.angular-cli.json**

```json
"stylePreprocessorOptions": {
  "includePaths": [
    "../src/style/"
  ]
}
```

<br>
Então para usar agora basta apenas usar o nome do arquivo

```scss
/*      style.scss      */
@import 'variables';

body {
  background-color: $my-color;
}
```

### Conclusão 

É isso espero ter ajudado ;D