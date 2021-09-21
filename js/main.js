
$("#iniciar-jogo").click(comecarJogo);

$("#enter").click(comerHamburguer);
$("#enter").click(comerMacarrao);
$("#enter").click(comerSorvete);
$("#enter").click(comerCenoura);
$("#enter").click(comerMaca);
$("#enter").click(comerCoxa);

$("#enter").click(selecaoDeAtividade);


var enterSelecao = true;

function habilitarEventosIniciais(valor){
    eventoSelecaoEsquerda = valor;
    eventoSelecaoDireita = valor;
    enterSelecao = valor;
}


function selecaoDeAtividade(){

    if(enterSelecao == false){
        return
    }

    if(atividade === "beber"){
        habilitarEventosIniciais(false);
        beberAgua();
    }
    if(atividade === "comer"){
        habilitarEventosIniciais(false);
        mostrarComida = true;
        percorrerComida = true;
        contadorComida = 1;
        clearInterval(intervaloBebe);
        $(".pixel").removeClass("preto");
        opcoesDeComida();
    }    
    if(atividade === "carinho"){
        habilitarEventosIniciais(false);;
        dinoCarinho();
    }

    if(atividade == "necessidades"){
        habilitarEventosIniciais(false);;
        mostrarNecessidade = true;
        contadorNecessidades = 1;
        clearInterval(intervaloBebe);
        $(".pixel").removeClass("preto");
        necessidadesDoDino();
    }
    if(atividade == "luz"){
        habilitarEventosIniciais(false);;
        telaLuzOn = true;
        tempoDeTelaLuzOn = true;
        enterLuz = true;
        clearInterval(intervaloBebe);
        luzOpcaoOn();
    }
    if(atividade === "estudar"){
        habilitarEventosIniciais(false);;
        dinoEstudando();
    }
    if(atividade === "brincar"){
        habilitarEventosIniciais(false);
        mostrarJogo = true;
        percorrerJogo = true;
        contadorJogor = 1;
        clearInterval(intervaloBebe);
        $(".pixel").removeClass("preto");
        escolhaDoJogador();
    }   
    if(atividade === "banhar"){
        habilitarEventosIniciais(false);;
        banharDino();
    } 
}

   













