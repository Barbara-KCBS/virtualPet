function inicioDoJogo(){
    $(".C06, .C07, .C09, .C10, .D05, .D08, .D11, .E05, .E11, .F06, .F10, .G07, .G09, .G11, .G12, .G14, .G15, .H08, .H10,  .H11, .H12, .H13, .H14, .H15, .H16, .I10,  .I11, .I12, .I13, .I14, .I15, .I16, .J11, .J12, .J13, .J14, .J15, .K12, .K13, .K14, .L13, .K06, .K07, .K09,.K10, .L05, .L08, .L11, .M05, .M11, .N06, .N10, .O07, .O09, .P08").toggleClass("preto"); 
}

function jogadorPapel(){
   $(".D03, .D04, .E02, .E05, .E06, .E07, .E08, .F01, .F02, .F09, .G06, .G07, .G08, .G09, .H09, .I06, .I07, .I08, .I09, .J09, .K06, .K07, .K08, .K09, .L01, .L02, .L09, .M03, .M04, .M05, .M06, .M07, .M08").toggleClass("preto");  
}

function jogadorPedra(){
    $(".D03, .D04, .E02, .E05, .E06, .F01, .F02, .F07, .G06, .G07, .H07, .I06, .I07, .J07, .K06, .K07, .L01, .L02, .L07, .M03, .M04, .M05, .M06").toggleClass("preto");  
}

function jogadorTesoura(){
    $(".D03, .D04, .E02, .E05, .F01, .F02, .F06, .F07, .F08, .F09, .F10, .G10, .H06, .H07, .H08, .H09, .I10, .J06, .J07, .J08, .J09, .J10, .K06, .L01, .L02, .L06, .M03, .M04, .M05").toggleClass("preto");  
}

function dinoPapel(){
    $(".D14, .D15, .E14, .E15, .F17, .F18, .G13, .G14, .G16, .G17, .G18, .G19, .H13, .H14, .H16, .H17, .H18, .H19, .I16, .I17, .I18, .I19, .J13, .J14, .J16, .J17, .J18, .J19, .K13, .K14, .K16, .K17, .K18, .K19, .L17, .L18, .M14, .M15, .N14, .N15").toggleClass("preto"); 
}

function dinoPedra(){
    $(".F17, .F18, .G16, .G17, .G18, .G19, .H16, .H17, .H18, .H19, .I16, .I17, .I18, .I19, .J16, .J17, .J18, .J19, .K16, .K17, .K18, .K19, .L17, .L18").toggleClass("preto");
}

function dinoTesoura(){
    
    $(".F17, .F18, .G13, .G14, .G16, .G17, .G18, .G19, .H13, .H14, .H16, .H17, .H18, .H19, .I16, .I17, .I18, .I19, .J13, .J14, .J16, .J17, .J18, .J19, .K13, .K14, .K16, .K17, .K18, .K19, .L17, .L18").toggleClass("preto"); 
}

var contadorJogador = 1;
var ultimaOpcao = false;
var mostrarJogo = false;
var lanceJogador = null;
var lanceDino = null;
var iniciarIntervaloDoJogo = false;
var encerrarIntervaloJogador = false;
var contadorIntervaloJogador = 1;
var enterJogo = false;
var iniciarJogo = true;
var dinoPontos = 0;
var jogadorPontos = 0;
var rodadaJogo = 0;

var escJogo = false;

function dinoVenceu(){
     encerrarIntervaloJogador = true;
     let contadorReacao = 1;

     const intervaloReacaoDino = setInterval(()=>{
            if(contadorReacao === 1){
                desligarTodosOsPixels();
                frameBebeMovimento1();
            }
            if(contadorReacao === 2){
                frameBebeMovimento1();
                dinoBebeFeliz();
            }
            if(contadorReacao === 3){
                dinoBebeFeliz();
                frameBebeMovimento1();
            }
            if(contadorReacao === 4){
                frameBebeMovimento1();
                dinoBebeFeliz();
            }
            if(contadorReacao === 5){
                clearInterval(intervaloReacaoDino);
                desligarTodosOsPixels();
                escolhaDoJogador();
                reacaoDino = false; 
            }
            
            contadorReacao += 1;
    }, 1000);
}    

