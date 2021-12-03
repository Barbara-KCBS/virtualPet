import { alterarContadorIntervaloSemInteracao, intervaloSemInteracao, pararIntervaloSemInteracao } from "../principal/intervaloSemInteracao.js";
import { tiposDeLance } from "./iniciarJokenpo.js";
import { inicioDoJogo, lancesDoJogadorFrames, lancesDoDinoFrames } from "./jogoJokenpoFrames.js";


var contadorLanceDoJogador = 0;
var pontosDoJogador = 0;
var lanceDoJogador = "papel";
var lanceAtualDoJogador;
var vezDoJogador = false;

function alterarPontosDoJogador(valor){
    pontosDoJogador = valor;
}

function alterarContadorLanceDoJogador(valor){
    contadorLanceDoJogador = valor;
}


function alterarVezDoJogador(boleano){
    vezDoJogador = boleano;
}

function escolherLanceDoJogador(){
    vezDoJogador = true;
    alterarContadorIntervaloSemInteracao(0);
    $(".pixel").removeClass("preto");
    lanceAtualDoJogador = lancesDoJogadorFrames[contadorLanceDoJogador]
    lanceAtualDoJogador.toggleClass("preto");
    lanceDoJogador = tiposDeLance[contadorLanceDoJogador];
}

export { contadorLanceDoJogador, alterarContadorLanceDoJogador, lanceDoJogador, lanceAtualDoJogador, escolherLanceDoJogador, vezDoJogador, alterarVezDoJogador, pontosDoJogador, alterarPontosDoJogador }