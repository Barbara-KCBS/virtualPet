var contadorComida = 0;
var mostrarComida = null;
var comida = null;
var iniciarIntervaloComida = false;
var contadorIntervaloComida = 0;
var encerrarIntervaloComida = false;
var percorrerComida = false;
var escComida = false;
var botaoDireitoComida = false;

var valor;

function opcoesDeComida(){
     
    encerrarIntervaloComida = false;

    if(mostrarComida === false){
        return
    } 

    else{
        escComida = true;

        if(iniciarIntervaloComida == true){

            iniciarIntervaloComida = false;

            var intervaloDaComida = setInterval(() => {

                if(encerrarIntervaloComida == true){
                    clearInterval(intervaloDaComida);
                    ultimaComida = false;
                }

                if(contadorIntervaloComida == 10){ 
                    iniciarIntervaloComida = true;
                    ultimaComida = false;
                    enterHamburguer = false;
                    enterMacarrao = false;
                    enterSorvete = false;
                    enterCenoura = false;
                    enterMaca = false;
                    enterCoxa = false;
                    mostrarComida = false;
                    clearInterval(intervaloDaComida);
                    if(luzDesligada === false){
                        telaInicial(dinoBebe, frameBebeMovimento1);
                    }
                    if(luzDesligada === true){
                        telaInicialApagada();
                    }
                }
                console.log("contador intervalo comida: "+ contadorIntervaloComida);
                contadorIntervaloComida += 1;
            }, 1000);
        }

        if(botaoDireitoComida ===  false){
            if(contadorComida === 6){
                contadorComida = 1;
            }
            else{
                contadorComida += 1;
            }
        }
        if(botaoDireitoComida === true){
            if(contadorComida === 1){
                contadorComida = 6;
            }
            else{
                contadorComida -= 1;
            }

        }

        if(contadorComida == 1){
            contadorIntervaloComida = 1;
            desligarTodosOsPixels();
            hamburguerFrame1();
            comida = "hamburguer";
            enterHamburguer = true;
        }

        if(contadorComida == 2){
            contadorIntervaloComida = 1;
            desligarTodosOsPixels();
            macarraoFrame1();
            comida = "macarrao";
            enterHamburguer = false;
            enterMacarrao = true;
            
        }
    
        if(contadorComida == 3){
            contadorIntervaloComida = 1;
            desligarTodosOsPixels();
            sorveteFrame1();
            comida = "sorvete"
            enterMacarrao = false;
            enterSorvete = true;
            
        }

        if(contadorComida == 4){
            contadorIntervaloComida = 1;
            desligarTodosOsPixels();
            cenouraFrame1();
            comida = "cenoura"
            enterSorvete = false;
            enterCenoura = true;
            
        }

        if(contadorComida == 5){
            contadorIntervaloComida = 1;
            desligarTodosOsPixels();
            macaFrame1()
            comida = "maca"
            enterCenoura = false;
            enterMaca = true;
            
        }

        if(contadorComida == 6){
            contadorIntervaloComida = 1;
            desligarTodosOsPixels();
            coxaFrame1();
            comida = "coxa";
            enterMaca = false;
            enterCoxa = true;
           
        }
    }
}

$(".selecao-esquerda").click(()=>{
    if(percorrerComida === false){
        return
    }
    botaoDireitoComida = false;
    opcoesDeComida();   
});

$(".selecao-direita").click(() => {
    if(percorrerComida === false){
        return
    }
    botaoDireitoComida = true;
    opcoesDeComida();   
});

$("#esc").click(()=>{
    if(escComida === false){
        return
    }
    else{
        contadorIntervaloComida = 10;
        escComida = false;
    }
});

$("#enter").click(comerHamburguer);
$("#enter").click(comerMacarrao);
$("#enter").click(comerSorvete);
$("#enter").click(comerCenoura);
$("#enter").click(comerMaca);
$("#enter").click(comerCoxa);