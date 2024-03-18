/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/


function encriptar(){
    var texto = document.getElementById("textArea").value.toLowerCase();
    var textoCifrado = texto.replace(/e/igm,"enter");
    var textoCifrado = textoCifrado.replace(/o/igm,"ober");
    var textoCifrado = textoCifrado.replace(/i/igm,"imes");
    var textoCifrado = textoCifrado.replace(/a/igm,"ai");
    var textoCifrado = textoCifrado.replace(/u/igm,"ufat");
    
    document.getElementById("mensaje").innerHTML = textoCifrado;
    btnCopiar();
 
}

function desencriptar(){
    var texto = document.getElementById("textArea").value.toLowerCase();
    var textoCifrado = texto.replace(/enter/igm,"e");
    var textoCifrado = textoCifrado.replace(/ober/igm,"o");
    var textoCifrado = textoCifrado.replace(/imes/igm,"i");
    var textoCifrado = textoCifrado.replace(/ai/igm,"a");
    var textoCifrado = textoCifrado.replace(/ufat/igm,"u");
    
    document.getElementById("mensaje").innerHTML = textoCifrado;   
}

function copiar() {
    let inputText = document.getElementById("mensaje");

    inputText.select();
    inputText.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(inputText.value);

    textoCopiado();

}


function btnCopiar() {
    document.getElementById("copiar").removeAttribute("disabled");
    document.getElementById("copiar").innerHTML= "Copiar";
}

function textoCopiado(){
    document.getElementById("copiar").innerHTML = "Texto copiado";
}

document.getElementById("textArea").addEventListener("keypress",verificar);
	function verificar(e) {
 
		// comprovamos con una expresion regular que el caracter pulsado sea
		// una letra o un espacio
		if(e.key.match(/[a-zñ\s]/i)===null) {
 
			// Si la tecla pulsada no es la correcta, eliminado la pulsación
			e.preventDefault();
		}
	}

   