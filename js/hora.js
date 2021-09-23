const data = new Date();
const hora = data.getHours();
const minutos = data.getMinutes();
const segundos = data.getSeconds();

console.log(hora, minutos, segundos);

function umaHora(){
    $(".B04, .B05, .B06, .C04, .D04, .E04, .F04, .G04, .H04,  .H05, .H06").toggleClass("preto");
}
function duasHoras(){
  $(".C04, .D04, .E05, .E06, .F07, .G07").toggleClass("preto");  
}
function tresHoras(){
    $(".C04, .D04, .E05, .E06, .F04, .G04").toggleClass("preto");  
} 

function quatroHoras(){
    $(".B05, .B06, .E05, .E06, .F04, .G04, .H04, .H05, .H06").toggleClass("preto");     
 }

 function cincoHoras(){
    $(".C07, .D07, .E05, .E06, .F04, .G04").toggleClass("preto");
}
function seisHoras(){
    $(".C07, .D07, .E05, .E06").toggleClass("preto");
}

function seteHoras(){
    $(".C04, .D04, .E04, .F04, .G04, .H04, .H05, .H06").toggleClass("preto"); 
 }

 function oitoHoras(){
    $(".E05, .E06").toggleClass("preto"); 
}

function noveHoras(){
    $(".E05, .E06, .F04, .G04").toggleClass("preto");
}


function dezHoras(){
    $(".B01, .C01, .D01, .E01, .F01, .G01, .H01").toggleClass("preto");
}

function um(){
    $(".B01, .C01, .D01, .E01, .F01, .G01, .H01").toggleClass("preto");
}


function painelDeHoras(){
  $(".B04, .B05, .B06, .B07, .B11, .B12, .B13, .B14, .B16, .B17, .B18, .B19, .C04, .C07, .C11, .C14, .C16, .C19, .D04, .D07, .D11, .D14, .D16, .D19, .D09, .E04, .E07, .E11, .E14, .E16, .E19, .F04, .F07, .F09, .F11, .F14, .F16, .F19, .G04, .G07, .G11, .G14, .G16, .G19, .H04, .H05, .H06, .H07, .H11, .H12, .H13, .H14, .H16, .H17, .H18, .H19, .L01, .L02, .L03, .L05, .L06, .L08, .L09, .L13, .L14, .L15, .L17, .L18, .L19, .M01, .M03, .M05, .M07, .M09, .M13, .M15, .M17, .M19, .N01, .N02, .N03, .N05, .N07, .N09, .N13, .N15, .N17, .N19, .O01, .O03, .O05, .O09, .O13, .O15, .O17, .O19, .P13, .P14, .P15, .P17, .P18, .P19").toggleClass("preto");  

  if(hora === 01 || hora === 13){
    umaHora();
  }
  if(hora === 02 || hora === 14){
    duasHora();
  }
  if(hora === 03 || hora === 15){
    tresHora();
  }
  if(hora === 04 || hora === 16){
      quatroHoras();
  }
  if(hora === 05 || hora === 17){
    cincoHoras();
  }
  if(hora === 06 || hora === 18){
    seisHoras();
  }
  if(hora === 07 || hora === 19){
    seteHoras();
  }
  if(hora === 08 || hora === 20){
    oitoHoras();
  }
  if(hora === 09 || hora === 21){
      noveHoras();
  }
}




$("#clock").click(()=>{
    console.log("clock");
    painelDeHoras();
})