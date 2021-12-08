import { dinoFase1Feliz } from "../animacao/dinoFase1FelizAnimacao.js";
import { dinoFase1Raiva } from "../animacao/dinoFase1RaivaAnimacao.js";
import { dinoVenceu } from "./compararLances.js";

function resultadoDosLances(){
    if(dinoVenceu){
        dinoFase1Feliz();
    } else {
        dinoFase1Raiva();
    }   
}

export { resultadoDosLances }