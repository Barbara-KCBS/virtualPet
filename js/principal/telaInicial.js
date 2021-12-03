import { habilitarSelecaoEsquerda } from "./percorreIconesDaEsquerda.js";
import { habilitarSelecaoDireita } from "./percorreInconesDaDireita.js";

var atividade = "";

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

export {habilitarEventosIniciais, esconderIcones, alterarAtividade, atividade}