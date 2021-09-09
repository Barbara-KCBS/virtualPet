$("#iniciar-jogo").click(comecarJogo);

if(eventoSelecaoEsquerda == true){
  $(".selecao-esquerda").click(selecaoEsquerda);  
}

$("#enter").click(()=>{
   
    if(atividade == "beber"){
        beberAgua();
    }
    if(atividade == "comer"){
        clearInterval(intervaloBebe);
        $(".pixel").removeClass("preto");
        hamburguer()
        $(".selecao-esquerda").click(opcaoDeComida); 
        eventoSelecaoEsquerda = false;   
    }
 })
 
 







