//para encriptar

document.getElementById('boton-en').addEventListener('click', function() {
    var inputText = document.getElementById('mensaje').value.toLowerCase();
    var encryptedText = inputText.replace(/e/g, 'enter')
                                 .replace(/i/g, 'imes')
                                 .replace(/a/g, 'ai')
                                 .replace(/o/g, 'ober')
                                 .replace(/u/g, 'ufat');
    document.getElementById('respuesta').innerText = 'Texto Encriptado: ' + encryptedText;
});

//para desencriptar

document.getElementById('boton-des').addEventListener('click', function() {
    var inputText = document.getElementById('mensaje').value.toLowerCase();
    var decryptedText = inputText.replace(/enter/g, 'e')
                                 .replace(/imes/g, 'i')
                                 .replace(/ai/g, 'a')
                                 .replace(/ober/g, 'o')
                                 .replace(/ufat/g, 'u');
    document.getElementById('respuesta').innerText = 'Texto Desencriptado: ' + decryptedText;
});
