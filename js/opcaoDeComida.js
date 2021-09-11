var contadorComida = 1;
var ultimaComida = false;
var mostrarComida;
var comida;
var primeiraVez = true;
var contadorIntervaloComida = 1;
var encerrarIntervalo = false;

function opcoesDeComida(){

    console.log("contador comida: " + contadorComida);

    if(mostrarComida === false){
        return
    } 

    else{
        if(primeiraVez == true){
            primeiraVez = false;
            var intervaloDaComida = setInterval(() => {
                console.log(contadorIntervaloComida);
                if(encerrarIntervalo == true){
                    clearInterval(intervaloDaComida);
                }
                if(contadorIntervaloComida == 10){
                    clearInterval(intervaloDaComida);
                    telaInicial();
                    primeiraVez = true;
                }
                contadorIntervaloComida += 1;
            }, 1000);
        }
        if(contadorComida == 1 && ultimaComida == false){
            contadorIntervaloComida = 1;
            hamburguer();
            comida = "hamburguer";
        }
        
        if(contadorComida == 1 && ultimaComida == true){
            contadorIntervaloComida = 1;
            coxa();
            hamburguer();
            comida = "hamburguer";
            ultimaComida = false;
        }
        if(contadorComida == 2){
            contadorIntervaloComida = 1;
            hamburguer();
            macarrao();
            comida = "macarrao";
        }
    
        if(contadorComida == 3){
            contadorIntervaloComida = 1;
            macarrao();
            sorvete();
            comida = "sorvete"
        }
        if(contadorComida == 4){
            contadorIntervaloComida = 1;
            sorvete();
            cenoura();
            comida = "cenoura"
        }
        if(contadorComida == 5){
            contadorIntervaloComida = 1;
            cenoura();
            maca();
            comida = "maca"
        }
        if(contadorComida == 6){
            contadorIntervaloComida = 1;
            maca();
            coxa();
            comida = "coxa"
            contadorComida -= 6;
            ultimaComida = true;
        }
    
        contadorComida += 1;
    }
}

function percorrerOpcoesDeComida(){
    if(mostrarComida == true){
        opcoesDeComida();
    }
    else{
        return
    }
}