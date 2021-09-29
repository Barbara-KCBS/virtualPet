const data = new Date();
const hora = data.getHours();
const minutos = data.getMinutes();
const segundos = data.getSeconds();

var horasString = String(hora).split('');
var horaDig1 = Number(horasString[0]);
var horaDig2 = Number(horasString[1]);

var minutosString = String(minutos).split('');

var minutoDig1 = Number(minutosString[0]);
var minutoDig2 = Number(minutosString[1]);



// console.log(hora, minutos, segundos);
// console.log(minutos)
// console.log(minutosString)
// console.log("digito um: " + minutoDig1);
// console.log("digito dois: " + minutoDig2);

var listaHoras = [umaHora, duasHoras, tresHoras, quatroHoras, cincoHoras, seisHoras, seteHoras, oitoHoras, noveHoras];

var listaDigitoUm = [umDig1, doisDig1, tresDig1, quatroDig1, cincoDig1];

var listaDigitoDois = [umDig2, doisDig2, tresDig2, quatroDig2, cincoDig2, seisDig2, seteDig2, oitoDig2, noveDig2];


//horas

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

function maisDeNoveHoras(){
  $(".B01, .C01, .D01, .E01, .F01, .G01, .H01").toggleClass("preto");
}

//minuto digito 1
function umDig1(){
  $(".B11, .B12, .B13, .C11, .D11, .E11, .F11, .G11, .H11, .H12, .H13").toggleClass("preto");  
}

function doisDig1(){
  $(".C11, .D11, .E12, .E13, .F14, .G14").toggleClass("preto");  
}

function tresDig1(){
  $(".C11, .D11, .E12, .E13, .F11, .G11").toggleClass("preto"); 
}

function quatroDig1(){
  $(".B12, .B13, .E12, .E13, .F11, .G11, .H11, .H12, .H13").toggleClass("preto");  
}
function cincoDig1(){
  $(".C14, .D14, .E12, .E13, .F11, .G11").toggleClass("preto");  
}

//minuto digito 2

function umDig2(){
  $(".B16, .B17, .B18, .C16, .D16, .E16, .F16, .G16, .H16, .H17, .H18").toggleClass("preto");  
}
function doisDig2(){
   $(".C16, .D16, .E17, .E18, .F19, .G19").toggleClass("preto");  
}

function tresDig2(){
  $(".C16, .D16, .E17, .E18, .F16, .G16").toggleClass("preto"); 
}
function quatroDig2(){
  $(".B17, .B18, .E17, .E18, .F16, .G16, .H16, .H17, .H18").toggleClass("preto"); 
}

function cincoDig2(){
  $(".C19, .D19, .E17, .E18, .F16, .G16").toggleClass("preto");  
}

function seisDig2(){
  $(".C19, .D19, .E17, .E18").toggleClass("preto");   
}

function seteDig2(){
  $(".C16, .D16, .E16, .F16, .G16, .H16, .H17, .H18").toggleClass("preto"); 
}

function oitoDig2(){
  $(".E17, .E18").toggleClass("preto");    
}

function noveDig2(){
  $(".E17, .E18, .F16, .G16").toggleClass("preto");  
}


function painelDeHoras(){

  $(".B04, .B05, .B06, .B07, .B11, .B12, .B13, .B14, .B16, .B17, .B18, .B19, .C04, .C07, .C11, .C14, .C16, .C19, .D04, .D07, .D11, .D14, .D16, .D19, .D09, .E04, .E07, .E11, .E14, .E16, .E19, .F04, .F07, .F09, .F11, .F14, .F16, .F19, .G04, .G07, .G11, .G14, .G16, .G19, .H04, .H05, .H06, .H07, .H11, .H12, .H13, .H14, .H16, .H17, .H18, .H19, .L01, .L02, .L03, .L05, .L06, .L08, .L09, .L13, .L14, .L15, .L17, .L18, .L19, .M01, .M03, .M05, .M07, .M09, .M13, .M15, .M17, .M19, .N01, .N02, .N03, .N05, .N07, .N09, .N13, .N15, .N17, .N19, .O01, .O03, .O05, .O09, .O13, .O15, .O17, .O19, .P13, .P14, .P15, .P17, .P18, .P19").toggleClass("preto");  

  for(i = 0; i <= 9; i++){
    if(minutoDig1 === i + 1){
       listaDigitoUm[i]();
    }
    if(minutoDig2 === i + 1){
      listaDigitoDois[i]();
    }
  }

}


$("#clock").click(()=>{
    console.log("clock");
    painelDeHoras();
})