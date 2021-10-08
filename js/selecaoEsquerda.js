
var agua = $("#agua");
var comida = $("#comida");
var luz = $("#luz");
var carinho = $("#carinho");
var necessidades = $("#necessidades");

$(".atividade-esquerda").hide();

var contadorSelecaoEsquerda = 0;
var eventoSelecaoEsquerda = true;

var atividade = "";

const listaSelecaoEsquerda = [agua, comida, luz, carinho, necessidades];
const atividadesDoLadoEsquerdo = ["beber", "comer", "luz", "carinho", "necessidades"];

function selecaoEsquerda(){
    
    if(eventoSelecaoEsquerda === true){
  
        $(".atividade-direita").hide();

        if(contadorSelecaoEsquerda === listaSelecaoEsquerda.length){
            listaSelecaoEsquerda[4].hide();
            contadorSelecaoEsquerda = 0;
        }

        listaSelecaoEsquerda[contadorSelecaoEsquerda].parent().prev().children().hide();
        listaSelecaoEsquerda[contadorSelecaoEsquerda].show();
        contadorSelecaoDireita = contadorSelecaoEsquerda;
        atividade = atividadesDoLadoEsquerdo[contadorSelecaoEsquerda];

        contadorSelecaoEsquerda ++;
    }   
}

$(".selecao-esquerda").click(selecaoEsquerda);  

















