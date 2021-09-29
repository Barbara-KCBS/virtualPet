const listaFrameChocarOvo = [chocarOvoFrame1, chocarOvoFrame2, chocarOvoFrame3, chocarOvoFrame4, chocarOvoFrame5, chocarOvoFrame6, chocarOvoFrame7, chocarOvoFrame8, chocarOvoFrame9, chocarOvoFrame10, chocarOvoFrame11, chocarOvoFrame12, chocarOvoFrame13, chocarOvoFrame14, chocarOvoFrame15, chocarOvoFrame16, chocarOvoFrame17, chocarOvoFrame18, chocarOvoFrame19, chocarOvoFrame20];


function chocarOvo(){
    habilitarEventosIniciais(false);

    let contador = 0;

    const intervalo = setInterval(()=>{
        if(contador <= 9){
           listaFrameChocarOvo[contador](); 
        }
        if(contador === 10){
            listaFrameChocarOvo[10]();
        }
        if(contador > 10 && contador <= 14 || contador > 18 && contador <= 22){
            listaFrameChocarOvo[11]();
        }
        if(contador > 14 && contador <= 18 || contador > 22 && contador <= 26){
            listaFrameChocarOvo[11]();
            listaFrameChocarOvo[12]();
        }
        if(contador === 27){
            listaFrameChocarOvo[11]();
            listaFrameChocarOvo[12]();
            listaFrameChocarOvo[13](); 
        }
        if(contador > 27 && contador <= 33){
            listaFrameChocarOvo[(contador - 14)](); 
        }
        if(contador === 34){
            clearInterval(intervalo);
            telaDinoFase1 = true;
            telaInicial(dinoFase1);
        }

        contador ++;

    }, 50);    
    
}
