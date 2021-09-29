
$("#iniciar-jogo").click(function (){
    $(this).fadeOut(1000);
    chocarOvo();
});

$("#enter").click(selecaoDeAtividade);


var enterSelecao = true;

function habilitarEventosIniciais(valorBoleano){
    telaPrincipal = valorBoleano;
    eventoSelecaoEsquerda = valorBoleano;
    eventoSelecaoDireita = valorBoleano;
    enterSelecao = valorBoleano;
}

function desligarTodosOsPixels(){
    $(".pixel").removeClass("preto");
    
}

function selecaoDeAtividade(){

    if(enterSelecao === true){

        habilitarEventosIniciais(false);

        if(atividade === "beber"){
            beberAgua();
        }
        if(atividade === "comer"){
            mostrarComida = true;
            percorrerComida = true;
            iniciarIntervaloComida = true;
            opcoesDeComida();
        }    
        if(atividade === "carinho"){
            dinoCarinho();
        }

        if(atividade == "necessidades"){
            mostrarNecessidade = true;
            percorrerNecessidades = true;
            iniciarIntervaloNecessidades = true;
            necessidadesDoDino();
        }

        if(atividade == "luz"){
            botaoEsquerdoLuzOn = true;
            mostrarPainelDeLuz = true;
            painelDeLuz();
        }

        if(atividade === "estudar"){
            dinoEstudando();
        }

        if(atividade === "brincar"){
            mostrarJogo = true;
            percorrerOpcoesDeLance = true;
            iniciarJogo = true;
            iniciarIntervaloDoJogo = true;
            escolhaDoJogador();
        }   

        if(atividade === "banhar"){
            banharDino();
        } 

        if(atividade === "ar-condicionado"){
            mostrarPainelDeArCondicionado = true;
            painelDeArCondicionado();
        }

        if(atividade === "medicar"){
            medicarDino();
        } 

  } 
}

   













