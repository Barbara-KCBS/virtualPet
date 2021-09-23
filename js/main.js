
$("#iniciar-jogo").click(()=>{
    $("#iniciar-jogo").fadeOut(1000);
    chocarOvo();
});

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
        telaDinoBebe = false;
        habilitarEventosIniciais(false);
        beberAgua();
    }
    if(atividade === "comer"){
        telaDinoBebe = false;
        habilitarEventosIniciais(false);
        mostrarComida = true;
        percorrerComida = true;
        iniciarIntervaloComida = true;
        opcoesDeComida();
    }    
    if(atividade === "carinho"){
        telaDinoBebe = false;
        habilitarEventosIniciais(false);
        dinoCarinho();
    }

    if(atividade == "necessidades"){
        telaDinoBebe = false;
        habilitarEventosIniciais(false);;
        mostrarNecessidade = true;
        percorrerNecessidades = true;
        iniciarIntervaloNecessidades = true;
        necessidadesDoDino();
    }

    if(atividade == "luz"){
        telaDinoBebe = false;
        habilitarEventosIniciais(false);;
        botaoEsquerdoLuzOn = true;
        mostrarPainelDeLuz = true;
        painelDeLuz();
    }

    if(atividade === "estudar"){
        telaDinoBebe = false;
        habilitarEventosIniciais(false);;
        dinoEstudando();
    }

    if(atividade === "brincar"){
        telaDinoBebe = false;
        habilitarEventosIniciais(false);
        mostrarJogo = true;
        percorrerOpcoesDeLance = true;
        iniciarJogo = true;
        iniciarIntervaloDoJogo = true;
        desligarTodosOsPixels();
        escolhaDoJogador();
    }   

    if(atividade === "banhar"){
        telaDinoBebe = false;
        habilitarEventosIniciais(false);
        banharDino();
    } 

    if(atividade === "ar-condicionado"){
        telaDinoBebe = false;
        habilitarEventosIniciais(false);
        mostrarPainelDeArCondicionado = true;
        painelDeArCondicionado();
    }

    if(atividade === "medicar"){
        telaDinoBebe = false;
        habilitarEventosIniciais(false);;
        medicarDino();
    } 
}

   













