import {iconeDaDireita, contadorSelecaoDireita } from "./percorreInconesDaDireita.js";
import { alterarAtividade, atividade} from "./telaInicial.js";

var contadorSelecaoEsquerda = 0;
var percorrerIconesDaEsquerda = true;

function iconeDaEsquerda(iconeAtual) {
    contadorSelecaoEsquerda = iconeAtual;
}

function habilitarSelecaoEsquerda(boleano) {
    percorrerIconesDaEsquerda = boleano;
}

const listaSelecaoEsquerda = [$("#agua"), $("#comida"), $("#luz"), $("#carinho"), $("#necessidades")];
const atividadesDaEsquerda = ["beber", "comer", "luz", "carinho", "necessidades"];


function selecaoEsquerda(){
  
        $(".atividade-direita").hide();

        if(contadorSelecaoEsquerda === listaSelecaoEsquerda.length){
            listaSelecaoEsquerda[4].hide();
            contadorSelecaoEsquerda = 0;
        }

        listaSelecaoEsquerda[contadorSelecaoEsquerda].parent().prev().children().hide();
        listaSelecaoEsquerda[contadorSelecaoEsquerda].show();
        alterarAtividade(atividadesDaEsquerda[contadorSelecaoEsquerda]);
        iconeDaDireita(contadorSelecaoEsquerda);
        contadorSelecaoEsquerda++;
}

export { selecaoEsquerda, iconeDaEsquerda, contadorSelecaoEsquerda, percorrerIconesDaEsquerda, habilitarSelecaoEsquerda};