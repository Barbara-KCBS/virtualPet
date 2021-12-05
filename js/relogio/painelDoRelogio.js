import { telaPrincipal } from "../animacao/dinoFase1Animacao.js";
import { relogio, relogioNaTela } from "../funcoesDosBotoes/clock.js";
import { desligarPixelsHoraDig2, desligarPixelsMinutosDig1, desligarPixelsMinutosDig2, desligarPixelsSegundosDig1, desligarPixelsSegundosDig2, horaFramesDigito2, maisDeNoveHoras, minutosFramesDigito1, minutosFramesDigito2, primeiroPeriodo, segundoPeriodo, segundosFramesDigito1, segundosFramesDigito2 } from "../relogio/RelogioFrames.js";


function painelDoRelogio(){
    const intervalo = setInterval(()=>{
      if(telaPrincipal){
        clearInterval(intervalo);
        return;
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
        minutosFramesDigito1[0].addClass("preto");  
        minutosFramesDigito2[minutos].addClass("preto");  
      } else {
        minutosFramesDigito1[minutoDig1].addClass("preto");  
        minutosFramesDigito2[minutoDig2].addClass("preto");  
      }
  
      if(segundosString.length === 1){
        segundosFramesDigito1[0].addClass("preto");
        segundosFramesDigito2[segundos].addClass("preto");  
      } else {
        segundosFramesDigito1[segundoDig1].addClass("preto");  
        segundosFramesDigito2[segundoDig2].addClass("preto");  
      }
      relogioNaTela(true);
    }, 1000)
  
  } 

  export { painelDoRelogio }