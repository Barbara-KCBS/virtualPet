var brincadeira = $("#brincadeira").toggle()
var estudo = $("#estudo").toggle()
var banho = $("#banho").toggle()
var ar = $("#ar").toggle()
var medico = $("#medico").toggle()

var compararOpcao1 = 1;
var compararOpcao2 = false;

var atividade;

function selecaoDireita(){
    
    if(compararOpcao1 == 1 && compararOpcao2 == false){
        brincadeira.toggle(); 
        atividade = "brincar";
    }
    if(compararOpcao1 == 1 && compararOpcao2 == true){
        medico.toggle();
        brincadeira.toggle(); 
        atividade = "brincar";
    }
    if(compararOpcao1 == 2){
        brincadeira.toggle(); 
        estudo.toggle();
        atividade = "estudar";
    }
    if(compararOpcao1 == 3){
        estudo.toggle();
        banho.toggle();
    }
    if(compararOpcao1 == 4){
        banho.toggle(); 
        ar.toggle(); 
    }
    if(compararOpcao1 == 5){
        ar.toggle();
        medico.toggle();
        compararOpcao1 -= 5;
        compararOpcao2 = true;
    }

    compararOpcao1 += 1;
}
$(".selecao-direita").click(selecaoDireita);

// $("#enter").click(()=>{
//     if(atividade == "beber"){
//         beberAgua();
//     }
//     if(atividade == "comer"){
//         comerHamburguer();
//     }
// })










