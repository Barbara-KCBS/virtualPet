import { botaoClock } from "../funcoesDosBotoes/clock.js";
import { botaoEnter } from "../funcoesDosBotoes/enter.js";
import { botaoEsc } from "../funcoesDosBotoes/esc.js";
import { botaoIniciar } from "../funcoesDosBotoes/iniciarJogo.js";
import { botaoDireito } from "../funcoesDosBotoes/botaoSelecaoDireita/selecaoDireita.js";
import { botaoEsquerdo } from "../funcoesDosBotoes/botaoSelecaoEsqueda/selecaoEsquerda.js";


$("#iniciar-jogo").one("click", botaoIniciar);
$("#enter").on("click", botaoEnter);
$(".selecao-esquerda").on("click", botaoEsquerdo);  
$(".selecao-direita").on("click", botaoDireito);
$("#esc").on("click", botaoEsc);
$("#clock").on("click", botaoClock);
