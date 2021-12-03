import { dinoFase1EstudandoFrame1, dinoFase1EstudandoFrame2 } from "../frames/dinoFase1EstudandoFrames.js";
import { habilitarEventosIniciais } from "../principal/telaInicial.js";
import { dinoFase1 } from "./dinoFase1Animacao.js";

function dinoFase1Estudando(){

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
            habilitarEventosIniciais(true);
            dinoFase1(true) ;           
        }   

        contador ++;

    }, 1050);
}

export { dinoFase1Estudando }

