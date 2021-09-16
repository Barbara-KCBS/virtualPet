var agua = $("#agua");
var comparando = $("#comida");
var luz = $("#luz");
var carinho = $("#carinho");
var necessidades = $("#necessidades");

$(".atividade-esquerda").hide();

var contadorSelecaoEsquerda = 1;
var ultimaAtividadeEsquerda = false;

var eventoSelecaoEsquerda = true;

var atividade;

function percorrerAtividadesDaEsquerda(){
     
    if(eventoSelecaoEsquerda == false){
        return
    }
    
    else{
        $(".atividade-direita").hide();
    
        if(contadorSelecaoEsquerda == 1 && ultimaAtividadeEsquerda == false){
            agua.show(); 
            atividade = "beber";
            contadorSelecaoDireita = 1;
        }
        if(contadorSelecaoEsquerda == 1 && ultimaAtividadeEsquerda == true){
            necessidades.hide();
            agua.show(); 
            atividade = "beber";
            contadorSelecaoDireita = 1;
        }
        if(contadorSelecaoEsquerda == 2){
            agua.hide(); 
            comparando.show();
            atividade = "comer";
            contadorSelecaoDireita = 2;
        }
        if(contadorSelecaoEsquerda == 3){
            comparando.hide();
            luz.show();
            atividade = "luz";
            contadorSelecaoDireita = 3;
        }
        if(contadorSelecaoEsquerda == 4){
            luz.hide(); 
            carinho.show(); 
            atividade = "carinho";
            contadorSelecaoDireita = 4;
        }
        if(contadorSelecaoEsquerda == 5){
            carinho.hide();
            necessidades.show();
            atividade = "necessidades";
            contadorSelecaoEsquerda -= 5;
            ultimaAtividadeEsquerda = true;
            contadorSelecaoDireita = 5;
        }
    
        contadorSelecaoEsquerda += 1;

    }
    
}

$(".selecao-esquerda").click(percorrerAtividadesDaEsquerda);  
















