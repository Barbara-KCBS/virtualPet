var contadorJogador = 0;
var ultimaOpcao = false;
var mostrarJogo = false;
var lanceDoJogador = null;
var lanceDino = null;
var iniciarIntervaloDoJogo = false;
var encerrarIntervaloJogador = false;
var contadorIntervaloJogador = 1;
var enterJogo = false;
var iniciarJogo = true;
var dinoPontos = 0;
var jogadorPontos = 0;
var rodadaJogo = 0;
var percorrerLances = false;

var escJogo = false;

const opcoesDeLanceDoJogador = [jogadorPapel, jogadorPedra, jogadorTesoura];
const opcoesDeLanceDoDino = [dinoPapel, dinoPedra, dinoTesoura];
const lances = ["papel", "pedra", "tesoura"];

function escolhaDoJogador(){

    
    if(mostrarJogo === true){
        
        encerrarIntervaloJogador = false;
        percorrerLances = true;
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
                    contadorJogador = 0;
                    iniciarIntervaloDoJogo = true;
                    ultimaOpcao = false;
                    mostrarJogo = false;
                    iniciarJogo = true;
                    enterJogo = false;
                    rodadaJogo = 0;
                    contadorIntervaloJogador = 1;
                    clearInterval(intervaloJogador);
                    telaInicial(dinoFase1);
                
                 
                }
                // console.log("contador intervalo jogo: " + contadorIntervaloJogador);
                contadorIntervaloJogador += 1;
            }, 1000);
        }


        if(contadorJogador === 0 && (iniciarJogo === true || rodadaJogo === 5)){
            
            inicioDoJogo();
            var contadorInicioDoJogo = 1;

            var intavaloDoInicioDoJogo = setInterval(() => {

                if(contadorInicioDoJogo === 1 && rodadaJogo === 5){
                    if(jogadorPontos > dinoPontos || dinoPontos === jogadorPontos){
                        clearInterval(intavaloDoInicioDoJogo);
                        iniciarJogo = false;
                        reacaoDoResultadoDoJogo(dinoFase1Feliz);
                        rodadaJogo = 0;  
                        contadorJogador = 0;
                        dinoPontos = 0;
                        jogadorPontos = 0;
                    }

                    if(dinoPontos > jogadorPontos){
                        clearInterval(intavaloDoInicioDoJogo);
                        iniciarJogo = false;
                        reacaoDoResultadoDoJogo(dinoFase1Raiva);
                        rodadaJogo = 0;
                        contadorJogador = 0;
                        dinoPontos = 0;
                        jogadorPontos = 0;
                    }

                }

                if(contadorInicioDoJogo === 2 && rodadaJogo === 0){
                    console.log("entrou no inicio do jogo")
                    clearInterval(intavaloDoInicioDoJogo);
                    desligarTodosOsPixels();
                    jogadorPapel();
                    lanceDoJogador = lances[contadorJogador];
                    iniciarJogo = false;
                }
                
                contadorInicioDoJogo ++;

            }, 1000);
        }
        if(iniciarJogo === false){
            console.log("entrou depois do inicio do jogo")
            contadorIntervaloJogador = 0;
            desligarTodosOsPixels();
            opcoesDeLanceDoJogador[contadorJogador]();    
            lanceDoJogador = lances[contadorJogador];
        }
        
    
    }
}


$(".selecao-esquerda").click(()=>{
    if(percorrerLances === true){

        if(contadorJogador === 2){
            contadorJogador = 0;
        }
        else{
            contadorJogador ++;
        }
        escolhaDoJogador(); 
    }
});

$(".selecao-direita").click(() => {
    if(percorrerLances === true){

        if(contadorJogador === 0){
            contadorJogador = 2;
        }
        else{
            contadorJogador --;
        }
        escolhaDoJogador(); 
    }
});

// $(".selecao-esquerda").click(escolhaDoJogador);


function resultadoDosLance(funcaoLanceDino, funcaoLanceJogador, funcaoReacaoDino, emocaoDoDino){
        
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
            funcaoReacaoDino(emocaoDoDino);
            contadorJogador = 0;
        }
        contador ++;

    }, 1000);  
 }   

function compararLances(){

    if(enterJogo === true){
        encerrarIntervaloJogador = true;
        rodadaJogo ++;
        percorrerLances = false;
        enterJogo = false;

        var lanceAleatoriDoDino = Math.floor(Math.random() * 3);

            lanceDino = lances[lanceAleatoriDoDino];

            // console.log(lanceDino);
      


        // dino venceu

        if((lanceDoJogador === "papel" && lanceDino === "tesoura") || (lanceDoJogador === "pedra" && lanceDino === "papel") || (lanceDoJogador === "tesoura" && lanceDino === "pedra")){
            resultadoDosLance(opcoesDeLanceDoDino[lanceAleatoriDoDino], opcoesDeLanceDoJogador[contadorJogador], reacaoDoResultadoDoJogo, dinoFase1Feliz);
            dinoPontos ++;
        }

        //dino não venceu
        if(lanceDoJogador === lanceDino){
            resultadoDosLance(opcoesDeLanceDoDino[lanceAleatoriDoDino], opcoesDeLanceDoJogador[contadorJogador], reacaoDoResultadoDoJogo, dinoFase1Raiva);
        }

        if((lanceDoJogador === "papel" && lanceDino === "pedra") || (lanceDoJogador === "pedra" && lanceDino === "tesoura") || (lanceDoJogador === "tesoura" && lanceDino === "papel")){
            resultadoDosLance(opcoesDeLanceDoDino[lanceAleatoriDoDino], opcoesDeLanceDoJogador[contadorJogador], reacaoDoResultadoDoJogo, dinoFase1Raiva);
            jogadorPontos ++;
        
        }
    }
}    


$("#enter").click(compararLances)

$("#esc").click(()=>{
    console.log("entrou jogo")
    if(escJogo === true){
        contadorIntervaloJogador = 10;
        escJogo = false;
    }
});

