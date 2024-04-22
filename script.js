const codeReader = new ZXing.BrowserMultiFormatReader();
const videoElement = document.getElementById('preview');

codeReader.decodeFromVideoDevice(undefined, 'preview', (result, error) => {
    if (result) {
        console.log('Código de barras encontrado:', result.text);
        // alert('Código de barras encontrado: ' + result.text);
        document.querySelector('#resultado').innerText = result.text;
    }
    if (error) {
        console.error(error);
    }
});