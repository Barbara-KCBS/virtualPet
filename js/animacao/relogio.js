const horaFramesDigito2 = [zeroHora, umaHora, duasHoras, tresHoras, quatroHoras, cincoHoras, seisHoras, seteHoras, oitoHoras, noveHoras];

const minutosFramesDigito1 = [minutoZeroDig1, minutoUmDig1, minutoDoisDig1, minutoTresDig1, minutoQuatroDig1, minutoCincoDig1];
const minutosFramesDigito2 = [minutoZeroDig2, minutoUmDig2, minutoDoisDig2, minutoTresDig2, minutoQuatroDig2, minutoCincoDig2, minutoSeisDig2, minutoSeteDig2, minutoOitoDig2, minutoNoveDig2];

const segundosFramesDigito1 = [segundosZeroDig1, segundosUmDig1, segundosDoisDig1, segundosTresDig1, segundosQuatroDig1, segundosCincoDig1];

const segundosFramesDigito2 = [segundosZeroDig2, segundosUmDig2, segundosDoisDig2, segundosTresDig2, segundosQuatroDig2, segundosCincoDig2, segundosSeisDig2, segundosSeteDig2, segundosOitoDig2, segundosNoveDig2];


var horaAtual;
var horaAtualDig1;
var horaAtualDig2;
var minutoAtualDig1;
var minutoAtualDig2;
var segundoAtualDig1;
var segundoAtualDig2;
var periodoAtual;
var doisPontosEntreHoraEMinutos;
var mostrarRelogio = true;
var pararRelogio = false;

function ocultarPainelDoRelogio(){

  const data = new Date();
  const hora = data.getHours();
  const minutos = data.getMinutes();

  let horasString = String(hora).split('');
  let horaDig1 = Number(horasString[0]);
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
    minutoAtualDig1 = minutoZeroDig1;
    minutoAtualDig2 = minutosFramesDigito2[minutos];  

    for(let i = 1; i < 19; i++){
      minutoAtualDig1.removeClass("preto");
      minutoAtualDig1 = minutoAtualDig1.next().addClass("preto");
      minutoAtualDig2.removeClass("preto");
      minutoAtualDig2 = minutoAtualDig2.next().addClass("preto");
    }

  } else {
    console.log("entrou aqui 2")
    minutoAtualDig1 = minutosFramesDigito1[minutoDig1];  
    minutoAtualDig2 = minutosFramesDigito2[minutoDig2];

    for(let i = 1; i < 19; i++){
      minutoAtualDig1.removeClass("preto");
      minutoAtualDig1 = minutoAtualDig1.next().addClass("preto");
      minutoAtualDig2.removeClass("preto");
      minutoAtualDig2 = minutoAtualDig2.next().addClass("preto");
    }
  }

};


function deslizarPainelDoRelogioParaEsquerda(){
  const data = new Date();
  const hora = data.getHours();

  let horasString = String(hora).split('');

  frameAtualTelaPrincipal.removeClass("preto");
  frameAtualTelaPrincipal.prev().addClass("preto");
  frameAtualTelaPrincipal = frameAtualTelaPrincipal.prev().addClass("preto");

  doisPontosEntreHoraEMinutos.removeClass("preto");
  doisPontosEntreHoraEMinutos.prev().addClass("preto");
  doisPontosEntreHoraEMinutos = doisPontosEntreHoraEMinutos.prev().addClass("preto");
  
     periodoAtual.removeClass("preto");
     periodoAtual.prev().addClass("preto");
     periodoAtual = periodoAtual.prev().addClass("preto");

  if(horasString.length === 1 || hora > 12 && hora <= 21){
     horaAtual.removeClass("preto");
     horaAtual.prev().addClass("preto");
     horaAtual = horaAtual.prev().addClass("preto");
  }

  if(hora > 9 && hora <= 12 || hora > 21){
    horaAtualDig1.removeClass("preto");
    horaAtualDig1.prev().addClass("preto");
    horaAtualDig1 = horaAtualDig1.prev().addClass("preto");
    horaAtualDig2.removeClass("preto");
    horaAtualDig2.prev().addClass("preto");
    horaAtualDig2 = horaAtualDig2.prev().addClass("preto");

  }

    minutoAtualDig1.removeClass("preto");
    minutoAtualDig1.prev().addClass("preto");
    minutoAtualDig1 = minutoAtualDig1.prev().addClass("preto");
    minutoAtualDig2.removeClass("preto");
    minutoAtualDig2.prev().addClass("preto");
    minutoAtualDig2 = minutoAtualDig2.prev().addClass("preto");


}


function painelDoRelogio(){

  const relogioIntervalo = setInterval(()=>{

    if(pararRelogio === true){
      clearInterval(relogioIntervalo);
      pararRelogio = false;
      return
    }

    const data = new Date();
    const hora = data.getHours();
    const minutos = data.getMinutes();
    const segundos = data.getSeconds();

    let horasString = String(hora).split('');
    let horaDig1 = Number(horasString[0]);
    let horaDig2 = Number(horasString[1]);

    let minutosString = String(minutos).split('');
    let minutoDig1 = Number(minutosString[0]);
    let minutoDig2 = Number(minutosString[1]);

    let segundosString = String(segundos).split('');
    let segundoDig1 = Number(segundosString[0]);
    let segundoDig2 = Number(segundosString[1]);
    
    desligarPixelsHoraDig2.removeClass("preto");
    maisDeNoveHoras.removeClass("preto");

    desligarPixelsMinutosDig1.removeClass("preto");
    desligarPixelsMinutosDig2.removeClass("preto");

    desligarPixelsSegundosDig1.removeClass("preto");
    desligarPixelsSegundosDig2.removeClass("preto");

    if(hora <= 11){ primeiroPeriodo.addClass("preto") } else { segundoPeriodo.addClass("preto") };

   
    if(horasString.length === 1){
      horaFramesDigito2[hora].addClass("preto");
    }

    if(hora > 9 && hora <= 12){
      maisDeNoveHoras.addClass("preto");
      horaFramesDigito2[horaDig2].addClass("preto");
    }

    if(hora > 12 && hora <= 21){
      horaFramesDigito2[hora - 12].addClass("preto");
    }

    if(hora > 21){ 
      maisDeNoveHoras.addClass("preto");
      horaFramesDigito2[horaDig2 - 2].addClass("preto");
    }
    
    if(minutosString.length === 1){
      minutoZeroDig1.addClass("preto");  
      minutosFramesDigito2[minutos].addClass("preto");  
    } else {
      minutosFramesDigito1[minutoDig1].addClass("preto");  
      minutosFramesDigito2[minutoDig2].addClass("preto");  
    }

    if(segundosString.length === 1){
      segundosZeroDig1.addClass("preto");
      segundosFramesDigito2[segundos].addClass("preto");  
    } else {
      segundosFramesDigito1[segundoDig1].addClass("preto");  
      segundosFramesDigito2[segundoDig2].addClass("preto");  
    }
  }, 1000)

}

function mostrarPainelDoRelogio(){
    telaPrincipal = false;
    ocultarPainelDoRelogio();
    let contador = 0;
    const intervalo = setInterval(()=>{
       deslizarPainelDoRelogioParaEsquerda();
       contador++;
       if(contador === 18){
         clearInterval(intervalo);
         painelDoRelogio();
         return
       }
    }, 150);
}

$("#clock").click(()=>{
  if(mostrarRelogio === true){
    mostrarPainelDoRelogio();
    mostrarRelogio = false;
  } else {
    pararRelogio = true;
    
    telaInicial(dinoFase1);
    mostrarRelogio = true;
  }
});



