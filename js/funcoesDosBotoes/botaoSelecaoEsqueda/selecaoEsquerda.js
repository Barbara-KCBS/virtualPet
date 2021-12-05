import { alterarContadorComida, comidaAtual, contadorComida, enterComida, opcoesDeComida, percorrerComida, permitirComerComida, permitirPercorrerComidas } from "../../outrosRecursos/opcoesDeComida.js";
import { alterarEstadoAtualDaLuz, estadoAtualDaLuz, luz, luzOff, luzOn, mostrarPainelDeLuz, painelDeLuz } from "../../outrosRecursos/luz.js";
import { alterarEstadoAtualDoArcondicionado, arcondicionado, arcondicionadoOff, arcondicionadoOn, estadoAtualDoArcondicionado, mostrarPainelDoArcondionado, painelDoArcondicionado } from "../../outrosRecursos/painelDoArCondicionado.js";
import { selecaoEsquerda, percorrerIconesDaEsquerda, iconeDaEsquerda, contadorSelecaoEsquerda } from "./percorreIconesDaEsquerda.js";
import { alterarContadorIntervaloSemInteracao, intervaloSemInteracao, pararIntervalo, pararIntervaloSemInteracao } from "../../principal/intervaloSemInteracao.js";
import { alterarContadorNecessidades, contadorNecessidades, necessidadesDoDino, percorrerNecessidades, permitirPercorrerNecessidades } from "../../outrosRecursos/painelDeNecessidade.js";
import { entrarNoJogo, estaDentroDoJogo } from "../../jogoJokenpo/iniciarJokenpo.js";
import { alterarContadorLanceDoJogador, contadorLanceDoJogador, escolherLanceDoJogador } from "../../jogoJokenpo/escolherLanceDoJogador.js";
import { percorreOpcoesAhEsquerda } from "./percorrerOpcoesAhEsqueda.js";


function botaoEsquerdo(){
    if(percorrerIconesDaEsquerda){
        selecaoEsquerda();
    }
    if(percorrerComida){
        percorreOpcoesAhEsquerda(opcoesDeComida, contadorComida, alterarContadorComida, 5);
    }
    if(percorrerNecessidades){
        percorreOpcoesAhEsquerda(necessidadesDoDino, contadorNecessidades, alterarContadorNecessidades, 5);
    }
    if(painelDeLuz){
        alterarContadorIntervaloSemInteracao(0);
        alterarEstadoAtualDaLuz("ligar");
        luz(luzOn)
    }
    if(painelDoArcondicionado){
        alterarContadorIntervaloSemInteracao(0);
        alterarEstadoAtualDoArcondicionado("ligar");
        arcondicionado(arcondicionadoOn)
    }
    if(estaDentroDoJogo){
        percorreOpcoesAhEsquerda(escolherLanceDoJogador, contadorLanceDoJogador, alterarContadorLanceDoJogador, 2);
    }
}


export { botaoEsquerdo }