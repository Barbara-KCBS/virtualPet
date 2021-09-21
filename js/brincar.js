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

function dinoVenceu(){
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
            escolhaDoJogador();
            reacaoDino = false;
    
        }

        contadorReacao += 1; 

    }, 1000);
}

function compararLances(){
    encerrarIntervaloJogador = true;

    if(enterJogo === false){
        return
    }

    enterJogo = false;
    var lanceAleatoriDoDino = Math.floor(Math.random() * 3);

    if(lanceAleatoriDoDino === 0){
        lanceDino = "papel";
    }

    if(lanceAleatoriDoDino === 1){
        lanceDino = "pedra";
    }

    if(lanceAleatoriDoDino === 2){
        lanceDino = "tesoura";
    }

    if(lanceJogador === "papel" && lanceDino === "tesoura"){
        desligarTodosOsPixels();
        dinoTesoura();
        dinoVenceu();
        contadorJogador = 1;
    }
    if(lanceJogador === "pedra" && lanceDino === "papel"){
        desligarTodosOsPixels();
        dinoPapel();
        dinoVenceu();
        contadorJogador = 1;
    }
    if(lanceJogador === "tesoura" && lanceDino === "pedra"){
        desligarTodosOsPixels();
        dinoPedra();
        dinoVenceu();
        contadorJogador = 1;
    }
    if(lanceJogador === "papel" && (lanceDino === "pedra" || lanceDino === lanceJogador)){
        desligarTodosOsPixels();
        if(lanceDino === "papel"){
            dinoPapel();
        }
        if(lanceDino === "pedra"){
            dinoPedra();
        }
        if(lanceDino === "tesoura"){
            dinoTesoura();
        }
        dinoNaoVenceu();
        contadorJogador = 1;
    }
    if(lanceJogador === "pedra" && (lanceDino === "tesoura" || lanceDino === lanceJogador)){
        desligarTodosOsPixels();
        if(lanceDino === "papel"){
            dinoPapel();
        }
        if(lanceDino === "pedra"){
            dinoPedra();
        }
        if(lanceDino === "tesoura"){
            dinoTesoura();
        }
        dinoNaoVenceu();
        contadorJogador = 1;
    }
    if(lanceJogador === "tesoura" && (lanceDino === "papel" || lanceDino === lanceJogador)){
        desligarTodosOsPixels();
        if(lanceDino === "papel"){
            dinoPapel();
        }
        if(lanceDino === "pedra"){
            dinoPedra();
        }
        if(lanceDino === "tesoura"){
            dinoTesoura();
        }
        dinoNaoVenceu();
        contadorJogador = 1;
    }
}    

var contadorJogador = 1;
var ultimaOpcao = false;
var mostrarJogo;
var lanceJogador;
var lanceDino;
var primeiraVez = false;
var encerrarIntervaloJogador = false;
var contadorIntervaloJogador = 1;
var enterJogo = false;
var iniciarJogo = true;


function escolhaDoJogador(){
    primeiraVez = true;

    encerrarIntervaloJogador = false;

    if(mostrarJogo === false){
        return
    } 

    else{

        if(primeiraVez == true){

            enterJogo = true; 
            primeiraVez = false;

            const intervaloJogador = setInterval(() => {

                if(encerrarIntervaloJogador == true){
                    clearInterval(intervaloJogador);
                    ultimaOpcao = false;
                }

                if(contadorIntervaloJogador == 10){ 
                    contadorJogador = 1;
                    primeiraVez = true;
                    ultimaOpcao = false;
                    mostrarJogo = false;
                    iniciarJogo = true;
                    enterJogo = false;
                    clearInterval(intervaloJogador);
                    if(luzDesligada === false){
                        telaInicial();
                    }
                    if(luzDesligada === true){
                        telaInicialApagada();
                    }
                }
                console.log("contador intervalo comida: "+ contadorIntervaloComida);
                contadorIntervaloJogador += 1;
            }, 1000);
        }
        if(contadorJogador === 1 && iniciarJogo === true){
            inicioDoJogo();
            var contadorInicioDoJogo = 0;

            var intavaloDoInicioDoJogo = setInterval(() => {
                
                contadorInicioDoJogo += 1;

                if(contadorInicioDoJogo === 2){
                    clearInterval(intavaloDoInicioDoJogo);
                    contadorIntervaloJogador = 1;
                    desligarTodosOsPixels();
                    jogadorPapel();
                    lanceJogador = "papel";  
                    iniciarJogo = false;
                }

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

function percorrerOpcoesDeLance(){
    if(mostrarJogo == true){
        escolhaDoJogador();
    }    
    else{
        return
    }
}

$(".selecao-esquerda").click(percorrerOpcoesDeLance);

$("#enter").click(compararLances)




