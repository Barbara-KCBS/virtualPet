function sujoFrame1(){
    $(".G08,.G09,.G10,.G11,.H07,.H12,.I06,.I13,.J06,.J08,.J11,.J13,.K06,.K13,.L06,.L13,.M07,.M08,.M09,.M10,.M11,.M12").toggleClass("preto");					                        
}
function sujoFrame2(){
    $(".H08,.H09,.H10,.H11,.I07, .I09, .I10, .I08, .I11, .I12,.J06,.J07, .J08, .J09, .J10, .J11, .J12, .J13,.K06,.K07, .K08, .K09, .K10, .K11, .K12, .K13,.L06,.L07, .L08, .L09, .L10, .L11, .L12, .L13,.M07,.M08,.M09,.M10,.M11,.M12").toggleClass("preto");
}

function banhoFrame1(){
    $(".A01, .A05, .A06, .B02, .B03, .B04, .B05, .C02, .C03, .C04, .C07, .D02, .D03, .E01, .E02, .E05, .F01, .F10, .G03, .G11, .H08, .I09, .J06, .J13, .J14, .J15, .J16, .K07, .K12, .K13, .K14, .K15, .K16, .K17, .L11, .L12, .L13, .L14, .L15, .L16, .L17, .L18, .M11, .M12, .M14, .M15, .M17, .M18, .N10, .N01, .N02, .N03, .N04, .N05, .N06, .N07, .N11, .N12, .N13, .N14, .N15, .N16, .N17, .N18, .O02, .O03, .O04, .O05, .O06, .O11, .O12, .O13, .O14, .O15, .O16, .O17, .O18, .P02, .P06, .P12, .P13, .P14, .P15, .P16, .P17").toggleClass("preto");
}

function banhoFrame2(){
    $(".A01, .A05, .A06, .B02, .B03, .B04, .B05, .C02, .C03, .C04, .D02, .D03, .D08,  .E01, .E02, .F01, .F06, .E09, .G07, .H04, .H12, .I05, .I13, .J10, .K11, .K13, .K14, .K15, .K16, .L08, .L12, .L13, .L14, .L15, .L16, .L17, .M09, .M11, .M12, .M13, .M14, .M15, .M16, .M17, .M18, .N01, .N02, .N03, .N04, .N05, .N06, .N07, .N11, .N12, .N13, .N14, .N15, .N16, .N17, .N18, .O02, .O03, .O04, .O05, .O06, .O11, .O12, .O13, .O14, .O15, .O16, .O17, .O18, .P02, .P06, .P12, .P13, .P14, .P15, .P16, .P17").toggleClass("preto"); 
}

function banhoFrame3(){
    $(".A01, .A05, .A06, .B02, .B03, .B04, .B05, .C02, .C03, .C04, .D02, .D03, .E01, .E02, .F01, .F14, .I10, .G12, .G17, .I13, .I14, .I15, .I16, .I19, .J12, .J17, .K11, .K18, .L11, .L13, .L16, .L18, .M11, .M18, .N01, .N02, .N03, .N04, .N05, .N06, .N07, .N11, .N18, .O02, .O03, .O04, .O05, .O06, .O11, .O18, .P02, .P06, .P12, .P13, .P14, .P15, .P16, .P17").toggleClass("preto");
}

function banharDino(){

    contadorBanho = 1;

    var intervaloBanho = setInterval(() =>{
        
        if(contadorBanho === 1){
            clearInterval(intervaloBebe);
            desligarTodosOsPixels()
            banhoFrame1();
        }

        if(contadorBanho === 2){
            banhoFrame1();
            banhoFrame2();
        }

        if(contadorBanho === 3){
            banhoFrame2();
            banhoFrame3();
        }

        if(contadorBanho === 4){
            clearInterval(intervaloBanho);
            dinoFeliz();
        }
      
        contadorBanho += 1;

    }, 1500);
}

