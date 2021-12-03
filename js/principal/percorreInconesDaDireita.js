import { iconeDaEsquerda, contadorSelecaoEsquerda } from "./percorreIconesDaEsquerda.js";
import { alterarAtividade, atividade } from "./telaInicial.js";

var contadorSelecaoDireita= 0;
var percorrerIconesDaDireita = true;

function iconeDaDireita(iconeAtual) {
  contadorSelecaoDireita = iconeAtual;
}
function habilitarSelecaoDireita(boleano) {
    percorrerIconesDaDireita = boleano;
}

const listaSelecaoDireita = [$("#brincadeira"), $("#estudo"), $("#banho"), $("#ar"), $("#medico")];
const atividadesDaDireito = ["brincar", "estudar", "banhar", "ar-condicionado", "medicar"];

function selecaoDireita(){

        $(".atividade-esquerda").hide();

        if(contadorSelecaoDireita === listaSelecaoDireita.length){
            listaSelecaoDireita[4].hide();
            contadorSelecaoDireita = 0;
        }
        
        listaSelecaoDireita[contadorSelecaoDireita].parent().prev().children().hide();
        listaSelecaoDireita[contadorSelecaoDireita].show();
        alterarAtividade(atividadesDaDireito[contadorSelecaoDireita]);
        iconeDaEsquerda(contadorSelecaoDireita);
        contadorSelecaoDireita++;
}


export { selecaoDireita, iconeDaDireita, habilitarSelecaoDireita, contadorSelecaoDireita, percorrerIconesDaDireita };