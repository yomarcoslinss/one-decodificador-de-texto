var btnCriptografar = document.querySelector("#btn-criptografar");
var btnDescriptografar = document.querySelector("#btn-descriptografar");
var elementosOcultos = document.querySelectorAll(".ocultar");
var selecionarTextArea = document.querySelector("#entrada-texto");
var entradaOperacao = "";
var saidaOperacao = document.querySelector("#saida-operacao");


function criptografar() {

    for (i = 0; i < elementosOcultos.length; i++) {
        elementosOcultos[i].style.display = "none";
    }

    var boxSaida = document.querySelector("#box-saida")
    boxSaida.style.justifyContent = "flex-start"
    boxSaida.style.textAlign = "start";

    entradaOperacao = selecionarTextArea.value;

    entradaOperacao = entradaOperacao.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

    saidaOperacao.innerHTML = entradaOperacao;

}

function descriptografar() {

    for (i = 0; i < elementosOcultos.length; i++) {
        elementosOcultos[i].style.display = "none";
    }

    var boxSaida = document.querySelector("#box-saida")
    boxSaida.style.justifyContent = "flex-start"
    boxSaida.style.textAlign = "start";


    entradaOperacao = selecionarTextArea.value;

    entradaOperacao = entradaOperacao.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    saidaOperacao.innerHTML = entradaOperacao;

}


btnCriptografar.onclick = criptografar;
btnDescriptografar.onclick = descriptografar;