// comendo cenoura
const listaFrameHamburguer = [hamburguerFrame1, hamburguerFrame2, hamburguerFrame3, hamburguerFrame4];

const listaFrameCenoura = [cenouraFrame1, cenouraFrame2, cenouraFrame3, cenouraFrame4];

const listaFrameMaca = [macaFrame1, macaFrame2, macaFrame3];

const listaFrameCoxa = [coxaFrame1, coxaFrame2, coxaFrame3, coxaFrame4];

const listaFrameSorvete = [sorveteFrame1, sorveteFrame2, sorveteFrame3, sorveteFrame4];

const listaFrameMacarrao = [macarraoFrame1, macarraoFrame2,  macarraoFrame2, macarraoFrame2];

function comer(lista){

    if(quantidadeDeComida === 4){
        contadorIntervaloComida = 0;
        dinoNaoQuer(lista[0]);
    }

    else{

    quantidadeDeComida ++;

    let contador = 1;  
    let repetir = true;
    
    const intervalo = setInterval(() =>{
      
        if(contador < lista.length){
            lista[contador]();
        }

        if(contador === lista.length && repetir === true){
            lista[0]();
            contador = 0;
            repetir = false;
        }

        if(contador === lista.length - 1 && repetir== false){
            clearInterval(intervalo);
            dinoArrotando(voltarParaOpcoesDeComida);
            return
        }
       
        contador ++;

    }, 1000);
  } 
}





















