import { dinoFase1Frame1 } from "../frames/dinoFase1frames.js";
import { dinoFase1RaivaFrame } from "../frames/dinoFase1ReacoesFrame.js";
import { iniciarJokenpo } from "../jogoJokenpo/iniciarJokenpo.js";

function dinoFase1Raiva(){

   let contador = 1;

   const intervalo = setInterval(()=>{
       if(contador === 1 || contador === 3){
           $(".pixel").removeClass("preto");
           dinoFase1Frame1.toggleClass("preto");
       }
       if(contador === 2 || contador === 4){
           dinoFase1Frame1.toggleClass("preto");
           dinoFase1RaivaFrame.toggleClass("preto");
       }
       if(contador === 5){
           clearInterval(intervalo);
           iniciarJokenpo();
       }  

       contador += 1;
   }, 1000);
}

export { dinoFase1Raiva }