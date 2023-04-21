var btnCriptografar = document.querySelector("#btn-criptografar");
var btnDescriptografar = document.querySelector("#btn-descriptografar");
var elementosOcultos = document.querySelectorAll(".ocultar");
var selecionarTextArea = document.querySelector("#entrada-texto");
var entradaOperacao = "";
var resultadoOperacao = document.querySelector("#saida-operacao");


function teste() {
    for(i = 0; i < elementosOcultos.length; i++) {
        elementosOcultos[i].style.display = "none";
    }
    entradaOperacao = selecionarTextArea.value;

    resultadoOperacao.innerHTML = entradaOperacao;

}

btnCriptografar.onclick = teste;