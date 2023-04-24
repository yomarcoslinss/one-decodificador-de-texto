var btnCriptografar = document.querySelector("#btn-criptografar");
var btnDescriptografar = document.querySelector("#btn-descriptografar");
var btnCopiar = document.querySelector("#btn-copiar");

var elementosOcultos = document.querySelectorAll(".ocultar");
var selecionarTextArea = document.querySelector("#entrada-texto");
var entradaOperacao = "";
var saidaOperacao = document.querySelector("#saida-operacao");



btnCriptografar.onclick = function () {

    for (i = 0; i < elementosOcultos.length; i++) {
        elementosOcultos[i].style.display = "none";
    }

    var boxSaida = document.querySelector("#box-saida")
    boxSaida.style.justifyContent = "space-between"
    boxSaida.style.textAlign = "start";
    btnCopiar.style.display = "flex"

    entradaOperacao = selecionarTextArea.value;

    entradaOperacao = entradaOperacao.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

    saidaOperacao.innerHTML = entradaOperacao;

};

btnDescriptografar.onclick = function () {

    for (i = 0; i < elementosOcultos.length; i++) {
        elementosOcultos[i].style.display = "none";
    }

    var boxSaida = document.querySelector("#box-saida")
    boxSaida.style.justifyContent = "space-between"
    boxSaida.style.textAlign = "start";
    btnCopiar.style.display = "flex"
    
    entradaOperacao = selecionarTextArea.value;

    entradaOperacao = entradaOperacao.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    saidaOperacao.innerHTML = entradaOperacao;

};

btnCopiar.onclick = function() {
    navigator.clipboard.writeText(entradaOperacao);
};