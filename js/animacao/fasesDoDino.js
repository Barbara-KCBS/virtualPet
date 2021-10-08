// Animação do Dino fase 1

var telaDinoFase1 = false;
var telaPrincipal = true;

const listaFrameDinoFase1 = [dinoFase1FrameMovimento1 , dinoFase1FrameMovimento2, dinoFase1FrameMovimento3, dinoFase1FrameMovimento2, dinoFase1FrameMovimento4];

var frameAtualTelaPrincipal;

function dinoFase1() {
    
    if(telaDinoFase1 === true){
       
        let contador = 0;
        const intervalo = setInterval(() => {
            if(telaPrincipal === false){
                clearInterval(intervalo);
                return
            }
            desligarTodosOsPixels();
            frameAtualTelaPrincipal = listaFrameDinoFase1[contador].addClass("preto");         
            
            contador ++;
            if(contador > 4){
                contador = 0;
            }

        }, 1000);
        
    } 
}

