
$("#iniciar-jogo").click(comecarJogo);

$("#enter").click(comerHamburguer);
$("#enter").click(comerMacarrao);
$("#enter").click(comerSorvete);
$("#enter").click(comerCenoura);
$("#enter").click(comerMaca);
$("#enter").click(comerCoxa);

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

    if(atividade == "necessidades"){
        eventoSelecaoEsquerda = false;
        mostrarNecessidade = true;
        contadorNecessidades = 1;
        clearInterval(intervaloBebe);
        $(".pixel").removeClass("preto");
        necessidadesDoDino();
        enterSelecao = false;
    }
    if(atividade == "luz"){
        eventoSelecaoEsquerda = false;
        eventoSelecaoDireita = false;
        enterSelecao = false;
        telaLuzOn = true;
        tempoDeTelaLuzOn = true;
        enterLuz = true;
        clearInterval(intervaloBebe);
        luzOpcaoOn();
    }
}

   













