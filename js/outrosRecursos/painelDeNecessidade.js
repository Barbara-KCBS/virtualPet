import { humor, temperatura, sede, fome, pesoEIdade, estudos } from "../frames/necessidades.js";
import { alterarContadorIntervaloSemInteracao, contadorIntervaloSemInteracao } from "../principal/intervaloSemInteracao.js";
import { habilitarEsc, usoDoEsc } from "../principal/telaInicial.js";


var contadorNecessidades = 0;
var contadorIntervaloNecessidade = 0;
var percorrerNecessidades = false;


function alterarContadorNecessidades(valor){
    contadorNecessidades = valor;
}

function permitirPercorrerNecessidades(boleano){
    percorrerNecessidades = boleano;
}

const listaDeNecessidades = [humor, temperatura, sede, fome, pesoEIdade, estudos];

function necessidadesDoDino(){
        habilitarEsc(true);
        alterarContadorIntervaloSemInteracao(0);
        
        $(".pixel").removeClass("preto");
        contadorIntervaloNecessidade = 0;
        listaDeNecessidades[contadorNecessidades].toggleClass("preto")

}


export {necessidadesDoDino, percorrerNecessidades, permitirPercorrerNecessidades, contadorNecessidades, alterarContadorNecessidades}


