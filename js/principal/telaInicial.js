import { habilitarSelecaoEsquerda } from "../funcoesDosBotoes/botaoSelecaoEsqueda/percorreIconesDaEsquerda.js";
import { habilitarSelecaoDireita } from "../funcoesDosBotoes/botaoSelecaoDireita/percorreInconesDaDireita.js";

var atividade = "";
var usoDoEsc = false;

function habilitarEsc(boleano){
    usoDoEsc = boleano;
}

function alterarAtividade(valor){
    atividade = valor;
}

function esconderIcones(){
    $(".atividade-direita, .atividade-esquerda").hide();
}

function habilitarEventosIniciais(boleano){
    habilitarSelecaoEsquerda(boleano);
    habilitarSelecaoDireita(boleano);
}

export {
    habilitarEventosIniciais, 
    esconderIcones, 
    alterarAtividade, 
    atividade,
    usoDoEsc, 
    habilitarEsc
}