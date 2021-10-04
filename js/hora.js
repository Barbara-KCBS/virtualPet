




// console.log(hora, minutos, segundos);
// console.log(minutos)
// console.log(minutosString)
// console.log("digito um: " + minutoDig1);
// console.log("digito dois: " + minutoDig2);

const horaDigito2Frames = [zeroHora, umaHora, duasHoras, tresHoras, quatroHoras, cincoHoras, seisHoras, seteHoras, oitoHoras, noveHoras];

const minutosDigito1Frames = [minutoZeroDig1, minutoUmDig1, minutoDoisDig1, minutoTresDig1, minutoQuatroDig1, minutoCincoDig1];
const minutosDigito2Frames = [minutoZeroDig2, minutoUmDig2, minutoDoisDig2, minutoTresDig2, minutoQuatroDig2, minutoCincoDig2, minutoSeisDig2, minutoSeteDig2, minutoOitoDig2, minutoNoveDig2];

const segundosDigito1Frames = [segundosZeroDig1, segundosUmDig1, segundosDoisDig1, segundosTresDig1, segundosQuatroDig1, segundosCincoDig1];
const segundosDigito2Frames = [segundosZeroDig2, segundosUmDig2, segundosDoisDig2, segundosTresDig2, segundosQuatroDig2, segundosCincoDig2, segundosSeisDig2, segundosSeteDig2, segundosOitoDig2, segundosNoveDig2];


// painel

function painelDeHoras(){
  $(".D09, .F09").addClass("preto");  

}

//horas
function zeroHora(){
  desligarPixelsHoraDig2();
  $(".B04, .B05, .B06, .B07, .C04, .C07, .D04, .D07, .E04, .E07, .F04, .F07, .G04, .G07, .H04, .H05, .H06, .H07").addClass("preto");
}

function umaHora(){
  desligarPixelsHoraDig2();
  $(".B07, .C07, .D07, .E07, .F07, .G07, .H07").addClass("preto");
}

function duasHoras(){
  desligarPixelsHoraDig2();
  $(".B04, .B05, .B06, .B07, .C07, .D07, .E04, .E05, .E06, .E07, .F04, .G04, .H04, .H05, .H06, .H07").addClass("preto"); 
}
function tresHoras(){
  desligarPixelsHoraDig2();
  $(".B04, .B05, .B06, .B07, .C07, .D07, .E04, .E05, .E06, .E07, .F07, .G07, .H04, .H05, .H06, .H07").addClass("preto"); 
} 

function quatroHoras(){
  desligarPixelsHoraDig2();
  $(".B04, .B07, .C04, .C07, .D04, .D07, .E04, .E05, .E06, .E07,  .F07, .G07, .H07").addClass("preto");    
}

function cincoHoras(){
  desligarPixelsHoraDig2();
  $(".B04, .B05, .B06, .B07, .C04, .D04, .E04, .E05, .E06, .E07, .F07, .G07, .H04, .H05, .H06, .H07").addClass("preto");
}
function seisHoras(){
  desligarPixelsHoraDig2();
  $(".B04, .B05, .B06, .B07, .C04, .D04, .E04, .E05, .E06, .E07, .F04, .F07, .G04, .G07, .H04, .H05, .H06, .H07").addClass("preto");
}

function seteHoras(){
  desligarPixelsHoraDig2();
  $(".B04, .B05, .B06, .B07, .C07, .D07,  .E07, .F07, .G07, .H07").addClass("preto");
}

function oitoHoras(){
  desligarPixelsHoraDig2();
  $(".B04, .B05, .B06, .B07, .C04, .C07, .D04, .D07, .E04, .E05, .E06, .E07, .F04, .F07, .G04, .G07, .H04, .H05, .H06, .H07").addClass("preto");
}

function noveHoras(){
  desligarPixelsHoraDig2();
  $(".B04, .B05, .B06, .B07, .C04, .C07, .D04, .D07, .E04, .E05, .E06, .E07, .F07, .G07, .H04, .H05, .H06, .H07").addClass("preto");
}

function maisDeNoveHoras(){
  $(".B01, .C01, .D01, .E01, .F01, .G01, .H01").addClass("preto");
}

function desligarPixelsHoraDig2(){
  $(".B04, .B05, .B06, .B07, .C04, .C07, .D04, .D07, .E04, .E05, .E06, .E07, .F04, .F07, .G04, .G07, .H04, .H05, .H06, .H07").removeClass("preto");
}

//minuto digito 1

function minutoZeroDig1(){
  desligarPixelsMinutosDig1();
  $(".B11, .B12, .B13, .B14, .C11, .C14, .D11, .D14, .E14, .E11, .F11, .F14, .G11, .G14, .H11, .H12, .H13, .H14").addClass("preto");  
}

function minutoUmDig1(){
  desligarPixelsMinutosDig1();
  $(".B14, .C14, .D14, .E14, .F14, .G14, .H14").addClass("preto");  
}

function minutoDoisDig1(){
  desligarPixelsMinutosDig1();
  $(".B11, .B12, .B13, .B14, .C14, .D14, .E12, .E13, .E14, .E11, .F11, .G11, .H11, .H12, .H13, .H14").addClass("preto");   
}

