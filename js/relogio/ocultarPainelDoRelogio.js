import { horaFramesDigito2, maisDeNoveHoras, minutosFramesDigito1, minutosFramesDigito2, painelDeHoras, primeiroPeriodo, segundoPeriodo, segundosFramesDigito1, segundosFramesDigito2 } from "./RelogioFrames.js";

var horaAtual;
var horaAtualDig1;
var horaAtualDig2;
var minutoAtualDig1;
var minutoAtualDig2;
var periodoAtual;
var doisPontosEntreHoraEMinutos;

function deslizarHoraAtualParaEsqueda(){
  horaAtual.removeClass("preto");
  horaAtual.prev().addClass("preto");
  horaAtual = horaAtual.prev().addClass("preto");
}

function deslizarHoraAtualDig1ParaEsqueda(){
  horaAtualDig1.removeClass("preto");
  horaAtualDig1.prev().addClass("preto");
  horaAtualDig1 = horaAtualDig1.prev().addClass("preto");
}

function deslizarHoraAtualDig2ParaEsqueda(){
  horaAtualDig2.removeClass("preto");
  horaAtualDig2.prev().addClass("preto");
  horaAtualDig2 = horaAtualDig2.prev().addClass("preto");
}

function deslizarMinutoAtualDig1ParaEsqueda(){
  minutoAtualDig1.removeClass("preto");
  minutoAtualDig1.prev().addClass("preto");
  minutoAtualDig1 = minutoAtualDig1.prev().addClass("preto");
}

function deslizarMinutoAtualDig2ParaEsqueda(){
  minutoAtualDig2.removeClass("preto");
  minutoAtualDig2.prev().addClass("preto");
  minutoAtualDig2 = minutoAtualDig2.prev().addClass("preto");
}

function deslizarPeriodoAtualParaEsqueda(){
  periodoAtual.removeClass("preto");
  periodoAtual.prev().addClass("preto");
  periodoAtual = periodoAtual.prev().addClass("preto");
}

function deslizarDoisPontosParaEsqueda(){
  doisPontosEntreHoraEMinutos.removeClass("preto");
  doisPontosEntreHoraEMinutos.prev().addClass("preto");
  doisPontosEntreHoraEMinutos = doisPontosEntreHoraEMinutos.prev().addClass("preto");
}



function ocultarPainelDoRelogio(){

    const data = new Date();
    const hora = data.getHours();
    const minutos = data.getMinutes();
  
    let horasString = String(hora).split('');
    // let horaDig1 = Number(horasString[0]);
    let horaDig2 = Number(horasString[1]);
  
    let minutosString = String(minutos).split('');
    let minutoDig1 = Number(minutosString[0]);
    let minutoDig2 = Number(minutosString[1]);
  
    doisPontosEntreHoraEMinutos = painelDeHoras;
  
    for(let i = 1; i < 19; i++){
      doisPontosEntreHoraEMinutos.removeClass("preto");
      doisPontosEntreHoraEMinutos = doisPontosEntreHoraEMinutos.next().addClass("preto");
    }  
    
    if(hora <= 11){ periodoAtual = primeiroPeriodo } else { periodoAtual = segundoPeriodo }
    
        for(let i = 1; i < 19; i++){
          periodoAtual.removeClass("preto");
          periodoAtual = periodoAtual.next().addClass("preto");
        }  
  
    if(horasString.length === 1){
        horaAtual = horaFramesDigito2[hora];
        for(let i = 1; i < 19; i++){
          horaAtual.removeClass("preto");
          horaAtual = horaAtual.next().addClass("preto");
        }
  
    }
  
    if(hora > 9 && hora <= 12){
      horaAtualDig1 = maisDeNoveHoras;
      horaAtualDig2 = horaFramesDigito2[horaDig2];
  
      for(let i = 1; i < 19; i++){
        horaAtualDig1.removeClass("preto");
        horaAtualDig1 = horaAtualDig1.next().addClass("preto");
        horaAtualDig2.removeClass("preto");
        horaAtualDig2 = horaAtualDig2.next().addClass("preto");
      }
  
    }
  
    if(hora > 12 && hora <= 21){
        horaAtual = horaFramesDigito2[hora - 12];
        for(let i = 1; i < 19; i++){
          horaAtual.removeClass("preto");
          horaAtual = horaAtual.next().addClass("preto");
        }  
        
    }
    
    if(hora > 21){ 
      horaAtualDig1 = maisDeNoveHoras;
      horaAtualDig2 = horaFramesDigito2[horaDig2 - 2];
  
      for(let i = 1; i < 19; i++){
        horaAtualDig1.removeClass("preto");
        horaAtualDig1 = horaAtualDig1.next().addClass("preto");
        horaAtualDig2.removeClass("preto");
        horaAtualDig2 = horaAtualDig2.next().addClass("preto");
      }
    }
    
    if(minutosString.length === 1){
      minutoAtualDig1 = minutosFramesDigito1[0];
      minutoAtualDig2 = minutosFramesDigito2[minutos];  
  
      for(let i = 1; i < 19; i++){
        minutoAtualDig1.removeClass("preto");
        minutoAtualDig1 = minutoAtualDig1.next().addClass("preto");
        minutoAtualDig2.removeClass("preto");
        minutoAtualDig2 = minutoAtualDig2.next().addClass("preto");
      }
  
    } else {
      minutoAtualDig1 = minutosFramesDigito1[minutoDig1];  
      minutoAtualDig2 = minutosFramesDigito2[minutoDig2];
  
      for(let i = 1; i < 19; i++){
        minutoAtualDig1.removeClass("preto");
        minutoAtualDig1 = minutoAtualDig1.next().addClass("preto");
        minutoAtualDig2.removeClass("preto");
        minutoAtualDig2 = minutoAtualDig2.next().addClass("preto");
      }
    }
  
  }

export { 
  ocultarPainelDoRelogio, 
  deslizarDoisPontosParaEsqueda, 
  deslizarPeriodoAtualParaEsqueda,
  deslizarMinutoAtualDig1ParaEsqueda,
  deslizarMinutoAtualDig2ParaEsqueda,
  deslizarHoraAtualDig1ParaEsqueda,
  deslizarHoraAtualDig2ParaEsqueda,
  deslizarHoraAtualParaEsqueda
}

export {
    horaAtual,
    horaAtualDig1,
    horaAtualDig2,
    minutoAtualDig1,
    minutoAtualDig2,
    periodoAtual,
    doisPontosEntreHoraEMinutos,
}
