import { pararDinoTelaPrincipal, telaPrincipal } from "../animacao/dino-fase1-animacao.js";
import { alterarAtividade, atividade, habilitarEventosIniciais } from "../principal/telaInicial.js";
import { voltarParaTelaPrincipal } from "../principal/telaPrincipal.js";
import { mostrarPainelDoRelogio } from "../relogio/mostrarRelogio.js";

var relogio = false;
function relogioNaTela(boleano){
    relogio = boleano;
}
function divsAuxiliares(){
    for(let i2 = 1; i2 <= 16; i2++){
        let linha = `.linha${i2}`
        for(let i3 = 1; i3 <= 19; i3++){  
            var criarDiv = $("<div/>", {class: "divs-auxiliar"})                             
            $(linha).append(criarDiv);
        }                                
    }
}

function botaoClock(){
   if(telaPrincipal && !relogio){
       alterarAtividade("");
       pararDinoTelaPrincipal(false);
       habilitarEventosIniciais(false);
       divsAuxiliares();
       mostrarPainelDoRelogio(); 
       return
   } 
   if(relogio){
       voltarParaTelaPrincipal();
       return
   }
}


export { botaoClock, relogio, relogioNaTela }
