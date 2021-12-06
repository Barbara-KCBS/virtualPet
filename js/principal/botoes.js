import { botaoClock } from "../funcoesDosBotoes/clock.js";
import { botaoEnter } from "../funcoesDosBotoes/enter.js";
import { botaoEsc } from "../funcoesDosBotoes/esc.js";
import { botaoIniciar } from "../funcoesDosBotoes/iniciarJogo.js";
import { botaoDireito } from "../funcoesDosBotoes/botaoSelecaoDireita/selecaoDireita.js";
import { botaoEsquerdo } from "../funcoesDosBotoes/botaoSelecaoEsqueda/selecaoEsquerda.js";

function pressionarBotao(elemento){
    let heightBotao = $(elemento).css("height");
    heightBotao =  `${heightBotao.substring(0, 2) - 3}px`;
    $(elemento).css("height", heightBotao);

    setTimeout(()=>{
        let heightBotao = $(elemento).css("height");
        heightBotao =  `${Number(heightBotao.substring(0, 2)) + 3}px`;
        $(elemento).css("height", heightBotao);
    }, 100);   
}

$("#iniciar-jogo").one("click", botaoIniciar);
$("#enter").on("click", function(){
    
    pressionarBotao(this);
    botaoEnter();
});
$("#selecao-esquerda").on("click", function(){
    pressionarBotao(this);
    botaoEsquerdo();
});  
$("#selecao-direita").on("click", function(){
    pressionarBotao(this);
    botaoDireito();
});
$("#esc").on("click", function(){
    pressionarBotao(this);
    botaoEsc();
});
$("#clock").on("click", function(){
    pressionarBotao(this);
    botaoClock();
});

