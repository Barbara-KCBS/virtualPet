import { carinhoFrame1, carinhoFrame2 } from "../frames/dinoFase1CarinhoFrames.js";
import { voltarParaTelaPrincipal } from "../principal/telaPrincipal.js";

function fazerCarinhoNoDino(){
    let contador = 1;

    var intervalo = setInterval(() =>{
        if(contador == 1){  
            $(".pixel").removeClass("preto");
            carinhoFrame1.toggleClass("preto");
        }
        if(contador === 2){
            carinhoFrame2.toggleClass("preto");
            clearInterval(intervalo);
            voltarParaTelaPrincipal();
        }  

        contador ++;

    }, 1050);
}

export { fazerCarinhoNoDino }