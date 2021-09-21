function coxaFrame1(){
    $(".C04, .C05, .C06, .C07, .C08, .C09, .C10, .D03, .D11, .E02, .F06, .E12, .F01, .F12, .F16, .F17, .G01, .G09, .G13, .G15, .G18, .H01, .H04, .H13, .H14, .H15, .H18, .I01, .I07, .I13, .I17, .J01, .J03, .J13, .J14, .J15, .J18, .K01, .K08, .K13, .K15, .K18, .L02, .L12, .L16, .L17, .M03, .M11, .N04, .N05, .N06, .N07, .N08, .N09, .N10").toggleClass("preto");
}

function coxaFrame2(){
    $(".C05, .C06, .C07, .D03, .D07, .E02, .E06, .F01, .F02, .G01, .G06, .H01, .H04, .H05, .I01, .I04, .J01, .K01, .K02").toggleClass("preto");
}

function coxaFrame3(){
    $(".B04, .C04, .F01, .F02, .I04, .I05, .J03, .J06, .K02, .K07, .L02, .L08, .M03, .M09, .M10, .N04, .N05, .N06, .N07, .N08, .N09, .N10").toggleClass("preto");
}

function coxaFrame4(){
    $(".B04, .C08, .C09, .C10, .D07, .D11, .E06, .E12, .F01, .F06, .F09, .F10, .F12, .G06, .G08, .G09, .G11, .G13,  .H05, .H08, .H11, .H12, .I05, .I07, .I09, .I13, .J06, .J08, .J11, .J12, .K07, .K11, .K13, .L08, .L09, .L10, .L12,.M09, .M10, .M11").toggleClass("preto");
}

var enterCoxa = false;

function comerCoxa(){
    
    percorrerComida = false;
    contadorIntervaloComida = 1;

    if(enterCoxa === false){
        return
    }
    
    enterCoxa = false;

    let contadorCoxa = 1;  
    let repetir = true;
    
    let intervaloCoxa = setInterval(() =>{
    console.log("contador coxa: " + contadorCoxa);
        if(contadorCoxa == 1){
            coxaFrame2();
        }
        if(contadorCoxa == 2){
            coxaFrame3();
        }

        if(contadorCoxa == 3){
            coxaFrame4();
        }

        if(contadorCoxa == 4 && repetir == true){
            contadorIntervaloComida = 1;
            $(".pixel").removeClass("preto");
            coxaFrame1();
            contadorCoxa = 0;
            repetir = false;
        }

        if(contadorCoxa == 4 && repetir == false){
            $(".pixel").removeClass("preto");
            frameBebeMovimento1();
        }

        if(contadorCoxa > 4 && contadorCoxa <= 7){
            arrotarFrame();
        }

        if(contadorCoxa == 8){
            clearInterval(intervaloCoxa);
            contadorIntervaloComida = 1;
            $(".pixel").removeClass("preto");
            coxaFrame1();
            enterCoxa = true;
            percorrerComida = true;
        }
       
        contadorCoxa ++;
    }, 1000);
}
