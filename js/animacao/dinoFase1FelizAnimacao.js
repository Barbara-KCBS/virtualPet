import { dinoFase1Frame1 } from "../frames/dinoFase1frames.js";
import { dinoFase1FelizFrame } from "../frames/dinoFase1ReacoesFrame.js";
import { iniciarJokenpo } from "../jogoJokenpo/iniciarJokenpo.js";
import { atividade } from "../principal/telaInicial.js"
import { voltarParaTelaPrincipal } from "../principal/telaPrincipal.js"

function dinoFase1Feliz(){

   let contador = 1;

   const intervalo = setInterval(()=>{
       if(contador === 1 || contador === 3){
           $(".pixel").removeClass("preto");
           dinoFase1Frame1.toggleClass("preto");
       }
       if(contador === 2 || contador === 4){
           dinoFase1Frame1.toggleClass("preto");
           dinoFase1FelizFrame.toggleClass("preto");
       }
       if(contador === 5){
           clearInterval(intervalo);
           if(atividade == "banhar"){
              voltarParaTelaPrincipal();
           } else {
               iniciarJokenpo();
           }
       }  

       contador += 1;
   }, 1000);
}

export { dinoFase1Feliz }