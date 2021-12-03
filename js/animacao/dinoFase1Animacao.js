import { dinoFase1Frame1, dinoFase1Frame2, dinoFase1Frame3, dinoFase1Frame4 } from "../frames/dinoFase1frames.js";

var telaPrincipal = true;

function pararDinoTelaPrincipal(boleano){
    telaPrincipal = boleano;
}

const framesDinoFase1 = [dinoFase1Frame1 , dinoFase1Frame2, dinoFase1Frame3, dinoFase1Frame2, dinoFase1Frame4];

var frameAtualTelaPrincipal;

function dinoFase1(boleano) {
        telaPrincipal = boleano;
        let contador = 0;
        const intervalo = setInterval(() => {
            if(!telaPrincipal){
                clearInterval(intervalo);
                return
            }
            $(".pixel").removeClass("preto");
            frameAtualTelaPrincipal = framesDinoFase1[contador].addClass("preto");         
            
            contador ++;
            if(contador > 4){
                contador = 0;
            }

        }, 1000);
        
}

export { dinoFase1, pararDinoTelaPrincipal}