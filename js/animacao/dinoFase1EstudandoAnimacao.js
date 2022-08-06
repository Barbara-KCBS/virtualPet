import { dinoFase1EstudandoFrame1, dinoFase1EstudandoFrame2 } from "../frames/dinoFase1EstudandoFrames.js";
import { habilitarEventosIniciais } from "../principal/telaInicial.js";
import { dinoFase1 } from "./dinoFase1Animacao.js";
import { estaNatelaPrincipal, voltarParaTelaPrincipal } from "../principal/telaPrincipal.js";

function dinoFase1Estudando(){
    estaNatelaPrincipal(false)
    let contador = 1;

    var intervalo = setInterval(() =>{
        if(contador === 1){
            $(".pixel").removeClass("preto");
            dinoFase1EstudandoFrame1.toggleClass("preto");
        }
        if(contador > 1 && contador <= 3){
            dinoFase1EstudandoFrame2.toggleClass("preto");
        }
        if(contador === 4){
            dinoFase1EstudandoFrame2.toggleClass("preto");
            clearInterval(intervalo);
            voltarParaTelaPrincipal();
        }   

        contador ++;

    }, 1050);
}

export { dinoFase1Estudando }

