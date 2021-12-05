
import { habilitarEventosIniciais } from "./telaInicial.js";
import { voltarParaTelaPrincipal } from "./telaPrincipal.js";

var contadorIntervaloSemInteracao = 0;
var pararIntervalo = false;

function alterarContadorIntervaloSemInteracao(valor){
    contadorIntervaloSemInteracao = valor;
}

function pararIntervaloSemInteracao(boleano){
    pararIntervalo = boleano;
}

function intervaloSemInteracao(){
      
    const intervalo = setInterval(()=>{
    console.log("intervalo Principal " + contadorIntervaloSemInteracao)
        if(pararIntervalo){
            clearInterval(intervalo);
        }
        if(contadorIntervaloSemInteracao == 10){
            clearInterval(intervalo);       
            voltarParaTelaPrincipal();
        }
        contadorIntervaloSemInteracao++;
    }, 1000)
}

export { intervaloSemInteracao, contadorIntervaloSemInteracao, alterarContadorIntervaloSemInteracao, pararIntervalo, pararIntervaloSemInteracao }