function movimentar1(){
    $(".G08,.G09,.G10,.G11,.H07,.H12,.I06,.I13,.J06,.J08,.J11,.J13,.K06,.K13,.L06,.L13,.M07,.M08,.M09,.M10,.M11,.M12").toggleClass("preto");					                        
}

function movimentar2(){
    $(".H08,.H09,.H10,.H11,.I07,.I12,.J06,.J13,.K06,.K13,.L06,.L13,.M07,.M08,.M09,.M10,.M11,.M12").toggleClass("preto");
}

function movimentar3(){
    $(".G07,.G08,.G09,.G10,.H06,.H11,.I05,.I12,.J05,.J07,.J10,.J12,.K05,.K12,.L05,.L12,.M07,.M06, .M08,.M09,.M10,.M11").toggleClass("preto");	
}

function movimentar4(){
    $(" .G09,.G10,.G11,.G12,.H08,.H13,.I07,.I14,.J07,.J09,.J12,.J14,.K07,.K14,.L07,.L14,.M08,.M09,.M10,.M11,.M12,.M13").toggleClass("preto");							 
}

function dinoBAby() {
    var contador = 5;
    setInterval(() => {
        console.log(contador);
        // if(contador == 6){
        //     movimentar1();
        // }
        if(contador == 5){
                movimentar1();
                movimentar2();
        }
        if(contador == 4){
                movimentar2();
                movimentar3();
        }
        if(contador == 3){
                movimentar3();
                movimentar2();
        }
        if(contador == 2){
                movimentar2();
                movimentar4();
                
        }
        if(contador == 1){
            movimentar4();
            movimentar1();
            contador += 5;
        }
        contador --;
    }, 1000);  
}

// dinoBAby();