import { contadorSelecaoEsquerda, iconeDaEsquerda } from "../funcoesDosBotoes/botaoSelecaoEsqueda/percorreIconesDaEsquerda.js";
import { contadorSelecaoDireita, iconeDaDireita } from "../funcoesDosBotoes/botaoSelecaoDireita/percorreInconesDaDireita.js";
import { esconderIcones } from "../principal/telaInicial.js";
import { deslizarRelogioParaEsquerda } from "./deslizarRelogioParaEsquerda.js";
import { ocultarPainelDoRelogio } from "./ocultarPainelDoRelogio.js";
import { painelDoRelogio } from "./painelDoRelogio.js";



function mostrarPainelDoRelogio(){
    esconderIcones();
    iconeDaDireita(0);
    iconeDaEsquerda(0);
    ocultarPainelDoRelogio();
    let contador = 0;
    const intervalo = setInterval(()=>{
       deslizarRelogioParaEsquerda();
       contador++;
       if(contador === 18){
         clearInterval(intervalo);
         painelDoRelogio();
         return
       }
    }, 150);
}

export { mostrarPainelDoRelogio }