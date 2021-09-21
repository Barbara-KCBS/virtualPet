function dinoBebeInjeçaoFrame1(){
    $(".A16, .A17, .A18, .B17, .C17, .D15, .D16, .D17, .D18, .D19, .E16, .E17, .E18, .F16, .F17, .F18, .G16, .G17, .G18, .H16, .H17, .H18, .I16, .I17, .I18, .J06, .J07, .J08, .J09, .J10, .J17, .K05, .K11, .K17, .L04, .L07, .L09, .L12, .L17, .M04, .M06, .M07, .M08, .M09, .M10, .M12, .N04, .N07, .N09, .N12, .O04, .O12, .P05, .P06, .P07, .P08, .P09, .P10, .P11").toggleClass("preto"); 
 }
 
 function dinoBebeInjeçaoFrame2(){
     $(".C16, .C17, .C18, .D17, .E15, .E16, .E17, .E18, .E19, .F16, .F18,  .G16, .G17, .G18, .H16, .H17, .H18, .I16, .I17, .I18, .J14, .J16, .J17, .J18,  .K06, .K07, .K08, .K09, .K10, .K17, .L05, .L11, .L17, .M04, .M12, .M17, .N04, .N06, .N07, .N09, .N10, .N12, .O04, .O12, .P05, .P06, .P07, .P08, .P09, .P10, .P11").toggleClass("preto");  
 }
 
 function dinoBebeInjeçaoFrame3(){
     $(".E16, .E17, .E18, .F15, .F16, .F17, .F18, .F19,   .G16, .G18, .H16, .H18, .I13, .I16, .I18,  .J06, .J07, .J08, .J09, .J10, .J16, .J18, .L17, .K05, .K11,  .K16, .K17, .K18, .L04, .L07, .L09, .L12,  .M04, .M06, .M07, .M08, .M09, .M10, .M12, .M17, .N04, .N07, .N09, .N12, .N17, .O04, .O12, .P05, .P06, .P07, .P08, .P09, .P10, .P11").toggleClass("preto"); 
 }
 
 function dinoBebeInjeçaoFrame4(){
     $(".C16, .C17, .C18, .D15, .D16, .D17, .D18, .D19, .E16, .F08, .E18, .F16, .F18, .G05, .G11, .G16, .G18, .H16, .H18, .I06, .I07, .I08, .I09, .I10, .I16, .I17, .I18, .J05, .J11, .J17, .K04, .K12, .K17, .L04, .L06, .L10, .L12, .L17, .M04, .M12,  .N04, .N12,  .O04, .O12, .P05, .P06, .P07, .P08, .P09, .P10, .P11").toggleClass("preto"); 
 }

 function medicarDino(){

    contadorMedicar = 1;

    var intervaloMedicar = setInterval(() =>{
        if(contadorMedicar === 1){
            clearInterval(intervaloBebe);
            $(".pixel").removeClass("preto");
            dinoBebeInjeçaoFrame1();
        }
        if(contadorMedicar === 2){
            dinoBebeInjeçaoFrame1();
            dinoBebeInjeçaoFrame2();
        }

        if(contadorMedicar === 3){
            dinoBebeInjeçaoFrame2();
            dinoBebeInjeçaoFrame3();
        }

        if(contadorMedicar === 4){
            dinoBebeInjeçaoFrame3();
            dinoBebeInjeçaoFrame4();
        }

        if(contadorMedicar === 5 && luzDesligada === false){
            clearInterval(intervaloMedicar);
            telaInicial(); 
        }
        if(contadorMedicar === 5 && luzDesligada === true){
            clearInterval(intervaloMedicar);
            telaInicialApagada(); 
        }
      
        contadorMedicar += 1;

    }, 1500);
}