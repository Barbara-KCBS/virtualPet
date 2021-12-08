
import { dinoFase1Frame1 } from "../frames/dinoFase1frames.js";
import { dinoFase1Arroto } from "../frames/dinoFase1ReacoesFrame.js";
import { opcoesDeComida, permitirPercorrerComidas } from "../outrosRecursos/opcoesDeComida.js";
import { atividade, habilitarEventosIniciais } from "../principal/telaInicial.js";
import { intervaloSemInteracao, pararIntervalo, pararIntervaloSemInteracao } from "../principal/intervaloSemInteracao.js";
import { dinoEstaComendo, indicarSeDinoEstaComendo } from "./dino-comendo.js";
import { voltarParaTelaPrincipal } from "../principal/telaPrincipal.js";

function dinoArrotando(){
    let contador = 1;

    const intervalo = setInterval(()=>{
        if(contador === 1){
            $(".pixel").removeClass("preto");
            dinoFase1Frame1.toggleClass("preto");
        }
        if(contador > 1 && contador <= 3){   
            dinoFase1Arroto.toggleClass("preto");
        }
        if(contador === 4){     
            dinoFase1Arroto.toggleClass("preto");
            if(atividade === "beber"){
                clearInterval(intervalo);
                voltarParaTelaPrincipal();
                return 
            }   
        }
        if(contador === 5){
            dinoFase1Arroto.toggleClass("preto");
            clearInterval(intervalo);
            pararIntervaloSemInteracao(false);
            intervaloSemInteracao();
            permitirPercorrerComidas(true);
            indicarSeDinoEstaComendo(false);
            opcoesDeComida();
            return
        }

        contador += 1;

    }, 1000);
}

export { dinoArrotando }