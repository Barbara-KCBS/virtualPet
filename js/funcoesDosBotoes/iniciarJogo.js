import { chocarOvo } from "../animacao/iniciarJogo.js";

function botaoIniciar(){
    $(this).fadeOut(1000);
    chocarOvo();
}

export { botaoIniciar }