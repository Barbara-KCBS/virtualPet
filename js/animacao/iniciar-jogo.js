import {chocarOvoFrame1, chocarOvoFrame2, chocarOvoFrame3, chocarOvoFrame4, chocarOvoFrame5, chocarOvoFrame6, chocarOvoFrame7, chocarOvoFrame8, chocarOvoFrame9, chocarOvoFrame10, chocarOvoFrame11, chocarOvoFrame12, chocarOvoFrame13, chocarOvoFrame14, chocarOvoFrame15, chocarOvoFrame16, chocarOvoFrame17, chocarOvoFrame18, chocarOvoFrame19, chocarOvoFrame20} from "../frames/framesChocarOvo.js";
import { habilitarEventosIniciais } from "../principal/telaInicial.js";
import { dinoFase1 } from "./dino-fase1-animacao.js";


function ligarEdesligarPixels(frame, indice){
    frame[indice].toggleClass("preto");
}

function chocarOvo() {  
    
    const framesChocarOvo = [chocarOvoFrame1, chocarOvoFrame2, chocarOvoFrame3, chocarOvoFrame4, chocarOvoFrame5, chocarOvoFrame6, chocarOvoFrame7, chocarOvoFrame8, chocarOvoFrame9, chocarOvoFrame10, chocarOvoFrame11, chocarOvoFrame12, chocarOvoFrame13, chocarOvoFrame14, chocarOvoFrame15, chocarOvoFrame16, chocarOvoFrame17, chocarOvoFrame18, chocarOvoFrame19, chocarOvoFrame20];

    let contador = 0;

    const intervalo = setInterval(()=>{
        if(contador <= 9){
            ligarEdesligarPixels(framesChocarOvo, contador);
        }
        if(contador === 10){
            ligarEdesligarPixels(framesChocarOvo, 10);       
        }
        if(contador > 10 && contador <= 14 || contador > 18 && contador <= 22){
            ligarEdesligarPixels(framesChocarOvo, 11);
        }
        if(contador > 14 && contador <= 18 || contador > 22 && contador <= 26){
            ligarEdesligarPixels(framesChocarOvo, 11);
            ligarEdesligarPixels(framesChocarOvo, 12);
        }
        if(contador === 27){
            ligarEdesligarPixels(framesChocarOvo, 11);
            ligarEdesligarPixels(framesChocarOvo, 12);
            ligarEdesligarPixels(framesChocarOvo, 13);
        }
        if(contador > 27 && contador <= 33){
            ligarEdesligarPixels(framesChocarOvo, contador - 14);
        }
        if(contador === 34){
            clearInterval(intervalo);
            habilitarEventosIniciais(true);
            dinoFase1(true);

        }

        contador ++;
    }, 1000);    
    
}

export {chocarOvo}
