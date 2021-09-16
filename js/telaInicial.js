$("#esc").click(telaInicial);

function telaInicial(){
    $(".pixel").removeClass("preto");
    frameBebeMovimento1();
    dinoBebe();
    eventoSelecaoEsquerda = true;
    eventoSelecaoDireita = true;
    enterSelecao = true;
    
}

function telaInicialApagada(){
    luzDesligada = true;
    telaLuzOff = false;
    telaLuzOn = false;
    tempoDeTelaLuzOff = false;
    $(".pixel").addClass("preto")
    eventoSelecaoEsquerda = true;
    eventoSelecaoDireita = true;
    enterSelecao = true;
    desligarLuz = false;

}

