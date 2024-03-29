import { dinoFase1 } from "../animacao/dinoFase1Animacao.js";
import { habilitarEsc, habilitarEventosIniciais, usoDoEsc } from "./telaInicial.js";
import { enterComida, percorrerComida, permitirComerComida, permitirPercorrerComidas } from "../outrosRecursos/opcoesDeComida.js";
import { estadoAtualDaLuz, mostrarPainelDeLuz, painelDeLuz } from "../outrosRecursos/luz.js";
import { percorrerNecessidades, permitirPercorrerNecessidades } from "../outrosRecursos/painelDeNecessidade.js";
import { entrarNoJogo, estaDentroDoJogo } from "../jogoJokenpo/iniciarJokenpo.js";
import { relogio, relogioNaTela } from "../funcoesDosBotoes/clock.js";
import { alterarContadorIntervaloSemInteracao, contadorIntervaloSemInteracao, pararIntervalo, pararIntervaloSemInteracao } from "./intervaloSemInteracao.js";
import { mostrarPainelDoArcondionado, painelDoArcondicionado } from "../outrosRecursos/painelDoArCondicionado.js";


let tela = true;

function estaNatelaPrincipal(boleano){
    tela = boleano;
}

function voltarParaTelaPrincipal(){
    pararIntervaloSemInteracao(true);
    alterarContadorIntervaloSemInteracao(0);
    permitirPercorrerComidas(false);
    permitirComerComida(false);
    permitirPercorrerNecessidades(false);
    mostrarPainelDeLuz(false);
    mostrarPainelDoArcondionado(false);
    habilitarEventosIniciais(true);
    entrarNoJogo(false);
    habilitarEsc(false);
    estaNatelaPrincipal(true)
    if(estadoAtualDaLuz){
        dinoFase1(true);
    } else { 
        $(".pixel").addClass("preto") 
    }
    setTimeout(()=>{
        relogioNaTela(false);
    }, 1000)   
    return
}

export { voltarParaTelaPrincipal, tela, estaNatelaPrincipal }
