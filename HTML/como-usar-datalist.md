# Como usar datalist

### Entendendo

Este elemento [datalist](https://html.spec.whatwg.org/multipage/form-elements.html#the-datalist-element) do Html5 contém uma lista de elementos [option](https://html.spec.whatwg.org/multipage/form-elements.html#the-option-element) que representam as opções possíveis para o valor de outros elementos.


## Informações 

Seu **display** padrão é none. Para **usar** é bem simples basta abrir a tag datalist e dentro adicionar as opções com a tag option.

```html
<datalist>
  <option value="opcao_1">
  <option value="opcao_2">
  <option value="opcao_2">
</datalist>
```

Para **usar em input** voçê deve atribuir um id e adicionar o atributo list ao input abaixo tem um exemplo. 

### Exemplos

Abaixo um caso onde ele pode se tornar bem util:

<label>
    Meio de transporte:
    <input type="text" list="transportes"/>
</label>
<datalist id="transportes">
  <option value="Bicicleta">
  <option value="Obinus">
  <option value="Moto">
  <option value="Carro">
  <option value="Taxi">
</datalist>

- Input do tipo texto onde a entrada é o meio de transporte, como temos inumeras opcões deixamos as principais predefinidas como o campo é do tipo texto ele pode entrar com novas opções tambem.

```html
<label>
    Meio de transporte:
    <input type="text" list="transportes"/>
</label>
<datalist id="transportes">
  <option value="Bicicleta">
  <option value="Obinus">
  <option value="Moto">
  <option value="Carro">
  <option value="Taxi">
</datalist>
```
