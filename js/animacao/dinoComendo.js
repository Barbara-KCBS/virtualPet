import { alterarContadorIntervaloSemInteracao, intervaloSemInteracao, pararIntervalo, pararIntervaloSemInteracao } from "../principal/intervaloSemInteracao.js";
import { habilitarEsc, usoDoEsc } from "../principal/telaInicial.js";
import { dinoArrotando } from "./dinoFase1Arrotando.js";
var dinoEstaComendo = false;

function indicarSeDinoEstaComendo(boleano){
    dinoEstaComendo = boleano;
}

function comer(lista){
    habilitarEsc(false);
    pararIntervaloSemInteracao(true);
    dinoEstaComendo = true;

    let contador = 1;  
    let repetir = true;
    
    const intervalo = setInterval(() =>{

        if(contador < lista.length){
            lista[contador].toggleClass("preto");
        }

        if(contador === lista.length && repetir === true){
            $(".pixel").removeClass("preto")
            lista[0].toggleClass("preto");
            contador = 0;
            repetir = false;
        }

        if(contador === lista.length - 1 && repetir== false){
            clearInterval(intervalo);
            dinoArrotando();
            return
        }
       
        contador ++;

    }, 1000);
 
}

export { comer, dinoEstaComendo, indicarSeDinoEstaComendo }