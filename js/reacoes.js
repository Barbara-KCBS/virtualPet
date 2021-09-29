function arrotarFrame(){
    $(".M06, .M07, .M12, .L08, .L09, .L10, .L11, .K04, .K15, .M04, .N07,.N07, .N08,.N09,.N10,.N11,.N12, .M15, .M13").toggleClass("preto");
}

function dinoFase1Raiva(){
    $(".B16, .B17, .C16, .C17, .D15, .F13, .G08,.G09,.G10,.G11,.H07,.H12,.I06,.I13,.J06,.J08,.J09, .J10, .J11,.J13,.K06,.K13,.L06,.L13,.M07,.M08,.M09,.M10,.M11,.M12").toggleClass("preto"); 
 }
    
 function dinoFase1Feliz(){
     $(".C09, .D06, .D13, .F08,.F09,.F10,.F11,.G03, .G07,.G12, .G16, .H06, .H13, .I06, .I08,.I11, .I13,.J06,.J13,.K06,.K13,.L06,.L13,.M07,.M08,.M09,.M10,.M11,.M12").toggleClass("preto");	
 }

// dino feliz

 function dinoFeliz(){

    let contadorFelicidade = 1;

    const intervaloFelicidade = setInterval(()=>{
        if(contadorFelicidade === 1 || contadorFelicidade === 3){
            desligarTodosOsPixels();
            frameDinoFase1Movimento1();
        }
        if(contadorFelicidade === 2 || contadorFelicidade === 4){
            frameDinoFase1Movimento1();
            dinoFase1Feliz();
        }
        if(contadorFelicidade === 5 && luzDesligada === false){
            clearInterval(intervaloFelicidade);
            telaInicial(dinoFase1);
        }  
        if(contadorFelicidade === 5 && luzDesligada === true){
            clearInterval(intervaloFelicidade);
            telaInicialApagada(); 
    
        }  

        contadorFelicidade += 1;
    }, 1000);
}



// Dino arrotando

function dinoArrotando(tela){

    let contador = 1;

    const intervalo = setInterval(()=>{
        console.log("contador arrotando: " + contador)
        if(contador === 1){
            desligarTodosOsPixels();
            frameDinoFase1Movimento1();
        }
        if(contador > 1 && contador <= 3){   
            arrotarFrame();
        }
        if(contador === 4){     
            arrotarFrame();
            if(atividade === "beber"){
                clearInterval(intervalo);
                habilitarEventosIniciais(true);
                tela();
                return 
            }   
        }
        if(contador === 5){
            arrotarFrame();
            clearInterval(intervalo);
            tela();
        }

        contador += 1;

    }, 1000);
}

// dino venceu

function reacaoDoResultadoDoJogo(emocaoDoDino){
    encerrarIntervaloJogador = true;
    let contadorReacao = 1;

    const intervaloReacaoDino = setInterval(()=>{
           if(contadorReacao === 1 || contadorReacao === 3){
               desligarTodosOsPixels();
               frameDinoFase1Movimento1();
           }
           if(contadorReacao === 2 || contadorReacao === 4){
               desligarTodosOsPixels();
               emocaoDoDino();
           }
           
           if(contadorReacao === 5){
               clearInterval(intervaloReacaoDino);
               desligarTodosOsPixels();
               reacaoDino = false; 
               enterJogo = true;
               percorrerLances = true;
               iniciarIntervaloDoJogo = true;
               escolhaDoJogador();
               return
           }
           
           contadorReacao ++;

   }, 1000);
}    



