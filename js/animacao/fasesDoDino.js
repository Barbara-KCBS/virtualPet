// Animação do Dino fase 1

var telaDinoFase1 = false;
var telaPrincipal = true;

const listaFrameDinoFase1 = [frameDinoFase1Movimento1, frameDinoFase1Movimento2, frameDinoFase1Movimento3, frameDinoFase1Movimento2, frameDinoFase1Movimento4];


function dinoFase1() {
    
    if(telaDinoFase1 === true){
       
        let contador = 0;
        const intervalo = setInterval(() => {
            if(telaPrincipal === false){
                clearInterval(intervalo);
                return
            }
            desligarTodosOsPixels();
            listaFrameDinoFase1[contador]();         
            
            contador ++;
            if(contador > 4){
                contador = 0;
            }

        }, 1000);
        
    } 
}

