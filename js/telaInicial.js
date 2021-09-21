$("#esc").click(telaInicial);

function telaInicial(){
    $(".pixel").removeClass("preto");
    frameBebeMovimento1();
    dinoBebe();
    habilitarEventosIniciais(true);
    
}

function telaInicialApagada(){
    luzDesligada = true;
    tempoDeTelaLuzOff = false;
    $(".pixel").addClass("preto")
    habilitarEventosIniciais(true);
    desligarLuz = false;

}

