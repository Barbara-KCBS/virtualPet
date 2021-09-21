function macaFrame1(){
    $(".B10, .B12, .B13, .B14, .B15, .C10, .C11, .C12, .C13, .C14, .C15, .C16, .D10, .D12, .D13, .D14, .D15, .E10, .F07, .F08, .F09, .F10, .F11, .F12, .F13, .F14, .G05, .G06, .G15, .G16, .H04, .H05, .H16, .H17, .I04, .I17, .J04, .J17, .K04, .K17, .L04, .L17, .M05, .M16, .N06, .N07, .N14, .N15, .O07, .O08, .O09, .O10, .O11, .O12, .O13, .O14").toggleClass("preto"); 
 }
 
 function macaFrame2(){
    $(".E03, .E04, .F04, .G05, .H04, .H05, .H06, .H07, .I04, .I07, .I08, .J04, .J08, .J09, .K04, .K08, .K09, .L07, .M05, .M06, .L08").toggleClass("preto"); 
 }
 
 function macaFrame3(){
    $(".F07, .F14, .F17, .F18, .G14, .G15, .G16, .G06, .G07, .G17, .H06, .H08, .H13, .H14, .H16, .H17, .I09, .I13, .I14, .I17, .J12, .J13, .J17, .K08, .K12, .K17, .L07, .L08, .L09, .L12, .L17, .M06, .M08, .M09, .M12, .M13, .M17, .N06, .N08, .N15, .N17, .N18").toggleClass("preto");  
 }

 var enterMaca = false;

function comerMaca(){
    
    percorrerComida = false;
    contadorIntervaloComida = 1;

    if(enterMaca === false){
        return
    }
    enterMaca = false;

    let contadorMaca = 1;  
    let repetir = true;
    
    let intervaloMaca = setInterval(() =>{
   
        if(contadorMaca == 1){
            macaFrame2();
        }
        if(contadorMaca == 2){
            macaFrame3();
        }

        if(contadorMaca == 3 && repetir == true){
            contadorIntervaloComida = 1;
            desligarTodosOsPixels()
            macaFrame1();
            contadorMaca = 0;
            repetir = false;
        }

        if(contadorMaca == 3 && repetir == false){
            desligarTodosOsPixels()
            frameBebeMovimento1();
        }

        if(contadorMaca > 3 && contadorMaca <= 6){
            arrotarFrame();
        }

        if(contadorMaca == 7){
            clearInterval(intervaloMaca);
            contadorIntervaloComida = 1;
            desligarTodosOsPixels()
            macaFrame1();
            enterMaca = true;
            percorrerComida = true;
        }
       
        contadorMaca ++;
    }, 1000);
}