function minutoTresDig1(){
  desligarPixelsMinutosDig1();
  $(".B11, .B12, .B13, .B14, .C14, .D14, .E12, .E13, .E14, .E11, .F14, .G14, .H11, .H12, .H13, .H14").addClass("preto");  
}

function minutoQuatroDig1(){
  desligarPixelsMinutosDig1();
  $(".B11, .B14, .C11, .C14, .D11, .D14, .E14, .E11, .E12, .E13, .F14, .G14, .H14").addClass("preto");   
}
function minutoCincoDig1(){
  desligarPixelsMinutosDig1();
  $(".B11, .B12, .B13, .B14, .C11, .D11, .E12, .E13, .E14, .E11, .F14, .G14, .H11, .H12, .H13, .H14").addClass("preto");   
}

function desligarPixelsMinutosDig1(){
  $(".B11, .B12, .B13, .B14, .C11, .C14, .D11, .D14, .E12, .E13, .E14, .E11, .F11, .F14, .G11, .G14, .H11, .H12, .H13, .H14").removeClass("preto");  

}

//minuto digito 2


function minutoZeroDig2(){
  desligarPixelsMinutosDig2();
  $(".B16, .B17, .B18, .B19, .C16, .C19, .D16, .D19, .E16, .E19, .F16, .F19, .G16, .G19, .H16, .H17, .H18, .H19").addClass("preto");  
}


function minutoUmDig2(){
  desligarPixelsMinutosDig2();
  $(".B16, .B17, .B18, .B19, .C19, .D19, .E16, .E17, .E18, .E19, .F16, .G16, .H16, .H17, .H18, .H19").addClass("preto");   
}

function minutoDoisDig2(){
  desligarPixelsMinutosDig2();
  $(".B16, .B17, .B18, .B19, .C19, .D19, .E16, .E17, .E18,  .E19, .F16, .G16, .H16, .H17, .H18, .H19").addClass("preto");   
}

function minutoTresDig2(){
  desligarPixelsMinutosDig2();
  $(".B16, .B17, .B18, .B19, .C19, .D19, .E16, .E17, .E18, .E19, .F19, .G19, .H16, .H17, .H18, .H19").addClass("preto");   
}
function minutoQuatroDig2(){
  desligarPixelsMinutosDig2();
  $(".B16, .B19, .C16, .C19, .D16, .D19, .E16, .E17, .E18, .E19, .F19, .G19, .H19").addClass("preto");  
}

function minutoCincoDig2(){
  desligarPixelsMinutosDig2();
  $(".B16, .B17, .B18, .B19, .C16, .D16, .E16, .E17, .E18, .E19, .F19, .G19, .H16, .H17, .H18, .H19").addClass("preto");  
}

function minutoSeisDig2(){
  desligarPixelsMinutosDig2();
  $(".B16, .B17, .B18, .B19, .C16, .D16, .E16, .E17, .E18, .E19, .F16, .F19, .G16, .G19, .H16, .H17, .H18, .H19").addClass("preto");  
}

function minutoSeteDig2(){
  desligarPixelsMinutosDig2();
  $(".B16, .B17, .B18, .B19, C19, .D19, .E19, .F19, .G19, .H19").addClass("preto");  
}

function minutoOitoDig2(){
  desligarPixelsMinutosDig2();
  $(".B16, .B17, .B18, .B19, .C16, .C19, .D16, .D19, .E16, .E17, .E18, .E19, .F16, .F19, .G16, .G19, .H16, .H17, .H18, .H19").addClass("preto");  
}

function minutoNoveDig2(){
  desligarPixelsMinutosDig2();
  $(".B16, .B17, .B18, .B19, .C16, .C19, .D16, .D19, .E16, .E17, .E18, .E19, .F19, .G19, .H16, .H17, .H18, .H19").addClass("preto");  
}

function desligarPixelsMinutosDig2(){
  $(".B16, .B17, .B18, .B19, .C16, .C19, .D16, .D19, .E16, .E17, .E18, .E19, .F16, .F19, .G16, .G19, .H16, .H17, .H18, .H19").removeClass("preto");  
}

// SEGUNDOS DIGITO 1

function segundosZeroDig1(){
  desligarPixelsSegundosDig1();
  $(" .L13, .L14, .L15, .M13, .M15, .N13, .N15, .O13, .O15, .P13, .P14, .P15").addClass("preto");  
}
function segundosUmDig1(){
  desligarPixelsSegundosDig1();
  $(".L15, .M15, .N15, .O15, .P15").addClass("preto");  
}
function segundosDoisDig1(){
  desligarPixelsSegundosDig1();
  $(" .L13, .L14, .L15, .M15, .N13, .N14, .N15, .O13, .P13, .P14, .P15").addClass("preto");  
}
function segundosTresDig1(){
  desligarPixelsSegundosDig1();
  $(" .L13, .L14, .L15, .M15, .N13, .N14, .N15, .O15, .P13, .P14, .P15").addClass("preto");  
}
function segundosQuatroDig1(){
  desligarPixelsSegundosDig1();
  $(".L13, .L15, .M13, .M15, .N13, .N14, .N15, .O15, .P15").addClass("preto");  
}
function segundosCincoDig1(){
  desligarPixelsSegundosDig1();
  $(" .L13, .L14, .L15, .M13, .N13, .N14, .N15, .O15, .P13, .P14, .P15").addClass("preto");  
}

