var brincadeira = $("#brincadeira");
var estudo = $("#estudo");
var banho = $("#banho");
var ar= $("#ar");
var medico= $("#medico");

$(".atividade-direita").hide();

var contadorSelecaoDireita = 1;
var ultimaAtividadeDireita = false;

var atividade;

function selecaoDireita(){
     
    $(".atividade-esquerda").hide();

    if(contadorSelecaoDireita == 1 && ultimaAtividadeDireita == false){
        brincadeira.show(); 
        atividade = "brincar";
        contadorSelecaoEsquerda  = 1;
       
    }
    if(contadorSelecaoDireita == 1 && ultimaAtividadeDireita == true){
        medico.hide();
        brincadeira.show(); 
        atividade = "brincar";
        contadorSelecaoEsquerda  = 1;
    }
    if(contadorSelecaoDireita == 2){
        brincadeira.hide(); 
        estudo.show();
        atividade = "estudar";
        contadorSelecaoEsquerda  = 2;
    }
    if(contadorSelecaoDireita == 3){
        estudo.hide();
        banho.show();
        contadorSelecaoEsquerda  = 3;
    }
    if(contadorSelecaoDireita == 4){
        banho.hide(); 
        ar.show(); 
        contadorSelecaoEsquerda  = 4;
    }
    if(contadorSelecaoDireita == 5){
        ar.hide();
        medico.show();
        contadorSelecaoDireita -= 5;
        ultimaAtividadeDireita = true;
        contadorSelecaoEsquerda  = 5;
    }

    contadorSelecaoDireita += 1;
}

$(".selecao-direita").click(selecaoDireita);

// $("#enter").click(()=>{
//     if(atividade == "beber"){
//         beberAgua();
//     }
//     if(atividade == "comer"){
//         comerHamburguer();
//     }
// })










