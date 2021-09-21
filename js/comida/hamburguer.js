function hamburguerFrame1(){
    $(".E05, .E06, .E07, .E08, .E09, .E10, .E11, .E12, .E13, .E14, .E15, .F04, .F09, .F16, .G03, .G07, .G12, .G17, .H03,.H17, .I02, .I03, .I04, .I05, .I06, .I07, .I08, .I09, .I10, .I11, .I12, .I13, .I14, .I15, .I16, .I17, .I18, .J02, .J03, .J04, .J05, .J06, .J07, .J08, .J09, .J10, .J11, .J12, .J13, .J14, .J15, .J16, .J17, .J18, .K02, .K03, .K04, .K05, .K06, .K07, .K08, .K09, .K10, .K11, .K12, .K13, .K14, .K15, .K16, .K17, .K18, .L03, .L17, .M03, .M17, .N04, .N05, .N06, .N07, .N08, .N09, .N10, .N11, .N12, .N13, .N14, .N15, .N16").toggleClass("preto");
}
function hamburguerFrame2(){

    $(".B13, .C17, .E15, .F15, .F16, .G14, .H14, .G17, .H17, .I14, .J14, .K14, .I15, .I16, .I17, .I18, .J15, .J16, .J17, .J18, .K15, .K16, .K17, .K18, .L14, .L17, .M15, .M17, .N15, .N16").toggleClass("preto")
}
function hamburguerFrame3(){

    $(".A15, .D19, .E09, .E10, .E11, .E12, .E13, .E14, .F15, .G09, .G12, .G14, .H08,  .H14, .I09, .I10, .I11, .I12, .I13, .J09, .J10, .J11, .J12, .J13, .K09, .K10, .K11, .K12, .K13, .L09, .L14, .M10, .M15, .N10, .N11, .N12, .N13, .N14").toggleClass("preto")
}
function hamburguerFrame4(){
    $(".pixel").removeClass("preto");
}

var enterHamburguer = false;

function comerHamburguer(){
    
    percorrerComida = false;
    contadorIntervaloComida = 1;

    if(enterHamburguer === false){
        return
    }

    enterHamburguer = false;
    
    let contadorHamburguer = 1;  
    let repetir = true;
    
    let intervaloHamburguer = setInterval(() =>{
        if(contadorHamburguer == 1){
            hamburguerFrame2();
        }
        if(contadorHamburguer == 2){
            hamburguerFrame3();
        }
        if(contadorHamburguer == 3){
            hamburguerFrame4();
        }
        if(contadorHamburguer == 4 && repetir == true){
            contadorIntervaloComida = 1;
            hamburguerFrame1();
            contadorHamburguer -= 4;
            repetir = false;
        }
        if(contadorHamburguer == 4 && repetir == false){
            frameBebeMovimento1();
        }
        if(contadorHamburguer > 4 && contadorHamburguer <= 7){
            arrotarFrame();
        }
        if(contadorHamburguer == 8){
            clearInterval(intervaloHamburguer);
            contadorIntervaloComida = 1;
            hamburguerFrame4();
            hamburguerFrame1();
            enterHamburguer = true;
            percorrerComida = true;
        }
       
        contadorHamburguer ++;
    }, 1000);
}




