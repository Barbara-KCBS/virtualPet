function hamburguerFrame1(){
    $(".E05, .E06, .E07, .E08, .E09, .E10, .E11, .E12, .E13, .E14, .E15, .F04, .F09, .F16, .G03, .G07, .G12, .G17, .H03,.H17, .I02, .I03, .I04, .I05, .I06, .I07, .I08, .I09, .I10, .I11, .I12, .I13, .I14, .I15, .I16, .I17, .I18, .J02, .J03, .J04, .J05, .J06, .J07, .J08, .J09, .J10, .J11, .J12, .J13, .J14, .J15, .J16, .J17, .J18, .K02, .K03, .K04, .K05, .K06, .K07, .K08, .K09, .K10, .K11, .K12, .K13, .K14, .K15, .K16, .K17, .K18, .L03, .L17, .M03, .M17, .N04, .N05, .N06, .N07, .N08, .N09, .N10, .N11, .N12, .N13, .N14, .N15, .N16").toggleClass("preto");
}
function hamburguerFrame2(){
    hamburguerFrame1();

    $(".B13, .C17, .E15, .F15, .F16, .G14, .H14, .G17, .H17, .I14, .J14, .K14, .I15, .I16, .I17, .I18, .J15, .J16, .J17, .J18, .K15, .K16, .K17, .K18, .L14, .L17, .M15, .M17, .N15, .N16").toggleClass("preto")
}
function hamburguerFrame3(){
    hamburguerFrame1();

    $(".A15, .D19, .E09, .E10, .E11, .E12, .E13, .E14, .E15, .F16, .G09, .G12, .H08, .G17, .H17, .I09, .I10, .I11, .I12, .I13, .I14, .J09, .J10, .J11, .J12, .J13, .J14, .K14, .I15, .I16, .I17, .I18, .J15, .J16, .J17, .J18, .K09, .K10, .K11, .K12, .K13, .K15, .K16, .K17, .K18, .L09, .L17, .M10, .M17, .N15, .N16, .N10, .N11, .N12, .N13, .N14").toggleClass("preto")
}
function hamburguerFrame4(){
    $(".pixel").removeClass("preto");
}

function comerHamburguer(){
    console.log('esta sendo clicado')
    let contador = 5;  
    let contar = 1;
    let intervaloHamburguer = setInterval(() =>{
        if(contar < 3){
            if(contador == 5){
            clearInterval(intervaloBebe);
            $(".pixel").removeClass("preto");
            hamburguerFrame1();
            }
            if(contador == 4){
                hamburguerFrame1();
                hamburguerFrame2();
            }
            if(contador == 3){
                hamburguerFrame2();
                hamburguerFrame3();
            }
            if(contador == 2){
                hamburguerFrame3();
                hamburguerFrame4(); 
                if(contar < 2){
                    contador += 5;
                    contar += 1;
                }  
            } 
            if(contador == 1 && contar == 2){
                frameBebeMovimento1();
            }
            if((contador == 0 || contador == -2) && contar == 2){
                frameBebeMovimento1();
                arrotarFrame();
            }
            if((contador == -1 || contador == -3)&& contar == 2){
                arrotarFrame();
                frameBebeMovimento1();
            }
            if(contador == -4 && contar == 2){
                clearInterval(intervaloHamburguer);
                dinoBebe();
            }
            
        }
        
        contador -= 1;
    }, 1000)
}

// comerHambuguer();
