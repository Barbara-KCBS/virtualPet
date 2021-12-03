import { dinoFase1Feliz } from "../animacao/dinoFase1FelizAnimacao.js";
import { dinoFase1Raiva } from "../animacao/dinoFase1RaivaAnimacao.js";
import { alterarContadorIntervaloSemInteracao, intervaloSemInteracao, pararIntervaloSemInteracao } from "../principal/intervaloSemInteracao.js";
import { alterarRodadas, rodadas } from "./compararLances.js";
import { alterarContadorLanceDoJogador, alterarPontosDoJogador, contadorLanceDoJogador, escolherLanceDoJogador, pontosDoJogador } from "./escolherLanceDoJogador.js";
import { inicioDoJogo, lancesDoJogadorFrames, lancesDoDinoFrames } from "./jogoJokenpoFrames.js";
import { alterarPontosDoDino, pontosDoDino } from "./mostrarLanceDoDino.js";

var tiposDeLance = ["papel", "pedra", "tesoura"];

var estaDentroDoJogo = false;

function entrarNoJogo(boleano){
    estaDentroDoJogo = boleano;
}

function iniciarJokenpo(){
    let contador = 0;
    const intervalo = setInterval(()=>{
        if((contador == 3 || estaDentroDoJogo) && rodadas < 5){
            clearInterval(intervalo);
            pararIntervaloSemInteracao(false);
            intervaloSemInteracao();
            alterarContadorLanceDoJogador(0);
            escolherLanceDoJogador();           
            return
        } 
        if(!estaDentroDoJogo || rodadas == 5){
            $(".pixel").removeClass("preto");
            inicioDoJogo.addClass("preto");
            
        }  
        if(contador == 2 && rodadas < 5){
            estaDentroDoJogo = true;
        }
        if(contador == 3 && rodadas == 5){
            clearInterval(intervalo);
            estaDentroDoJogo = true;
            if(pontosDoDino > pontosDoJogador){
                dinoFase1Feliz();
            } else {
                dinoFase1Raiva();
            }
            alterarPontosDoJogador(0);
            alterarPontosDoDino(0);
            alterarRodadas(0);
            return
        }
        contador++;
    }, 1000)
}


export { estaDentroDoJogo, entrarNoJogo, tiposDeLance, iniciarJokenpo }