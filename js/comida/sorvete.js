function sorveteFrame1(){
    $(".B07, .B08, .B09, .B10, .B11, .B12, .C06, .C13, .D05, .D08, .D14, .E04, .E07, .E15, .F04, .F09, .F15, .G03, .G06, .G16, .H03, .H16, .I04, .I05, .I06, .I07, .I08, .I09, .I10, .I11, .I12, .I13, .I14, .I15, .J04, .J15, .K04, .K05, .K14, .K15, .L05, .L14, .M06, .M13, .M07, .M12, .N07, .N12, .O07, .O12, .P07, .P08, .P09, .P10, .P11, .P12").toggleClass("preto");
}

function sorveteFrame2(){
    $(".B07, .B08, .B09, .C06, .C09, .E04, .F03, .F04, .F06, .G03, .G05, .G06, .H03, .H04").toggleClass("preto");
}

function sorveteFrame3(){
    $(".B10, .B11, .B12, .C09, .C13, .D05, .D09, .D14, .D17, .E10, .E11, .E15, .F03, .F09, .F12, .F15, .G08, .G13, .G14, .G16, .H15, .H16").toggleClass("preto");
}

function sorveteFrame4(){
    $(".B02, .B18, .D08, .D09, .D17, .E07, .E10, .E11, .F06, .F12, .G05, .G08, .G13, .G14, .H04, .H15").toggleClass("preto");
}

var enterSorvete = false;

function comerSorvete(){

    contadorIntervaloComida = 1;

    if(enterSorvete === false){
        return
    }
    enterSorvete = false;

    let contadorSorvete = 1;  
    let repetir = true;
    
    let intervaloSorvete = setInterval(() =>{
      
        if(contadorSorvete == 1){
            sorveteFrame2();
        }
        if(contadorSorvete == 2){
            sorveteFrame3();
        }

        if(contadorSorvete == 3){
            sorveteFrame4();
        }

        if(contadorSorvete == 4 && repetir == true){
            contadorIntervaloComida = 1;
            $(".pixel").removeClass("preto");
            sorveteFrame1();
            contadorSorvete = 0;
            repetir = false;
        }

        if(contadorSorvete == 4 && repetir == false){
            $(".pixel").removeClass("preto");
            frameBebeMovimento1();
        }

        if(contadorSorvete > 4 && contadorSorvete <= 7){
            arrotarFrame();
        }

        if(contadorSorvete == 8){
            clearInterval(intervaloSorvete);
            contadorIntervaloComida = 1;
            $(".pixel").removeClass("preto");
            sorveteFrame1();
            enterSorvete = true;
        }
       
        contadorSorvete ++;
    }, 1000);
}

