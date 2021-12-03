// import { dinoFase1Feliz } from "../animacao/dinoFase1FelizAnimacao.js";
// import { dinoFase1Raiva } from "../animacao/dinoFase1RaivaAnimacao.js";
// import { alterarContadorIntervaloSemInteracao, intervaloSemInteracao, pararIntervaloSemInteracao } from "../principal/intervaloSemInteracao.js";
// import { inicioDoJogo, lancesDoJogadorFrames, lancesDoDinoFrames } from "./jogoJokenpoFrames.js";

// var lanceDoDino = "";
// var pontosDoDino = 0;
// var pontosDoJogador = 0;
// var rodadas = 0;
// var lanceDoJogador = "papel";
// var dinoVenceu; 
// var tiposDeLance = ["papel", "pedra", "tesoura"];
// var lanceAtualDoJogador;
// var vezDoJogador = false;
// var contadorLanceDoJogador = 0;
// var estaDentroDoJogo = false;

// function entrarNoJogo(boleano){
//     estaDentroDoJogo = boleano;
// }

// function alterarContadorLanceDoJogador(valor){
//     contadorLanceDoJogador = valor;
// }

// function resultadoDosLances(){
//     if(dinoVenceu){
//         dinoFase1Feliz();
//     } else {
//         dinoFase1Raiva();
//     }   
// }

// function mostrarlanceDoDino(){
//     pararIntervaloSemInteracao(true);
//     vezDoJogador = false;
//     let indiceAleatorio = Math.floor(Math.random() * 3);
//     lanceDoDino = tiposDeLance[indiceAleatorio];
//     let contador = 0;
//     const intervalo = setInterval(()=>{
//         if(contador == 0){
//            $(".pixel").removeClass("preto");
//            lancesDoDinoFrames[indiceAleatorio].toggleClass("preto");  
//         }
//         if(contador == 1){
//             lanceAtualDoJogador.toggleClass("preto");   
//         }
//         if(contador == 2){
//             clearInterval(intervalo);
//             compararLances();
//         }
//         contador++;
//     }, 1500)
    
// }
// function escolherLanceDoJogador(){
//     vezDoJogador = true;
//     alterarContadorIntervaloSemInteracao(0);
//     $(".pixel").removeClass("preto");
//     lanceAtualDoJogador = lancesDoJogadorFrames[contadorLanceDoJogador]
//     lanceAtualDoJogador.toggleClass("preto");
//     lanceDoJogador = tiposDeLance[contadorLanceDoJogador];
// }

// function iniciarJokenpo(){
//     let contador = 0;
//     const intervalo = setInterval(()=>{
//         console.log("contador iniciar " + contador)
//         if((contador == 3 || estaDentroDoJogo) && rodadas < 5){
//             clearInterval(intervalo);
//             pararIntervaloSemInteracao(false);
//             intervaloSemInteracao();
//             contadorLanceDoJogador = 0;
//             escolherLanceDoJogador();           
//             return
//         } 
//         if(!estaDentroDoJogo || rodadas == 5){
//             $(".pixel").removeClass("preto");
//             inicioDoJogo.addClass("preto");
            
//         }  
//         if(contador == 2 && rodadas < 5){
//             estaDentroDoJogo = true;
//         }
//         if(contador == 3 && rodadas == 5){
//             clearInterval(intervalo);
//             estaDentroDoJogo = true;
//             if(pontosDoDino > pontosDoJogador){
//                 dinoFase1Feliz();
//             } else {
//                 dinoFase1Raiva();
//             }
//             rodadas = 0;
//             return
//         }
//         contador++;
//     }, 1000)
// }


// function compararLances(){
//     rodadas++;
//     if((lanceDoJogador === "papel" && lanceDoDino === "tesoura") || (lanceDoJogador === "pedra" && lanceDoDino === "papel") || (lanceDoJogador === "tesoura" && lanceDoDino === "pedra")){
//         dinoVenceu = true;
//         resultadoDosLances();
//         pontosDoDino++;
//     }

//     //dino não venceu
//     if(lanceDoJogador === lanceDoDino){
//         dinoVenceu = false;
//         resultadoDosLances();
//     }

//     if((lanceDoJogador === "papel" && lanceDoDino === "pedra") || (lanceDoJogador === "pedra" && lanceDoDino === "tesoura") || (lanceDoJogador === "tesoura" && lanceDoDino === "papel")){
//         dinoVenceu = false;
//         resultadoDosLances();
//         pontosDoJogador++;
    
//     }
// }




// export { iniciarJokenpo, 
//     estaDentroDoJogo, 
//     entrarNoJogo, 
//     escolherLanceDoJogador, 
//     contadorLanceDoJogador, 
//     alterarContadorLanceDoJogador, 
//     mostrarlanceDoDino,
//     vezDoJogador
// }
