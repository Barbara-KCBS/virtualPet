
$("#iniciar-jogo").click(comecarJogo);

$(".selecao-esquerda").click(percorrerAtividadesDaEsquerda);  

$(".selecao-esquerda").click(percorrerOpcoesDeComida);

$("#enter").click(comerHamburguer);

$("#enter").click(comerMacarrao);

$("#enter").click(comerCoxa);

$("#enter").click(comerSorvete);

$("#enter").click(comerCenoura);

$("#enter").click(comerMaca);

$("#enter").click(selecaoDeAtividade);

var enterSelecao = true;


function selecaoDeAtividade(){

    if(enterSelecao == false){
        return
    }

    if(atividade === "beber"){
        beberAgua();
    }
    if(atividade === "comer"){
        eventoSelecaoEsquerda = false;
        mostrarComida = true;
        contadorComida = 1;
        clearInterval(intervaloBebe);
        $(".pixel").removeClass("preto");
        opcoesDeComida();
        enterSelecao = false;
    }    
    if(atividade === "carinho"){
        dinoCarinho();
    }
}

   













