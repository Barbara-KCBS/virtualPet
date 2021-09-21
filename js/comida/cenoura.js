function cenouraFrame1(){
    $(".A09, .A10, .A11, .B05, .B06, .B09, .B10, .B11, .B13, .B14, .C05, .C06, .C07, .C09, .C10, .C13, .C14, .D06, .D07, .D08, .D10, .D12, .E08, .E09, .E10, .E11, .F07, .F12, .G06, .G13, .H06, .H10, .H11, .H12, .H13, .I06, .I13, .J06, .J11, .J12, .J13, .K06, .K13, .L06, .L07, .L08, .L13, .M06, .M12, .M13, .N07, .N12, .O08, .O11, .P09, .P10").toggleClass("preto");
}

function cenouraFrame2(){
    $(".K06, .K07, .L06, .L07, .L09, .M06, .M10, .M11, .M13, .N07, .N12, .O08, .O11, .P09, .P10").toggleClass("preto");
}

function cenouraFrame3(){
    $(".H10, .H13, .I10, .I13, .J08, .J09, .J11, .J12, .J13, .K13, .L08, .L09, .L13, .M10, .M11, .M12").toggleClass("preto");
}

function cenouraFrame4(){
   $(".F07, .F12, .G06, .G13, .H06, .H11, .H12, .I06, .I10, .J06, .J08, .J09, .K07").toggleClass("preto"); 
}

var enterCenoura = false;

function comerCenoura(){
    
    percorrerComida = false;
    contadorIntervaloComida = 1;

    if(enterCenoura === false){
        return
    }
    enterCenoura = false;

    let contadorCenoura = 1;  
    let repetir = true;
    
    let intervaloCenoura = setInterval(() =>{
      
        if(contadorCenoura == 1){
            cenouraFrame2();
        }
        if(contadorCenoura == 2){
            cenouraFrame3();
        }

        if(contadorCenoura == 3){
            cenouraFrame4();
        }

        if(contadorCenoura == 4 && repetir == true){
            contadorIntervaloComida = 1;
            $(".pixel").removeClass("preto");
            cenouraFrame1();
            contadorCenoura = 0;
            repetir = false;
        }

        if(contadorCenoura == 4 && repetir == false){
            $(".pixel").removeClass("preto");
            frameBebeMovimento1();
        }

        if(contadorCenoura > 4 && contadorCenoura <= 7){
            arrotarFrame();
        }

        if(contadorCenoura == 8){
            clearInterval(intervaloCenoura);
            contadorIntervaloComida = 1;
            $(".pixel").removeClass("preto");
            cenouraFrame1();
            enterCenoura = true;
            percorrerComida = true;
        }
       
        contadorCenoura ++;
    }, 1000);
}