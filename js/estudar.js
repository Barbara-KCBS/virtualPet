function estudandoFrame1(){
    $(".C14, .C15, .D04, .D05, .D06, .D07, .D14, .D15, .E03, .E08, .E12, .F02, .F09, .G02, .G04, .G07, .G09, .H02, .H09, .I03, .I04, .I05, .I06, .I07, .I08, .I09, .I10, .I11, .I12, .I13, .I14, .I15, .I16, .I17, .J03, .J10, .J17, .K03, .K05, .K06, .K07, .K08, .K10, .K12, .K13, .K14, .K15, .K17, .L03, .L10, .L17, .M03, .M05, .M06, .M07, .M08, .M10, .M12, .M13, .M14, .M15, .M17, .N03, .N10, .N17, .O03, .O10, .O17, .P03, .P04, .P05, .P06, .P07, .P08, .P09, .P10, .P11, .P12, .P13, .P14, .P15, .P16, .P17").toggleClass("preto");	  
}
function estudandoFrame2(){
    $(".C05, .C06, .C14, .C15, .D04, .D07, .D13, .D16, .E03, .E17, .F11, .F02, .F09, .G02, .G04, .G07, .G09, .H02, .H09, .F18, .G11, .G13, .G16, .G18, .H11, .H18").toggleClass("preto");	

}

function dinoEstudando(){
    
    contadorEstudando = 1;

    var intervaloEstudando = setInterval(() =>{
        if(contadorEstudando === 1){
            clearInterval(intervaloBebe);
            desligarTodosOsPixels();
            estudandoFrame1();
        }
        if(contadorEstudando > 1 && contadorEstudando <= 4){
            estudandoFrame2();
        }
        if(contadorEstudando === 5 && luzDesligada === false){
            clearInterval(intervaloEstudando);
            desligarTodosOsPixels();
            telaInicial();
            eventoSelecaoEsquerda = true;
            eventoSelecaoDireita = true;        
        }  
        if(contadorEstudando === 5 && luzDesligada === true){
            clearInterval(intervaloEstudando);
            telaInicialApagada(); 
            enterSelecao = true;  
            eventoSelecaoEsquerda = true;
            eventoSelecaoDireita = true;
        }  

        contadorEstudando += 1;
    }, 1050);
}
 
