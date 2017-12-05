# Acessando midias.
Acessar as dispositivos de midia input e output.

Primeiro monte uma verificação para ver se o browser suporta esta função. 
```javascript
// Verificando se o navegador contem o atributo mediaDevices e getUserMedia
if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
// Seu codigo deve vir aqui ...    
} else {
    alert('Este navegador não suporta esta ação!');
}
```

- [enumerateDevices](https://w3c.github.io/mediacapture-main/#dom-mediadevices-enumeratedevices()) Retorna um array com informações de todas as dispositivos de input e output disponiveis para o browser.
```javascript
    navigator.mediaDevices.enumerateDevices()
        .then(devices => console.log(devices)); // [...] MediaDeviceInfo
                                                //      0: {
                                                //          deviceId: string, // identifição do device é renovado a cada sessão
                                                //          groupId: string,  // identifição do grupo do device, um grupo pode ser por exemplo um monitor com camera
                                                //          kind: string,     // tipo do device  por exemplo audiooutput, videoinput etc
                                                //          label: string     // descricao do device
                                                //      }
```

- [getUserMidia](https://www.w3.org/TR/screen-capture/#idl-def-NavigatorUserMedia) Solicita permissão para acessar dispositivos, passando como parametro as midias e suas configurações, retornara stream.
```javascript
    const params = {
        audio: true, // acessar audio
        video: true  // acessar video
    };
    // or
    const optional = {
        audio: true, // acessar audio
        video: { 
            facingMode: "user" // camera frontal
        }
    };

    navigator.mediaDevices.getUserMedia(params)
        .then(stream => console.log(stream)); // LocalMediaStream {
                                                //          active: boolean,     // Esta ativo ou não
                                                //          currentTime: string, // Hora atual
                                                //          id: string,          // identificão da stream
                                                //          onaddtrack: null     // callback pode ser passado no getUserMedia
                                                //      }
```

### Fazendo a magica acontecer
Acessando a camera e passando para o elemento video a stream no atributo srcObject.
```html
<!DOCTYPE html>
<html>

  <body>
    <video autoplay></video>
    <script>
      (() => {
          const video = document.querySelector('video');

          const failed = erro => alert(erro);

          const finish = stream => video.srcObject = stream;

          const params = {
              video: true  
          };

          if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
              navigator.mediaDevices.getUserMedia(params)
                  .then(finish)
                  .then(video.play())
                  .catch(failed);
          } else {
              alert('Este navegador não suporta esta ação!');
          }
      })();
    </script>
  </body>

</html>
```