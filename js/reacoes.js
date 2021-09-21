function arrotarFrame(){
    $(".M06, .M07, .M12, .L08, .L09, .L10, .L11, .K04, .K15, .M04, .N07,.N07, .N08,.N09,.N10,.N11,.N12, .M15, .M13").toggleClass("preto");
}

function dinoBebeRaiva(){
    $(".B16, .B17, .C16, .C17, .D15, .F13, .G08,.G09,.G10,.G11,.H07,.H12,.I06,.I13,.J06,.J08,.J09, .J10, .J11,.J13,.K06,.K13,.L06,.L13,.M07,.M08,.M09,.M10,.M11,.M12").toggleClass("preto"); 
 }
    
 function dinoBebeFeliz(){
     $(".C09, .D06, .D13, .F08,.F09,.F10,.F11,.G03, .G07,.G12, .G16, .H06, .H13, .I06, .I08,.I11, .I13,.J06,.J13,.K06,.K13,.L06,.L13,.M07,.M08,.M09,.M10,.M11,.M12").toggleClass("preto");	
 }


 function dinoFeliz(){

    contadorFelicidade = 1;

    const intervaloFelicidade = setInterval(()=>{
        if(contadorFelicidade === 1 || contadorFelicidade === 3){
            $(".pixel").removeClass("preto");
            frameBebeMovimento1();
        }
        if(contadorFelicidade === 2 || contadorFelicidade === 4){
            frameBebeMovimento1();
            dinoBebeFeliz();
        }
        if(contadorFelicidade === 5 && luzDesligada === false){
            clearInterval(intervaloFelicidade);
            telaInicial();      
        }  
        if(contadorFelicidade === 5 && luzDesligada === true){
            clearInterval(intervaloFelicidade);
            telaInicialApagada(); 
    
        }  

        contadorFelicidade += 1;
    }, 1000);
}