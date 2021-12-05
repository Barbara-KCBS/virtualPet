import { telaPrincipal } from "../animacao/dinoFase1Animacao.js";
import { contadorSelecaoEsquerda, iconeDaEsquerda } from "./botaoSelecaoEsqueda/percorreIconesDaEsquerda.js";
import { contadorSelecaoDireita, iconeDaDireita } from "./botaoSelecaoDireita/percorreInconesDaDireita.js";
import { atividade, esconderIcones, usoDoEsc } from "../principal/telaInicial.js";
import { voltarParaTelaPrincipal } from "../principal/telaPrincipal.js";

function botaoEsc(){
    if(usoDoEsc){
        voltarParaTelaPrincipal();
        return
    }
    if(telaPrincipal && atividade != ""){
        esconderIcones();
        iconeDaDireita(0);
        iconeDaEsquerda(0);
        return
    }
}

export { botaoEsc }