function dinoNaoVenceu(){
    encerrarIntervaloJogador = true;
    let contadorReacao = 1;

    const intervaloReacaoDino = setInterval(()=>{
        if(contadorReacao === 1){
            desligarTodosOsPixels();
            frameBebeMovimento1();
        }
        if(contadorReacao === 2){
            frameBebeMovimento1();
            dinoBebeRaiva();
        }
        if(contadorReacao === 3){
            frameBebeMovimento1();
            dinoBebeRaiva();
        }
        if(contadorReacao === 4){
            frameBebeMovimento1()
            dinoBebeRaiva();
        }
        if(contadorReacao === 5){
            clearInterval(intervaloReacaoDino); 
            desligarTodosOsPixels();
            escolhaDoJogador();
            reacaoDino = false;
        }

        contadorReacao += 1; 

    }, 1000);
}

function resultaDosLance(funcaoLanceDino, funcaoLanceJogador, funcaoReacaoDino){
        
    let contador = 1;

    const intervalo = setInterval(()=>{
        if(contador === 1){
            desligarTodosOsPixels();
            funcaoLanceDino();
        }
        if(contador === 2){
            funcaoLanceJogador();
        }
        if(contador === 3){
            clearInterval(intervalo);
            funcaoReacaoDino();
            contadorJogador = 1;
        }
        contador ++;

    }, 1000);  
 }   

function compararLances(){

    encerrarIntervaloJogador = true;

    if(enterJogo === false){
        return
    }

    rodadaJogo += 1;
    enterJogo = false;

    var lanceAleatoriDoDino = Math.floor(Math.random() * 3 + 1);

    if(lanceAleatoriDoDino === 1){
        lanceDino = "papel";
    }

    if(lanceAleatoriDoDino === 2){
        lanceDino = "pedra";
    }

    if(lanceAleatoriDoDino === 3){
        lanceDino = "tesoura";
    }


    // dino venceu

    if(lanceJogador === "papel" && lanceDino === "tesoura"){
        resultaDosLance(dinoTesoura, jogadorPapel, dinoVenceu);
        dinoPontos += 1;
    }

    if(lanceJogador === "pedra" && lanceDino === "papel"){
        resultaDosLance(dinoPapel, jogadorPedra, dinoVenceu);
        dinoPontos += 1;
    }

    if(lanceJogador === "tesoura" && lanceDino === "pedra"){
        resultaDosLance(dinoPedra, jogadorTesoura, dinoVenceu);
        dinoPontos += 1;
    }


    //dino não venceu

    if(lanceJogador === "papel" && (lanceDino === "pedra" || lanceDino === lanceJogador)){

        if(lanceDino === "papel"){
            resultaDosLance(dinoPapel, jogadorPapel, dinoNaoVenceu);
        }

        if(lanceDino === "pedra"){
            resultaDosLance(dinoPedra, jogadorPapel, dinoNaoVenceu);
            jogadorPontos += 1;
        }
        
    }

    if(lanceJogador === "pedra" && (lanceDino === "tesoura" || lanceDino === lanceJogador)){

        if(lanceDino === "pedra"){
            resultaDosLance(dinoPedra, jogadorPedra, dinoNaoVenceu);
        }
        if(lanceDino === "tesoura"){
            resultaDosLance(dinoTesoura, jogadorPedra, dinoNaoVenceu);
            jogadorPontos += 1;
        }
    }

    if(lanceJogador === "tesoura" && (lanceDino === "papel" || lanceDino === lanceJogador)){
        
        if(lanceDino === "papel"){
            resultaDosLance(dinoPapel, jogadorTesoura, dinoNaoVenceu);
            jogadorPontos += 1;
        }

        if(lanceDino === "tesoura"){
            resultaDosLance(dinoTesoura, jogadorTesoura, dinoNaoVenceu);
        }
    }
}    

