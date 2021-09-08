var agua = $("#agua").toggle()
var comida = $("#comida").toggle()
var luz = $("#luz").toggle()
var carinho = $("#carinho").toggle()
var necessidades = $("#necessidades").toggle()

var compararOpcao1 = 1;
var compararOpcao2 = false;

var atividade;

function selecaoEsquerda(){
    
    if(compararOpcao1 == 1 && compararOpcao2 == false){
        agua.toggle(); 
        atividade = "beber";
    }
    if(compararOpcao1 == 1 && compararOpcao2 == true){
        necessidades.toggle();
        agua.toggle(); 
        atividade = "beber";
    }
    if(compararOpcao1 == 2){
        agua.toggle(); 
        comida.toggle();
        atividade = "comer";
    }
    if(compararOpcao1 == 3){
        comida.toggle();
        luz.toggle();
    }
    if(compararOpcao1 == 4){
        luz.toggle(); 
        carinho.toggle(); 
    }
    if(compararOpcao1 == 5){
        carinho.toggle();
        necessidades.toggle();
        compararOpcao1 -= 5;
        compararOpcao2 = true;
    }

    compararOpcao1 += 1;
}
$(".selecao-esquerda").click(selecaoEsquerda);

$("#enter").click(()=>{
    if(atividade == "beber"){
        beberAgua();
    }
    if(atividade == "comer"){
        comerHamburguer();
    }
})










