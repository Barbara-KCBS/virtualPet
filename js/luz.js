var contadorIntervaloLuzOn = 1; 
var tempoDeTelaLuzOn = false;
var telaLuzOn = false;

var contadorIntervaloLuzOff = 1; 
var tempoDeTelaLuzOff = false;
var telaLuzOff = false;

var desligarLuz = false;

var luzDesligada = false;


function luzOpcaoOn(){
    
    if(telaLuzOn === false){
        return
    }
    tempoDeTelaLuzOn = true;
    tempoDeTelaLuzOff = false;
    telaLuzOff = true; 
    desligarLuz = false; 
    let enterLuzOn = true;

    console.log("luz desligada " + luzDesligada);
    desligarTodosOsPixels();

    let intervaloLuzOn = setInterval(()=>{

        if(tempoDeTelaLuzOn === false){
            clearInterval(intervaloLuzOn);
            contadorIntervaloLuzOn = 1;
            enterLuzOn = false;
        }

        if(contadorIntervaloLuzOn === 10){
            telaLuzOn = false;
            telaLuzOff = false;
            luzDesligada = false;
            contadorIntervaloLuzOn = 1;
            enterLuzOn = false;
            clearInterval(intervaloLuzOn);
            telaInicial();
        }
        
        contadorIntervaloLuzOn += 1;
    }, 1000)
    
    $(".B01, .B02, .B03, .B04, .B05, .B06, .B07, .B08, .B09, .B10, .B11, .B12, .B13, .B14, .B15, .B16, .B17, .B18, .B19, .C10, .C11, .C12, .C13, .C14, .C15, .C16, .C17, .C18, .C19, .D02, .D03, .D04, .D06, .D07, .D08, .D10, .D14, .D17, .E02, .E04, .E06, .E08, .E10, .E12, .E14, .E16, .E17, .E19,  .F02, .F04, .F06, .F08, .F10, .F12, .F14, .F17, .G02, .G03, .G04, .G06, .G08, .G10, .G14, .G16, .G17, .G19, .H10, .H11, .H12, .H13, .H14, .H15, .H16, .H17, .H18, .H19, .I01, .I02, .I03, .I04, .I05, .I06, .I07, .I08, .I09, .I10, .I11, .I12, .I13, .I14, .I15, .I16, .I17, .I18, .I19, .K05, .L04, .L05, .L06, .M03, .M04, .M05, .M06, .M07, .N02, .N03, .N04, .N05, .N06, .N07, .N08, .O04, .O05, .O06, .P04, .P05, .P06").toggleClass("preto"); 
    
    $("#enter").click(()=>{
        if(enterLuzOn === false){
            return
        }
        if(enterLuzOn === true){
            contadorIntervaloLuzOn = 10;
        }
    });
  
 }

 function luzOpcaoOff(){
     
    if(telaLuzOff === false){
         return
    }
    
    tempoDeTelaLuzOff = true;
    tempoDeTelaLuzOn = false;
    telaLuzOn = true;
    desligarLuz = true;
   
    desligarTodosOsPixels();
  
    let intervaloLuzOff = setInterval(()=>{
        if(tempoDeTelaLuzOff === false){
            clearInterval(intervaloLuzOff);
            contadorIntervaloLuzOff = 1;
            
        }
        if(contadorIntervaloLuzOff === 10){
            telaLuzOn = false;
            telaLuzOff = false;
            contadorIntervaloLuzOn = 1;
            contadorIntervaloLuzOff = 1;
            clearInterval(intervaloLuzOff);
            telaInicial();
        }

        console.log("luz off: " + contadorIntervaloLuzOff);
        contadorIntervaloLuzOff += 1;
    }, 1000)

     $(".B01, .B02, .B03, .B04, .B05, .B06, .B07, .B08, .B09, .B10, .B11, .B12, .B13, .B14, .B15, .B16, .B17, .B18, .B19, .C01, .C02, .C03, .C04, .C05, .C06, .C07, .C08, .C09, .D01, .D05,  .D09, .D11, .D12, .D13, .D15, .D16, .D18, .D19, .E01, .E03, .E05, .E07, .E09, .E11, .E13, .E15, .E18, .F01, .F03, .F05, .F07, .F09, .F11, .F13, .F15, .F16, .F18, .F19, .G01, .G05, .G07, .G09, .G11, .G12, .G13, .G15, .G18, .H01, .H02, .H03, .H04, .H05, .H06, .H07, .H08, .H09, .I01, .I02, .I03, .I04, .I05, .I06, .I07, .I08, .I09, .I10, .I11, .I12, .I13, .I14, .I15, .I16, .I17, .I18, .I19, .K14, .L13, .L14, .L15, .M12, .M13, .M14, .M15, .M16, .N11, .N12, .N13, .N14, .N15, .N16, .N17, .O13, .O14, .O15, .P13, .P14, .P15").toggleClass("preto");

     $("#enter").click(()=>{
         if(desligarLuz === true){ 
             telaLuzOn = false;
             telaLuzOff = false;
             telaInicialApagada();
         }
     });
 }  

$(".selecao-direita").click(luzOpcaoOff);       
$(".selecao-esquerda").click(luzOpcaoOn); 

