var contadorComida = 1;
var ultimaComida = false;
var mostrarComida;
var comida;
var primeiraVez = true;
var contadorIntervaloComida = 1;
var encerrarIntervaloComida = false;
var percorrerComida = true;

var valor;

function opcoesDeComida(){
     
    encerrarIntervaloComida = false;

    if(mostrarComida === false){
        return
    } 

    else{
        if(primeiraVez == true){

            primeiraVez = false;

            var intervaloDaComida = setInterval(() => {

                if(encerrarIntervaloComida == true){
                    clearInterval(intervaloDaComida);
                    ultimaComida = false;
                }

                if(contadorIntervaloComida == 10){ 
                    primeiraVez = true;
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
                        telaInicial();
                    }
                    if(luzDesligada === true){
                        telaInicialApagada();
                    }
                }
                console.log("contador intervalo comida: "+ contadorIntervaloComida);
                contadorIntervaloComida += 1;
            }, 1000);
        }

        if(contadorComida == 1 && ultimaComida == false){
            contadorIntervaloComida = 1;
            hamburguerFrame1();
            comida = "hamburguer";
            enterHamburguer = true;
            
 
        }
        
        if(contadorComida == 1 && ultimaComida == true){
            contadorIntervaloComida = 1;
            coxaFrame1();
            hamburguerFrame1();
            comida = "hamburguer";
            enterCoxa = false;
            enterHamburguer = true;
            ultimaComida = false;
            
        }

        if(contadorComida == 2){
            contadorIntervaloComida = 1;
            hamburguerFrame1();
            macarraoFrame1();
            comida = "macarrao";
            enterHamburguer = false;
            enterMacarrao = true;
            
        }
    
        if(contadorComida == 3){
            contadorIntervaloComida = 1;
            macarraoFrame1();
            sorveteFrame1();
            comida = "sorvete"
            enterMacarrao = false;
            enterSorvete = true;
            
        }

        if(contadorComida == 4){
            contadorIntervaloComida = 1;
            sorveteFrame1();
            cenouraFrame1();
            comida = "cenoura"
            enterSorvete = false;
            enterCenoura = true;
            
        }

        if(contadorComida == 5){
            contadorIntervaloComida = 1;
            cenouraFrame1();
            macaFrame1()
            comida = "maca"
            enterCenoura = false;
            enterMaca = true;
            
        }

        if(contadorComida == 6){
            contadorIntervaloComida = 1;
            macaFrame1()
            coxaFrame1();
            comida = "coxa"
            contadorComida -= 6;
            ultimaComida = true;
            enterMaca = false;
            enterCoxa = true;
           
        }
        
        contadorComida += 1;
    }
}

function percorrerOpcoesDeComida(){
    if(mostrarComida == true && percorrerComida === true){
        opcoesDeComida();
    }
    else{
        return
    }
}

$(".selecao-esquerda").click(percorrerOpcoesDeComida);