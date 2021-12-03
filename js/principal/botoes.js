import { botaoEnter } from "../funcoesDosBotoes/enter.js";
import { botaoDireito } from "../funcoesDosBotoes/selecaoDireita.js";
import { botaoEsquerdo } from "../funcoesDosBotoes/selecaoEsquerda.js";

$("#enter").on("click", botaoEnter);
$(".selecao-esquerda").on("click", botaoEsquerdo);  
$(".selecao-direita").on("click", botaoDireito);
