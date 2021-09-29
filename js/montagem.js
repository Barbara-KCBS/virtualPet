function dinoNegando1(){
    desligarTodosOsPixels()
   $(" .G09,.G10,.G11,.G12,.H08,.H13,.I07, .I10, .I14,.J07, .J14,.K07, .K08, .K09, .K10, .K14,.L07,.L14,.M08,.M09,.M10,.M11,.M12,.M13").toggleClass("preto");	 
}

function dinoNegando2(){
    desligarTodosOsPixels()  
  $(" .G09,.G10,.G11,.G12,.H08,.H13,.I07, .I11, .I14,.J07, .J14,.K07, .K11, .K12, .K13, .K14,.L07,.L14,.M08,.M09,.M10,.M11,.M12,.M13").toggleClass("preto");	  
}

function dinoNaoQuer(atividadeNegada){
    
    let contador = 0;

    const intervalo = setInterval(()=>{

        contador ++;

        if(contador === 1 || contador === 3){
            dinoNegando1();
        }
        if(contador === 2 || contador === 4){
            dinoNegando2();
        }
        if(contador === 5 ){
            clearInterval(intervalo);  
            // desligarTodosOsPixels();
            atividadeNegada();
        }      

    }, 1000);
};

