/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

//Declaramos las variables

let ingresadoArea = document.querySelector(".text-area");
let secundarioArea = document.querySelector(".mensaje"); 
let cambiarCopiar = document.querySelector(".copiar"); 

//!Revisamos texto ingresado
function revisarTexto(cadena){

    let chCode = 0;
    let resultado = true;
    let cadenaVacia = "";

    //Minusculas
    for (let i=0; i<(cadena.length); i++){
        chCode = cadena.charCodeAt(i);
        if (((chCode < 97) || (chCode > 122)) && (chCode != 164) && (chCode != 32) && (chCode != 10)){
            alert("Debes escribir solo minusculas y sin acentos");
            resultado = false;
            break;
        }
    }
    
    //No en blanco
    for (let i=0; i<(cadena.length); i++){
        cadenaVacia = cadenaVacia + " ";
    }
    if (cadena == cadenaVacia){
        alert("Debes escribir algún texto");
        resultado = false;
    }
    
    return(resultado);
}

function encriptar(){
    let ingresado = ingresadoArea.value;
        
    if (revisarTexto(ingresado) == true){
        let secundario = ingresado.replaceAll("e","enter");
        secundario = secundario.replaceAll("i","imes");
        secundario = secundario.replaceAll("a","ai");
        secundario = secundario.replaceAll("o", "ober");
        secundario = secundario.replaceAll("u", "ufat");

        secundarioArea.value = secundario;
        btnCopiar();
    } 
}

function desencriptar(){
    let ingresado = ingresadoArea.value;
        
    if (revisarTexto(ingresado) == true) {
            
        let secundario = ingresado.replaceAll("ufat", "u");
        secundario = secundario.replaceAll("ober", "o");
        secundario = secundario.replaceAll("ai", "a");
        secundario = secundario.replaceAll("imes", "i");
        secundario = secundario.replaceAll("enter", "e");
        
        secundarioArea.value = secundario;
        
    }
}

function borrar(){
    ingresadoArea.value = "";
    secundarioArea.value = "";
    cambiarCopiar.innerHTML = "Copiar";
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


   