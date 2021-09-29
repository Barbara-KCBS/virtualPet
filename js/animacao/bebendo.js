const listaDeFramesAgua = [aguaFrame1, aguaFrame2, aguaFrame3, aguaFrame4, aguaFrame5, aguaFrame6, aguaFrame7];

var bebida = 0;

function beberAgua(){
    bebida += 1;
    let contadorAgua = 0;
    var intervaloBebida = setInterval(() =>{
        
        if(contadorAgua < 6){
            listaDeFramesAgua[contadorAgua]();
        }
        
        if(contadorAgua === 6){
            listaDeFramesAgua[contadorAgua]();
            clearInterval(intervaloBebida);
            dinoArrotando(dinoFase1);
            return
        }
   
        contadorAgua += 1;

    }, 1050);
}



