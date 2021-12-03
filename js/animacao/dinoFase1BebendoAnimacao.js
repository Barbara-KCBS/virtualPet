import { dinoArrotando } from "./dinoFase1Arrotando.js";
import { aguaFrame1, aguaFrame2, aguaFrame3, aguaFrame4, aguaFrame5, aguaFrame6, aguaFrame7} from "../frames/dinoFase1BebendoFrames.js";

const framesDinoBebendo = [aguaFrame1, aguaFrame2, aguaFrame3, aguaFrame4, aguaFrame5, aguaFrame6, aguaFrame7];

var bebida = 0;

function dinoFase1Bebendo(){
    
    let contador = 0;
    var intervalo = setInterval(() =>{
        if(contador == 0){
            $(".pixel").removeClass("preto");
            framesDinoBebendo[0].toggleClass("preto");
        }
        if(contador > 0 && contador < 6){
            framesDinoBebendo[contador].toggleClass("preto");
        }
        
        if(contador === 6){
            framesDinoBebendo[contador].toggleClass("preto");
            clearInterval(intervalo);
            dinoArrotando();
            return
        }
   
        contador += 1;

    }, 1050);
}


export { dinoFase1Bebendo }