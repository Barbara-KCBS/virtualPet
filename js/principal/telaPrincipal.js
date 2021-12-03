import { dinoFase1 } from "../animacao/dinoFase1Animacao.js";
import { habilitarEventosIniciais } from "./telaInicial.js";
import { enterComida, percorrerComida, permitirComerComida, permitirPercorrerComidas } from "../outrosRecursos/opcoesDeComida.js";
import { estadoAtualDaLuz, mostrarPainelDeLuz, painelDeLuz } from "../outrosRecursos/luz.js";
import { percorrerNecessidades, permitirPercorrerNecessidades } from "../outrosRecursos/painelDeNecessidade.js";
import { entrarNoJogo, estaDentroDoJogo } from "../jogoJokenpo/iniciarJokenpo.js";

function voltarParaTelaPrincipal(){
    permitirPercorrerComidas(false);
    permitirComerComida(false);
    permitirPercorrerNecessidades(false);
    mostrarPainelDeLuz(false);
    habilitarEventosIniciais(true);
    entrarNoJogo(false);
    if(estadoAtualDaLuz == "ligar"){
        dinoFase1(true);
    } else { $(".pixel").addClass("preto") }
    return
}

export { voltarParaTelaPrincipal }
