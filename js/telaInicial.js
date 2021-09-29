

function telaInicial(faseDoDino){
    
    habilitarEventosIniciais(true); 

    if(luzDesligada === false){
        telaDinoFase1 = true;
        faseDoDino();
    }

    if(luzDesligada === true){
        $(".pixel").addClass("preto")
    }
}