function desligarPixelsSegundosDig1(){
  $(" .L13, .L14, .L15, .M13, .M15, .N13, .N14, .N15, .O13, .O15, .P13, .P14, .P15").removeClass("preto");
}

// SEGUNDOS DIGITO 2

function segundosZeroDig2(){
  desligarPixelsSegundosDig2();
  $(".L17, .L18, .L19, .M17, .M19, .N17, .N19, .O17, .O19, .P17, .P18, .P19").addClass("preto");  
}
function segundosUmDig2(){
  desligarPixelsSegundosDig2();
  $(".L19, .M19, .N19, .O19, .P19").addClass("preto");  
}
function segundosDoisDig2(){
  desligarPixelsSegundosDig2();
  $(".L17, .L18, .L19, .M19, .N17, .N18, .N19, .O17, .P17, .P18, .P19").addClass("preto");  
}

function segundosTresDig2(){
  desligarPixelsSegundosDig2();
  $(".L17, .L18, .L19, .M19, .N17, .N18, .N19, .O19, .P17, .P18, .P19").addClass("preto");  
}

function segundosQuatroDig2(){
  desligarPixelsSegundosDig2();
  $(".L17, .L19, .M17, .M19, .N17, .N18, .N19, .O19, .P19").addClass("preto");  
}

function segundosCincoDig2(){
  desligarPixelsSegundosDig2();
  $(".L17, .L18, .L19, .M17, .N17, .N18, .N19, .O19, .P17, .P18, .P19").addClass("preto");  
}


function segundosSeisDig2(){
  desligarPixelsSegundosDig2();
  $(".L17, .L18, .L19, .M17, .N18, .N17, .N19, .O17, .O19, .P17, .P18, .P19").addClass("preto");  
}

function segundosSeteDig2(){
  desligarPixelsSegundosDig2();
  $(".L17, .L18, .L19, .M19, .N19, .O19, .P19").addClass("preto");  
}

function segundosOitoDig2(){
  desligarPixelsSegundosDig2();
  $(".L17, .L18, .L19, .M17, .M19, .N17, .N18, .N19, .O17, .O19, .P17, .P18, .P19").addClass("preto");  
}

function segundosNoveDig2(){
  desligarPixelsSegundosDig2();
  $(".L17, .L18, .L19, .M17, .M19, .N17, .N18, .N19, .O19, .P17, .P18, .P19").addClass("preto");  
}

function desligarPixelsSegundosDig2(){
  $(".L17, .L18, .L19, .M17, .M19, .N17, .N18, .N19, .O17, .O19, .P17, .P18, .P19").removeClass("preto");  
}

// PERIODO

function primeiroPeriodo(){
  $(".L01, .L02, .L03, .L05, .L06, .L08, .L09, .M01, .M03, .M05, .M07, .M09, .N01, .N02, .N03, .N05, .N07, .N09, .O01, .O03, .O05, .O09").addClass("preto");  

}
function segundoPeriodo(){
  $(".L01, .L02, .L03, .L05, .L06, .L08, .L09, .M01, .M03, .M05, .M07, .M09, .N01, .N02, .N03, .N05, .N07, .N09, .O01, .O05, .O09").addClass("preto");  

}

function painelDoRelogio(){
    const data = new Date();
    const hora = data.getHours();
    const minutos = data.getMinutes();
    const segundos = data.getSeconds();

    let horasString = String(hora).split('');
    let horaDig1 = Number(horasString[0]);
    let horaDig2 = Number(horasString[1]);

    let minutosString = String(minutos).split('');
    let minutoDig1 = Number(minutosString[0]);
    let minutoDig2 = Number(minutosString[1]);

    let segundosString = String(segundos).split('');
    let segundoDig1 = Number(segundosString[0]);
    let segundoDig2 = Number(segundosString[1]);

    if(hora <= 12){ primeiroPeriodo() } else{ segundoPeriodo() };

    if(horasString.length === 1){
      horaDigito2Frames[horas]();
    } else {
      maisDeNoveHoras();
      horaDigito2Frames[horaDig2]();
    }
    if(minutosString.length === 1){
      minutoZeroDig1();
      minutosDigito2Frames[minutos]();
    } else {
      minutosDigito1Frames[minutoDig1]();
      minutosDigito2Frames[minutoDig2]();
    }
    if(segundosString.length === 1){
      segundosZeroDig1();
      segundosDigito2Frames[segundos]();
    } else {
      console.log("entrou")
      segundosDigito1Frames[segundoDig1]();
      segundosDigito2Frames[segundoDig2]();
    }

}

function mostrarPainelDoRelogio(){
  painelDeHoras();
  setInterval(painelDoRelogio, 1000);
}

mostrarPainelDoRelogio();


$("#clock").click(()=>{
    console.log("clock");
    painelDeHoras();
})