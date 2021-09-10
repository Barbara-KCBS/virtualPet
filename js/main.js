
$("#iniciar-jogo").click(comecarJogo);

$(".selecao-esquerda").click(percorrerAtividadesDaEsquerda);  

$(".selecao-esquerda").click(percorrerOpcoesDeComida);

$("#enter").click(comerHamburguer);

$("#enter").click(selecaoDeAtividade);

var enterSelecao = true;


function selecaoDeAtividade(){

    if(enterSelecao == false){
        return
    }

    if(atividade == "beber"){
        beberAgua();
    }
    if(atividade == "comer"){
        eventoSelecaoEsquerda = false;
        mostrarComida = true;
        contadorComida = 1;
        clearInterval(intervaloBebe);
        $(".pixel").removeClass("preto");
        opcoesDeComida();
        enterHambuguer = true;
    }  
          
}

   













