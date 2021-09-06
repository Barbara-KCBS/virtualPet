function frameBebeMovimento1(){
    $(".G08,.G09,.G10,.G11,.H07,.H12,.I06,.I13,.J06,.J08,.J11,.J13,.K06,.K13,.L06,.L13,.M07,.M08,.M09,.M10,.M11,.M12").toggleClass("preto");					                        
}

function frameBebeMovimento2(){
    $(".H08,.H09,.H10,.H11,.I07,.I12,.J06,.J13,.K06,.K13,.L06,.L13,.M07,.M08,.M09,.M10,.M11,.M12").toggleClass("preto");
}

function frameBebeMovimento3(){
    $(".G07,.G08,.G09,.G10,.H06,.H11,.I05,.I12,.J05,.J07,.J10,.J12,.K05,.K12,.L05,.L12,.M07,.M06, .M08,.M09,.M10,.M11").toggleClass("preto");	
}

function frameBebeMovimento4(){
    $(" .G09,.G10,.G11,.G12,.H08,.H13,.I07,.I14,.J07,.J09,.J12,.J14,.K07,.K14,.L07,.L14,.M08,.M09,.M10,.M11,.M12,.M13").toggleClass("preto");							 
}

function dinoBebe() {
        
        var contador = 5;
        intervaloBebe = setInterval(() => {
        console.log(contador);
        // if(contador == 6){
        //     frameBebeMovimento1();
        // }
        if(contador == 5){
                frameBebeMovimento1();
                frameBebeMovimento2();
        }
        if(contador == 4){
                frameBebeMovimento2();
                frameBebeMovimento3();
        }
        if(contador == 3){
                frameBebeMovimento3();
                frameBebeMovimento2();
        }
        if(contador == 2){
                frameBebeMovimento2();
                frameBebeMovimento4();
                
        }
        if(contador == 1){
            frameBebeMovimento4();
            frameBebeMovimento1();
            contador += 5;
        }
        contador --;
    }, 1000);

}


// dinoBebe();

