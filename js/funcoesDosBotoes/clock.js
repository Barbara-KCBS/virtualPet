import { pararDinoTelaPrincipal, telaPrincipal } from "../animacao/dinoFase1Animacao.js";
import { habilitarEventosIniciais } from "../principal/telaInicial.js";
import { voltarParaTelaPrincipal } from "../principal/telaPrincipal.js";
import { mostrarPainelDoRelogio } from "../relogio/mostrarRelogio.js";

var relogio = false;
function relogioNaTela(boleano){
    relogio = boleano;
}

function botaoClock(){
   if(telaPrincipal){
       pararDinoTelaPrincipal(false);
       habilitarEventosIniciais(false);
       mostrarPainelDoRelogio(); 
       return
   } 
   if(relogio){
       voltarParaTelaPrincipal();
       return
   }
}


export { botaoClock, relogio, relogioNaTela }
