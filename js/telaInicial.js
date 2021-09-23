

function telaInicial(faseDoDino, frame1){
    desligarTodosOsPixels();
    telaDinoBebe = true;
    frame1();
    faseDoDino();
    habilitarEventosIniciais(true);   
}

function telaInicialApagada(){
    $(".pixel").addClass("preto")
    habilitarEventosIniciais(true);
}

