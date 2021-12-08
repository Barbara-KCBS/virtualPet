import { dinoFase1Feliz } from "../animacao/dino-fase1-feliz-animacao.js";
import { dinoFase1Raiva } from "../animacao/dino-fase1-raiva-animacao.js";
import { dinoVenceu } from "./compararLances.js";

function resultadoDosLances(){
    if(dinoVenceu){
        dinoFase1Feliz();
    } else {
        dinoFase1Raiva();
    }   
}

export { resultadoDosLances }