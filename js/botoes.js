$("#esc").click(telaInicial);

function telaInicial(){
    encerrarIntervaloComida = true;
    $(".pixel").removeClass("preto");
    frameBebeMovimento1();
    dinoBebe();
    eventoSelecaoEsquerda = true;
    enterSelecao = true;
    mostrarComida = false;
    enterHambuguer = false;
    primeiraVez = true;
}

