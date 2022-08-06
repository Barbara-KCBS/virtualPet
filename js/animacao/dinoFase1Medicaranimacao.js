import { injecaoDinoFase1Frames } from "../frames/dinoFase1MedicarFrames.js";
import { habilitarEventosIniciais } from "../principal/telaInicial.js";
import { dinoFase1 } from "./dinoFase1Animacao.js";
import { estaNatelaPrincipal, voltarParaTelaPrincipal } from "../principal/telaPrincipal.js";


 function medicarDinoFase1(){
    estaNatelaPrincipal(false);
    let contador = 0;

    const intervaloMedicar = setInterval(() =>{
        if(contador == 0){
            $(".pixel").removeClass("preto");     
            injecaoDinoFase1Frames[0].toggleClass("preto");
        }
        if(contador > 0 && contador < injecaoDinoFase1Frames.length){     
            injecaoDinoFase1Frames[contador].toggleClass("preto");
        }
        if(contador === 4){
            clearInterval(intervaloMedicar);
            voltarParaTelaPrincipal();
        }
        
        contador ++;

    }, 1500);
}

export { medicarDinoFase1 }