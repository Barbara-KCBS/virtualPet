var mostrarComida = false;
var tipoDeComida = null;
var contadorComida = 0;
var contadorIntervaloComida = 0;
var encerrarIntervaloComida = false;
var iniciarIntervaloComida = false;
var percorrerComida = false;
var enterComida = false;
var escComida = false;
var quantidadeDeComida = 0;


const listaFrameComida = [hamburguerFrame1, macarraoFrame1, sorveteFrame1, cenouraFrame1, macaFrame1, coxaFrame1];
const listaDeComida = [listaFrameHamburguer, listaFrameMacarrao, listaFrameSorvete, listaFrameCenoura, listaFrameMaca, listaFrameCoxa];


function opcoesDeComida(){

    if(mostrarComida === true){
  
        enterComida = true;

        if(iniciarIntervaloComida == true){

            iniciarIntervaloComida = false;

            var intervaloDaComida = setInterval(() => {

                if(encerrarIntervaloComida === true){
                    clearInterval(intervaloDaComida);
                    encerrarIntervaloComida = false;
                    iniciarIntervaloComida = true;
                    contadorIntervaloComida = 0;
                }

                if(contadorIntervaloComida == 10){ 
                    iniciarIntervaloComida = true;
                    mostrarComida = false;
                    contadorComida = 0;
                    enterComida = false;
                    percorrerComida = false;
                    clearInterval(intervaloDaComida);
                    telaInicial(dinoFase1);                
                }

                console.log("contador intervalo comida: "+ contadorIntervaloComida);
                contadorIntervaloComida += 1;

            }, 1000);
        }

        listaFrameComida[contadorComida]();
        tipoDeComida = listaDeComida[contadorComida];
        escComida = true;
        
    }
}

$(".selecao-esquerda").click(()=>{
    if(percorrerComida === true){

        if(contadorComida === 5){
            contadorComida = 0;
        }
        else{
            contadorComida += 1;
        }
        opcoesDeComida();   
    }
});

$(".selecao-direita").click(() => {
    if(percorrerComida === true){

        if(contadorComida === 0){
            contadorComida = 5;
        }
        else{
            contadorComida -= 1;
        }
        opcoesDeComida();   
    }
});

$("#esc").click(()=>{
    if(escComida === true){
        contadorIntervaloComida = 10;
        escComida = false;
    }
});



$("#enter").click(()=>{
    if(enterComida === true){
        encerrarIntervaloComida = true;
        percorrerComida = false;
        
        comer(tipoDeComida);
        
        escComida = false;  
    }    
});

function voltarParaOpcoesDeComida(){
    opcoesDeComida();
    percorrerComida = true;
    escComida = true;
}