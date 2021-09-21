function macarraoFrame1(){
    $(".A07, .A10, .A13, .B07, .B10, .B13, .C07, .C10, .C13, .D06, .D09, .D12, .E03, .E04, .E05, .E06, .E07, .E08, .E09, .E10, .E11, .E12, .E13, .E14, .E15, .E16, .E17, .E18, .E19, .F06, .F09, .F12, .G03, .G04, .G05, .G06, .G07, .G08, .G09, .G10, .G11, .G12, .G13, .G14, .G15, .G16, .G17, .G18, .G19, .H06, .H09, .H12, .I07, .I10, .I13, .J07, .J10, .J13, .K07, .K10, .K13, .L04, .L05, .L06, .L07, .L08, .L09, .L10, .L11, .L12, .L13, .L14, .L15, .L16, .M04, .M05, .M15, .M16, .N05, .N06, .N14, .N15, .O06, .O07, .O13, .O14, .P07, .P08, .P09, .P10, .P11, .P12, .P13").toggleClass("preto");
}
function macarraoFrame2(){
    $(".A06, .A07, .A09, .A10, .A12, .A13, .B06, .B09, .B12, .C06, .C07, .C09, .C10, .C12, .C13, .B03, .B04, .B05, .B06, .B08, .B09, .B11, .B12, .B14, .B15, .B16, .B17, .B18, .B19, .E03, .E04, .E05, .E07, .E08, .E10, .E11, .E13, .E14, .E15, .E16, .E17, .E18, .E19, .G03, .G04, .G05, .G06, .G08, .G09, .G11, .G12, .G14, .G15, .G16, .G17, .G18, .G19, .D03, .D04, .D05, .D07, .D08, .D10, .D11, .D13, .D14, .D15, .D16, .D17, .D18, .D19, .H06, .H07, .H09, .H10, .H12, .H13").toggleClass("preto");
}

var enterMacarrao = false;

function comerMacarrao(){
    
    percorrerComida = false;
    contadorIntervaloComida = 1;

    if(enterMacarrao == false){
        return
    }
    enterMacarrao = false;

    let contadorMacarrao = 1;  
    
    let intervaloMacarrao = setInterval(() =>{

            if(contadorMacarrao > 0 && contadorMacarrao <= 7){
                macarraoFrame2();
            }
            if(contadorMacarrao === 8){
                contadorIntervaloComida = 1;
                desligarTodosOsPixels()
                frameBebeMovimento1();
            }
            if(contadorMacarrao > 8 && contadorMacarrao <= 11){
                arrotarFrame();
            }

            if(contadorMacarrao === 12){
                clearInterval(intervaloMacarrao);
                contadorIntervaloComida = 1;
                desligarTodosOsPixels()
                macarraoFrame1();  
                enterMacarrao = true;
                percorrerComida = true;  
            }
   

        contadorMacarrao ++;
       
    }, 1000);
}




