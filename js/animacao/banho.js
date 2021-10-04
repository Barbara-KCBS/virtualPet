const banhoDinoFase1Frames = [banhoDinoFase1Frame1, banhoDinoFase1Frame2, banhoDinoFase1Frame1, banhoDinoFase1Frame3]

function banharDino(){

    let contador = 0;

    var intervaloBanho = setInterval(() =>{
        
        if(contador < 4){
            banhoDinoFase1Frames[contador]();
        }
        if(contador === 4){
            clearInterval(intervaloBanho);
            dinoFeliz();
        }
      
        contador ++;

    }, 1500);
}
