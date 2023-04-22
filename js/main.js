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
    
    entradaOperacao = entradaOperacao.replace(/e/g, "enter").replace(/i/g, "imes")

    boxSaida.innerHTML = entradaOperacao

}

btnCriptografar.onclick = criptografar;