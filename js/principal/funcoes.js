import { chocarOvo } from "../animacao/iniciarJogo.js";
import { selecaoDireita, percorrerIconesDaDireita, iconeDaDireita, contadorSelecaoDireita } from "./percorreInconesDaDireita.js";
import { selecaoEsquerda, percorrerIconesDaEsquerda, iconeDaEsquerda, contadorSelecaoEsquerda } from "./percorreIconesDaEsquerda.js";
import { alterarAtividade, atividade, esconderIcones } from "./telaInicial.js";
import { voltarParaTelaPrincipal } from "./telaPrincipal.js";

$("#iniciar-jogo").on("click", function(){
    $(this).fadeOut(1000);
    chocarOvo();
})


function botaoEsc(){
    // if(atividade != ""){
    //     iconeDaDireita(0);
    //     iconeDaEsquerda(0);
    //     alterarAtividade("");
    //     esconderIcones();
    // } else {
        voltarParaTelaPrincipal();

}

$("#esc").on("click", botaoEsc);

