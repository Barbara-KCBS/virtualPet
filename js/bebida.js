function aguaFrame1(){
    $(".C13, .C14, .C15, .C16,.D12, .D17, .E07, .E08, .E11, .E18, .F06, .F07, .F11, .F13, .F16, .F18, .G05, .G06, .G11, .G18, .H05, .H12, .H13, .H14, .H15, .H16, .H17, .I01, .I02, .I03, .I04, .I05, .I06, .I07, .I08, .I09, .J02, .J03, .J04, .J05, .J06, .J07, .J08, .K02, .K03, .K04, .K05, .K06, .K07, .K08, .L02, .L03, .L04, .L05, .L06, .L07, .L08, .M02, .M03, .M04, .M05, .M06, .M07, .M08, .N02, .N03, .N04, .N05, .N06, .N07, .N08, .O03, .O04, .O05, .O06, .O07, .P03, .P04, .P05, .P06, .P07").toggleClass("preto");
}
function aguaFrame2(){
    aguaFrame1();
    $(".B13, .B14, .B15, .B16, .C13, .C08, .C12, .C17, .C14, .C15, .C16, .D11, .D04, .D12, .D17, .D18, .E13, .E16, .F13, .F16, .G14, .J03, .J04, .J05, .J06, .J07").toggleClass("preto");

}
function aguaFrame3(){
  aguaFrame1();
  $(".C08, .D04, .J03, .J04, .J05, .J06, .J07, .K03, .K04, .K05, .K06, .K07").toggleClass("preto");

}
function aguaFrame4(){
    aguaFrame1();
    $(".B02, .B07, .B13, .B14, .B15, .B16, .C13, .C12, .C17, .C14, .C15, .C16, .D11, .D12, .D17, .D18, .E13, .E16, .F13, .F16, .G14, .J03, .J04, .J05, .J06, .J07, .K03, .K04, .K05, .K06, .K07, .L03, .L04, .L05, .L06, .L07").toggleClass("preto");
}

function aguaFrame5(){
    aguaFrame3();
    $(".B02, .B07, .C08, .D04, .L03, .L04, .L05, .L06, .L07, .M03, .M04, .M05, .M06, .M07, .P10").toggleClass("preto");
}

function aguaFrame6(){
    aguaFrame4();
    $(".B02, .B07, .A01, .A08, .M03, .M04, .M05, .M06, .M07, .N04, .N05, .N06").toggleClass("preto");
}

function aguaFrame7(){
    aguaFrame5();
    $(".A01, .A08, .B02, .B07, .N04, .N05, .N06, .O04, .O05, .O06, .P10").toggleClass("preto");
}
function beberAgua(){
    contador = 13;
    var intervaloBebida = setInterval(() =>{
        console.log(contador);
        if(contador == 13){
            clearInterval(intervaloBebe);
            $(".pixel").removeClass("preto");
            aguaFrame1();
        }
        if(contador == 12){
            aguaFrame1();
            aguaFrame2();
        }
        if(contador == 11){
            aguaFrame2();
            aguaFrame3();
        }
        if(contador == 10){
            aguaFrame3();
            aguaFrame4();
        }
        if(contador == 9){
            aguaFrame4();
            aguaFrame5();
        }
        if(contador == 8){
            aguaFrame5();
            aguaFrame6();
        }
        if(contador == 7){
            aguaFrame6();
            aguaFrame7();
        }
        if(contador == 6){
            aguaFrame7();
            frameBebeMovimento1();
        }
        if(contador == 5 || contador == 3){
            frameBebeMovimento1();
            arrotarFrame();
        }
        if(contador == 4 || contador == 2){
            arrotarFrame();
            frameBebeMovimento1();
        }
        if(contador == 1){
            dinoBebe();          
            clearInterval(intervaloBebida);
        }  
        contador -= 1;
    }, 1050);
}

// beberAgua();

