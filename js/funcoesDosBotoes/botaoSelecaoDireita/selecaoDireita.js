import { alterarContadorIntervaloSemInteracao, intervaloSemInteracao, pararIntervalo, pararIntervaloSemInteracao } from "../../principal/intervaloSemInteracao.js";
import { alterarEstadoAtualDaLuz, estadoAtualDaLuz, luz, luzOff, luzOn, mostrarPainelDeLuz, painelDeLuz } from "../../outrosRecursos/luz.js";
import { alterarContadorNecessidades, contadorNecessidades, necessidadesDoDino, percorrerNecessidades, permitirPercorrerNecessidades } from "../../outrosRecursos/painelDeNecessidade.js";
import { alterarEstadoAtualDoArcondicionado, arcondicionado, arcondicionadoOff, arcondicionadoOn, estadoAtualDoArcondicionado, mostrarPainelDoArcondionado, painelDoArcondicionado } from "../../outrosRecursos/painelDoArCondicionado.js";
import { selecaoDireita, percorrerIconesDaDireita, iconeDaDireita, contadorSelecaoDireita } from "../botaoSelecaoDireita/percorreInconesDaDireita.js";
import { alterarContadorComida, comidaAtual, contadorComida, enterComida, opcoesDeComida, percorrerComida, permitirComerComida, permitirPercorrerComidas } from "../../outrosRecursos/opcoesDeComida.js";
import { entrarNoJogo, estaDentroDoJogo } from "../../jogoJokenpo/iniciarJokenpo.js";
import { alterarContadorLanceDoJogador, contadorLanceDoJogador, escolherLanceDoJogador } from "../../jogoJokenpo/escolherLanceDoJogador.js";
import { percorreOpcoesAhDireita } from "./percorrerOpcoesAhDireita.js";


function botaoDireito(){
    if(percorrerIconesDaDireita){
        selecaoDireita();
    }
    if(percorrerComida){
        percorreOpcoesAhDireita(opcoesDeComida, contadorComida, alterarContadorComida, 5);
    }
    if(percorrerNecessidades){
        percorreOpcoesAhDireita(necessidadesDoDino, contadorNecessidades, alterarContadorNecessidades, 5);
    }
    if(painelDeLuz){
        alterarContadorIntervaloSemInteracao(0);
        alterarEstadoAtualDaLuz("desligar");
        luz(luzOff)
    }
    if(painelDoArcondicionado){
        alterarContadorIntervaloSemInteracao(0);
        alterarEstadoAtualDoArcondicionado("desligar");
        arcondicionado(arcondicionadoOff);
    }
    if(estaDentroDoJogo){
        percorreOpcoesAhEsquerda(escolherLanceDoJogador, contadorLanceDoJogador, alterarContadorLanceDoJogador, 2);
    }
}

export { botaoDireito }