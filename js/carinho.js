function carinhoFrame1(){
    $(".A14, .A15, .B10, .B11, .B12, .B13, .B16, .C09, .C16, .C17, .C18, .C19, .D10, .D11, .D12, .E09, .F10, .F11, .F12, .G09, .H06, .H07, .H08, .H09, .H10, .H11, .H12, .I05, .I09, .I17, .I18, .I19, .J10, .J11, .J12, .J13, .J14, .J15, .J16, .J04, .K04, .K06, .K09, .K11, .L04, .L11, .M04, .M11, .N05, .N06, .N06, .N07, .N08, .N09, .N10").toggleClass("preto");	
}

function carinhoFrame2(){
    $(".A14, .A15, .B10, .B11, .B12, .B13, .B16, .C09, .C16, .C17, .C18, .C19, .D06, .D09, .D10, .D11, .D12, .D16, .D17, .E04, .E09, .E12, .E13, .E14, .E15, .E18, .F10, .F12, .F18, .F19, .G06, .G07, .G08, .G12, .G13, .G14, .H05, .H06, .H07, .H08, .H09, .H12, .I04, .I05, .I09, .I11, .I12, .I13, .I14, .I17, .I18, .I19, .J06, .J09, .J10, .J12, .J13, .J14, .J15, .J16, .K06, .K09, .K12, .K13, .K14, .L19, .M12, .M13, .M14, .M15, .M16, .M17, .M18").toggleClass("preto");	
}

function dinoCarinho(){

    contadorCarinho = 1;

    var intervaloCarinho = setInterval(() =>{
        if(contadorCarinho === 1){
            desligarTodosOsPixels();
            carinhoFrame1();
        }
        if(contadorCarinho === 2){
            carinhoFrame2();
        }
        if(contadorCarinho === 3 && luzDesligada === false){
            clearInterval(intervaloCarinho);
            telaInicial(dinoBebe, frameBebeMovimento1);    
        }  
        if(contadorCarinho === 3 && luzDesligada === true){
            clearInterval(intervaloCarinho);
            telaInicialApagada(); 
        }  

        contadorCarinho += 1;
    }, 1500);
}

