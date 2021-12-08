import { telaPrincipal } from "../animacao/dino-fase1-animacao.js";
import { contadorSelecaoEsquerda, iconeDaEsquerda } from "./botaoSelecaoEsqueda/percorreIconesDaEsquerda.js";
import { contadorSelecaoDireita, iconeDaDireita } from "./botaoSelecaoDireita/percorreInconesDaDireita.js";
import { alterarAtividade, atividade, esconderIcones, usoDoEsc } from "../principal/telaInicial.js";
import { voltarParaTelaPrincipal } from "../principal/telaPrincipal.js";

function botaoEsc(){
    if(atividade == ""){
        return
    }
    if(usoDoEsc){
        voltarParaTelaPrincipal();
        return
    }
    if(telaPrincipal && atividade != ""){
        alterarAtividade("");
        esconderIcones();
        iconeDaDireita(0);
        iconeDaEsquerda(0);
        return
    }
}

export { botaoEsc }