import { chocarOvo } from "../animacao/iniciar-jogo.js";

function botaoIniciar(){
    $("#img-chavinha").fadeOut(1000);
    $(this).fadeOut(1000);
    chocarOvo();
}

export { botaoIniciar }