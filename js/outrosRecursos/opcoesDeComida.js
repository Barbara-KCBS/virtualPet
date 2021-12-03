import { hamburguerFrames, macarraoFrames, sorveteFrames, cenouraFrames, macaFrames, coxaFrames } from "../frames/comidasFrames.js";
import { alterarContadorIntervaloSemInteracao, contadorIntervaloSemInteracao, intervaloSemInteracao } from "../principal/intervaloSemInteracao.js";

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

        alterarContadorIntervaloSemInteracao(0);

        $(".pixel").removeClass("preto");
        tiposDeComida[contadorComida].toggleClass("preto");
        comidaAtual = framesDasComidas[contadorComida];
        escComida = true;     

}


function percorreOpcoesAhDireita(atividadeAhSerPercorrida, contador, receberNovoValor, quantidadeDeOpcoes){
    if(contador === 0){
        contador = quantidadeDeOpcoes;
    }
    else{
        contador--;
    }
    receberNovoValor(contador)
    atividadeAhSerPercorrida();
}
function percorreOpcoesAhEsquerda(atividadeAhSerPercorrida, contador, receberNovoValor, quantidadeDeOpcoes){
    if(contador === quantidadeDeOpcoes){
        contador = 0;
    }
    else{
        contador++;
    }
    receberNovoValor(contador)
    atividadeAhSerPercorrida();
}


export {
    opcoesDeComida, 
    alterarContadorComida, 
    contadorComida, 
    percorreOpcoesAhDireita, 
    percorreOpcoesAhEsquerda,
    percorrerComida, 
    permitirPercorrerComidas, 
    permitirComerComida, 
    enterComida, 
    comidaAtual 
}