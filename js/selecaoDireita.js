var brincadeira = $("#brincadeira");
var estudo = $("#estudo");
var banho = $("#banho");
var ar= $("#ar");
var medico= $("#medico");

$(".atividade-direita").hide();

var contadorSelecaoDireita = 0;
var ultimaAtividadeDireita = false;


var eventoSelecaoDireita = true;

const listaSelecaoDireita = [brincadeira, estudo, banho, ar, medico];
const atividadesDoLadoDireito = ["brincar", "estudar", "banhar", "ar-condicionado", "medicar"];

function selecaoDireita(){
    
    if(eventoSelecaoDireita === true){

        $(".atividade-esquerda").hide();

        if(contadorSelecaoDireita === listaSelecaoDireita.length){
            listaSelecaoDireita[4].hide();
            contadorSelecaoDireita = 0;
        }

        listaSelecaoDireita[contadorSelecaoDireita].parent().prev().children().hide();
        listaSelecaoDireita[contadorSelecaoDireita].show();
        contadorSelecaoEsquerda = contadorSelecaoDireita;
        atividade = atividadesDoLadoDireito[contadorSelecaoDireita];

        contadorSelecaoDireita ++;

    }    
}

$(".selecao-direita").click(selecaoDireita);











