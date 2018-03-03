---
title: Como usar sass ou less no angular
lang: pt
date: 2018-03-03 11:55:34
description: Alguns problemas que é possivel encotrar usando pre-compiladores e como resolve-los
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

Se você ja criou o app ou quer migrar seu app para sass você pode começar a criar seus novos componentes com sass usando alguma destas linhas de comando

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
Então você pode alterar os arquivos ja existentes para sass, scss ou less mudando a extensão do arquivo e seu import dentro do component

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

Se você for **usar um arquivo para variaveis**  e deseja usa-lo nos components você precisa adicionar esta linha no **.angular-cli.json**

```json
"stylePreprocessorOptions": {
  "includePaths": [
    "../src/pasta-dos-arquivos/"
  ]
}
```


