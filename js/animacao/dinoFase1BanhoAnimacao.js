import { banhoDinoFase1Frames } from "../frames/dinoFase1BanhoFrames.js";
import { dinoFase1Feliz } from "./dinoFase1FelizAnimacao.js";

function banharDinoFase1(){

    let contador = 0;

    var intervalo = setInterval(() =>{
        
        if(contador < banhoDinoFase1Frames.length){
            $(".pixel").removeClass("preto");
            banhoDinoFase1Frames[contador].toggleClass("preto");
        }
        if(contador === 3){
            clearInterval(intervalo);
            dinoFase1Feliz();
        }
      
        contador ++;

    }, 1500);
}


export { banharDinoFase1 }