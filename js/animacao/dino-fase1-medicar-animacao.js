import { injecaoDinoFase1Frames } from "../frames/dinoFase1MedicarFrames.js";
import { habilitarEventosIniciais } from "../principal/telaInicial.js";
import { dinoFase1 } from "./dino-fase1-animacao.js";


 function medicarDinoFase1(){

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
            habilitarEventosIniciais(true);
            dinoFase1(true) ;
        }
        
        contador ++;

    }, 1500);
}

export { medicarDinoFase1 }