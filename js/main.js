function movimentar1(){

    $("#linha7 .G8").toggleClass("preto");							
    $("#linha7 .G9").toggleClass("preto");							
    $("#linha7 .G10").toggleClass("preto");							
    $("#linha7 .G11").toggleClass("preto");							
                            
                            
    $("#linha8 .H7").toggleClass("preto");							
    $("#linha8 .H12").toggleClass("preto");							
                            
    $("#linha9 .I6").toggleClass("preto");							
    $("#linha9 .I13").toggleClass("preto");							
                            
    $("#linha10 .J6").toggleClass("preto");							
    $("#linha10 .J8").toggleClass("preto");							
    $("#linha10 .J11").toggleClass("preto");							
    $("#linha10 .J13").toggleClass("preto");							
                            
    $("#linha11 .K6").toggleClass("preto");							
    $("#linha11 .K13").toggleClass("preto");

    $("#linha12 .L6").toggleClass("preto");							
    $("#linha12 .L13").toggleClass("preto");							
                            
                            
    $("#linha13 .M7").toggleClass("preto");							
    $("#linha13 .M8").toggleClass("preto");							
    $("#linha13 .M9").toggleClass("preto");							
    $("#linha13 .M10").toggleClass("preto");							
    $("#linha13 .M11").toggleClass("preto");							
    $("#linha13 .M12").toggleClass("preto");    

}


function movimentar2(){


    $("#linha7 .G9").toggleClass("preto");							
    $("#linha7 .G10").toggleClass("preto");							
    $("#linha7 .G11").toggleClass("preto");							
    $("#linha7 .G12").toggleClass("preto");

    $("#linha8 .H8").toggleClass("preto");							
    $("#linha8 .H13").toggleClass("preto");

    $("#linha9 .I7").toggleClass("preto");							
    $("#linha9 .I14").toggleClass("preto");

    $("#linha10 .J7").toggleClass("preto");	
    $("#linha10 .J9").toggleClass("preto");	
    $("#linha10 .J12").toggleClass("preto");						
    $("#linha10 .J14").toggleClass("preto");

    $("#linha11 .K7").toggleClass("preto");							
    $("#linha11 .K14").toggleClass("preto");

    $("#linha12 .L7").toggleClass("preto");							
    $("#linha12 .L14").toggleClass("preto")

    $("#linha13 .M8").toggleClass("preto")							
    $("#linha13 .M9").toggleClass("preto")							
    $("#linha13 .M10").toggleClass("preto")							
    $("#linha13 .M11").toggleClass("preto")							
    $("#linha13 .M12").toggleClass("preto");							
    $("#linha13 .M13").toggleClass("preto");

}

function movimentar3(){							                                         
                            
    $("#linha7 .G10").toggleClass("preto");							
    $("#linha7 .G11").toggleClass("preto");							
    $("#linha7 .G12").toggleClass("preto");							
    $("#linha7 .G13").toggleClass("preto");							
                        
    $("#linha8 .H9").toggleClass("preto");							
    $("#linha8 .H14").toggleClass("preto");							
                        
    $("#linha9 .I8").toggleClass("preto");							
    $("#linha9 .I15").toggleClass("preto");							
                                
    $("#linha10 .J8").toggleClass("preto");							
    $("#linha10 .J10").toggleClass("preto");							
    $("#linha10 .J13").toggleClass("preto");							
    $("#linha10 .J15").toggleClass("preto");							
                                
    $("#linha11 .K8").toggleClass("preto");							
    $("#linha11 .K15").toggleClass("preto");

    $("#linha12 .L8").toggleClass("preto");							
    $("#linha12 .L15").toggleClass("preto");							
                                
    $("#linha13 .M9").toggleClass("preto");							
    $("#linha13 .M10").toggleClass("preto");							
    $("#linha13 .M11").toggleClass("preto");							
    $("#linha13 .M12").toggleClass("preto");							
    $("#linha13 .M13").toggleClass("preto");
    $("#linha13 .M14").toggleClass("preto");							


}

function dinoBAby() {
    movimentar1()
    var contador = 3;
    setInterval(() => {
        console.log(contador);
        if(contador == 3){
                movimentar1();
                movimentar2();
        }
        if(contador == 2){
                movimentar2();
                movimentar3();
        }
        if(contador == 1){
                movimentar3();
                movimentar2();
        }
        if(contador == 0){
                movimentar2();
                movimentar1();
                contador += 4;
        }
        contador --;
    }, 1050);  
}

// dinoBAby();