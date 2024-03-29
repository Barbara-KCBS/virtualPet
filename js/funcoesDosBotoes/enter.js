import { comer, dinoEstaComendo } from "../animacao/dinoComendo.js";
import { dinoFase1, pararDinoTelaPrincipal, telaPrincipal } from "../animacao/dinoFase1Animacao.js";
import { banharDinoFase1 } from "../animacao/dinoFase1BanhoAnimacao.js";
import { dinoFase1Bebendo } from "../animacao/dinoFase1BebendoAnimacao.js";
import { fazerCarinhoNoDino } from "../animacao/dinoFase1CarinhoAnimacao.js";
import { dinoFase1Estudando } from "../animacao/dinoFase1EstudandoAnimacao.js";
import { medicarDinoFase1 } from "../animacao/dinoFase1Medicaranimacao.js";
import { alterarContadorComida, comidaAtual, contadorComida, enterComida, opcoesDeComida,  percorrerComida, permitirComerComida, permitirPercorrerComidas } from "../outrosRecursos/opcoesDeComida.js";
import { alterarEstadoAtualDaLuz, alterarInterruptor, estadoAtualDaLuz, interruptorOn, luz, luzOff, luzOn, mostrarPainelDeLuz, painelDeLuz } from "../outrosRecursos/luz.js";
import { alterarEstadoAtualDoArcondicionado, arcondicionado, arcondicionadoOff, arcondicionadoOn, estadoAtualDoArcondicionado, mostrarPainelDoArcondionado, painelDoArcondicionado } from "../outrosRecursos/painelDoArCondicionado.js";
import { selecaoEsquerda, percorrerIconesDaEsquerda, iconeDaEsquerda, contadorSelecaoEsquerda  } from "./botaoSelecaoEsqueda/percorreIconesDaEsquerda.js";
import { alterarAtividade, atividade, esconderIcones, habilitarEventosIniciais } from "../principal/telaInicial.js";
import { alterarContadorIntervaloSemInteracao, contadorIntervaloSemInteracao, intervaloSemInteracao, pararIntervalo, pararIntervaloSemInteracao } from "../principal/intervaloSemInteracao.js";
import { alterarContadorNecessidades, contadorNecessidades, necessidadesDoDino, percorrerNecessidades, permitirPercorrerNecessidades } from "../outrosRecursos/painelDeNecessidade.js";
import { estaDentroDoJogo, iniciarJokenpo } from "../jogoJokenpo/iniciarJokenpo.js";
import { mostrarlanceDoDino } from "../jogoJokenpo/mostrarLanceDoDino.js";
import { vezDoJogador } from "../jogoJokenpo/escolherLanceDoJogador.js";
import { estaNatelaPrincipal, tela, voltarParaTelaPrincipal } from "../principal/telaPrincipal.js";

function botaoEnter(){
    if(atividade == "" && percorrerIconesDaEsquerda){
        selecaoEsquerda();
        return;
    }
    if(atividade == "beber" && tela){
        habilitarEventosIniciais(false);
        pararDinoTelaPrincipal(false);
        estaNatelaPrincipal(false)
        dinoFase1Bebendo();
        return
    }
    if(enterComida && !dinoEstaComendo){
        permitirPercorrerComidas(false);
        comer(comidaAtual);
        return
    }
    if(atividade == "comer" && !enterComida){
        habilitarEventosIniciais(false);
        pararDinoTelaPrincipal(false);
        permitirPercorrerComidas(true);
        permitirComerComida(true);
        pararIntervaloSemInteracao(false);
        intervaloSemInteracao();
        opcoesDeComida();
        return
    }

    if(atividade == "luz" && !painelDeLuz){
        habilitarEventosIniciais(false);
        pararDinoTelaPrincipal(false);
        mostrarPainelDeLuz(true);
        pararIntervaloSemInteracao(false);
        intervaloSemInteracao();
        alterarInterruptor(true);
        luz(luzOn);
        return
    }
    if(painelDeLuz){  
        pararIntervaloSemInteracao(true);
        alterarContadorIntervaloSemInteracao(0);
        if(interruptorOn){
            alterarEstadoAtualDaLuz(true);
        } else {
            alterarEstadoAtualDaLuz(false);
        }
        voltarParaTelaPrincipal();
        mostrarPainelDeLuz(false);
        return
    }
    if(atividade == "carinho" && telaPrincipal){
        habilitarEventosIniciais(false);
        pararDinoTelaPrincipal(false);
        fazerCarinhoNoDino()
        return
    }
  
    if(atividade == "necessidades" && !percorrerNecessidades){
        habilitarEventosIniciais(false);
        pararDinoTelaPrincipal(false);
        permitirPercorrerNecessidades(true);
        pararIntervaloSemInteracao(false);
        intervaloSemInteracao();
        necessidadesDoDino();
        return
    }
    if(atividade == "brincar" && !estaDentroDoJogo){
        habilitarEventosIniciais(false);
        pararDinoTelaPrincipal(false);
        iniciarJokenpo();
        return
    }
    if(estaDentroDoJogo && vezDoJogador){
        mostrarlanceDoDino();
    }
    if(atividade == "estudar" && telaPrincipal){
        habilitarEventosIniciais(false);
        pararDinoTelaPrincipal(false);
        dinoFase1Estudando();
        return
    }
    if(atividade == "banhar" && telaPrincipal){
        habilitarEventosIniciais(false);
        pararDinoTelaPrincipal(false);
        banharDinoFase1();
        return
    }
    if(atividade == "ar-condicionado"){
        alterarEstadoAtualDoArcondicionado("ligar");
        habilitarEventosIniciais(false);
        pararDinoTelaPrincipal(false);
        mostrarPainelDoArcondionado(true);
        pararIntervaloSemInteracao(false);
        intervaloSemInteracao();
        arcondicionado(arcondicionadoOn);
        return
    }
    if(atividade == "medicar" && telaPrincipal){
        habilitarEventosIniciais(false);
        pararDinoTelaPrincipal(false);
        medicarDinoFase1();
        return
    }
  
}

export { botaoEnter }