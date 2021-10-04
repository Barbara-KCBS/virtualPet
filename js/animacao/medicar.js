const injecaoDinoFase1Frames = [injecaoDinoFase1Frame1, injecaoDinoFase1Frame2, injecaoDinoFase1Frame3,  injecaoDinoFase1Frame4];

 function medicarDino(){

    let contador = 0;

    const intervaloMedicar = setInterval(() =>{
        if(contador < 4){         
            injecaoDinoFase1Frames[contador]();
        }
        if(contador === 4){
            clearInterval(intervaloMedicar);
            telaInicial(dinoFase1);
        }
      
        contador ++;

    }, 1500);
}