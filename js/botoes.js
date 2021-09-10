$("#esc").click(telaInicial);

function telaInicial(){   
    $(".pixel").removeClass("preto");
    frameBebeMovimento1();
    dinoBebe();
    eventoSelecaoEsquerda = true;
    enterSelecao = true;
    mostrarComida = false;
    enterHambuguer = false;
}

