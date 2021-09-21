
$("#iniciar-jogo").click(chocarOvo);

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

function desligarTodosOsPixels(){
    $(".pixel").removeClass("preto");
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
        iniciarIntervaloComida = true;
        clearInterval(intervaloBebe);
        desligarTodosOsPixels()
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
        iniciarIntervaloNecessidades = true;
        clearInterval(intervaloBebe);
        desligarTodosOsPixels()
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
        desligarTodosOsPixels()
        escolhaDoJogador();
    }   

    if(atividade === "banhar"){
        habilitarEventosIniciais(false);;
        banharDino();
    } 

    if(atividade === "medicar"){
        habilitarEventosIniciais(false);;
        medicarDino();
    } 
}

   













