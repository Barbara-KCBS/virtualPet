import { hamburguerFrames, macarraoFrames, sorveteFrames, cenouraFrames, macaFrames, coxaFrames } from "../frames/comidasFrames.js";
import { alterarContadorIntervaloSemInteracao, contadorIntervaloSemInteracao, intervaloSemInteracao } from "../principal/intervaloSemInteracao.js";
import { habilitarEsc, usoDoEsc } from "../principal/telaInicial.js";

var comidaAtual = null;
var contadorComida = 0;
var percorrerComida;
var enterComida = false;
var escComida = false;

function permitirPercorrerComidas(boleano){
    percorrerComida = boleano;
}

function alterarContadorComida(valor){
    contadorComida = valor;
}

function permitirComerComida(boleano){
    enterComida = boleano;
}


const tiposDeComida = [hamburguerFrames[0], macarraoFrames[0], sorveteFrames[0], cenouraFrames[0], macaFrames[0], coxaFrames[0]];
const framesDasComidas = [hamburguerFrames, macarraoFrames, sorveteFrames, cenouraFrames, macaFrames, coxaFrames];


function opcoesDeComida(){
        habilitarEsc(true);
        alterarContadorIntervaloSemInteracao(0);

        $(".pixel").removeClass("preto");
        tiposDeComida[contadorComida].toggleClass("preto");
        comidaAtual = framesDasComidas[contadorComida];
        escComida = true;     

}

export {
    opcoesDeComida, 
    alterarContadorComida, 
    contadorComida, 
    percorrerComida, 
    permitirPercorrerComidas, 
    permitirComerComida, 
    enterComida, 
    comidaAtual 
}