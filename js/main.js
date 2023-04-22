var btnCriptografar = document.querySelector("#btn-criptografar");
var btnDescriptografar = document.querySelector("#btn-descriptografar");
var elementosOcultos = document.querySelectorAll(".ocultar");
var selecionarTextArea = document.querySelector("#entrada-texto");
var entradaOperacao = "";
var boxSaida = document.querySelector("#saida-operacao");


function criptografar() {

    for(i = 0; i < elementosOcultos.length; i++) {
        elementosOcultos[i].style.display = "none";
    }

    entradaOperacao = selecionarTextArea.value;
    
    entradaOperacao = entradaOperacao.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat"); 

    boxSaida.innerHTML = entradaOperacao; 

}

function descriptografar() {

    boxSaida.innerHTML = entradaOperacao.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    
}


btnCriptografar.onclick = criptografar;
btnDescriptografar.onclick = descriptografar;