function escolhaDoJogador(){

    encerrarIntervaloJogador = false;

    if(mostrarJogo === false){
        return
    } 

    else{

        escJogo = true;

        if(iniciarIntervaloDoJogo === true){

            enterJogo = true; 
            iniciarIntervaloDoJogo = false;

            const intervaloJogador = setInterval(() => {
                if(rodadaJogo === 5){
                    iniciarJogo = true;
                }

                if(encerrarIntervaloJogador === true){
                    clearInterval(intervaloJogador);
                    ultimaOpcao = false;
                }

                if(contadorIntervaloJogador === 10){ 
                    contadorJogador = 1;
                    iniciarIntervaloDoJogo = true;
                    ultimaOpcao = false;
                    mostrarJogo = false;
                    iniciarJogo = true;
                    enterJogo = false;
                    rodadaJogo = 0;
                    contadorIntervaloJogador = 1;

                    clearInterval(intervaloJogador);
                    if(luzDesligada === false){
                        telaInicial(dinoBebe, frameBebeMovimento1);
                    }
                    if(luzDesligada === true){
                        telaInicialApagada();
                    }
                }
                console.log("contador intervalo jogo: " + contadorIntervaloJogador);
                contadorIntervaloJogador += 1;
            }, 1000);
        }


        if(contadorJogador === 1 && (iniciarJogo === true || rodadaJogo === 5)){
            desligarTodosOsPixels();
            inicioDoJogo();
            var contadorInicioDoJogo = 1;

            var intavaloDoInicioDoJogo = setInterval(() => {

                if(contadorInicioDoJogo === 1 && rodadaJogo === 5){
                    if(jogadorPontos > dinoPontos || dinoPontos === jogadorPontos){
                        clearInterval(intavaloDoInicioDoJogo);
                        iniciarJogo = false;
                        dinoNaoVenceu();
                        rodadaJogo = 0;  
                        contadorJogador = 1;
                        dinoPontos = 0;
                        jogadorPontos = 0;
                    }

                    if(dinoPontos > jogadorPontos){
                        clearInterval(intavaloDoInicioDoJogo);
                        iniciarJogo = false;
                        dinoVenceu();
                        rodadaJogo = 0;
                        contadorJogador = 1;
                        dinoPontos = 0;
                        jogadorPontos = 0;
                    }

                }

                if(contadorInicioDoJogo === 2 && rodadaJogo === 0){
                    clearInterval(intavaloDoInicioDoJogo);
                    desligarTodosOsPixels();
                    jogadorPapel();
                    lanceJogador = "papel";  
                    iniciarJogo = false;
                }
                
                contadorInicioDoJogo += 1;

            }, 1000);
        }

        if(contadorJogador === 1 && ultimaOpcao === false && iniciarJogo === false){
            contadorIntervaloJogador = 1;
            desligarTodosOsPixels();
            jogadorPapel();
            lanceJogador = "papel";
        }
        
        if(contadorJogador == 1 && ultimaOpcao == true){
            contadorIntervaloJogador = 1;
            desligarTodosOsPixels();
            jogadorPapel();
            lanceJogador = "papel";        
            ultimaOpcao = false;         
        }

        if(contadorJogador == 2){
            contadorIntervaloJogador = 1;
            jogadorPapel();
            jogadorPedra();
            lanceJogador = "pedra";
        }

        if(contadorJogador == 3){
            contadorIntervaloJogador = 1;
            jogadorPedra();
            jogadorTesoura();
            lanceJogador = "tesoura"
            contadorJogador -= 3;
            ultimaOpcao = true;              
        }

        contadorJogador += 1;
    }
}

$(".selecao-esquerda").click(escolhaDoJogador);

$("#enter").click(compararLances)

$("#esc").click(()=>{
    if(escJogo === false){
        return
    }
    else{
        contadorIntervaloJogador = 10;
        escJogo = false;
    }
});


