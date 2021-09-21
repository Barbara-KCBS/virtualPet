$("#esc").click(telaInicial);

function telaInicial(){
    desligarTodosOsPixels();
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

