// painel
var painelDeHoras = $(".D09, .F09"); 

//horas

var zeroHora = $(".B04, .B05, .B06, .B07, .C04, .C07, .D04, .D07, .E04, .E07, .F04, .F07, .G04, .G07, .H04, .H05, .H06, .H07");
var umaHora = $(".B07, .C07, .D07, .E07, .F07, .G07, .H07");
var duasHoras = $(".B04, .B05, .B06, .B07, .C07, .D07, .E04, .E05, .E06, .E07, .F04, .G04, .H04, .H05, .H06, .H07");
var tresHoras = $(".B04, .B05, .B06, .B07, .C07, .D07, .E04, .E05, .E06, .E07, .F07, .G07, .H04, .H05, .H06, .H07");
var quatroHoras = $(".B04, .B07, .C04, .C07, .D04, .D07, .E04, .E05, .E06, .E07,  .F07, .G07, .H07");
var cincoHoras =  $(".B04, .B05, .B06, .B07, .C04, .D04, .E04, .E05, .E06, .E07, .F07, .G07, .H04, .H05, .H06, .H07");
var seisHoras = $(".B04, .B05, .B06, .B07, .C04, .D04, .E04, .E05, .E06, .E07, .F04, .F07, .G04, .G07, .H04, .H05, .H06, .H07");
var seteHoras = $(".B04, .B05, .B06, .B07, .C07, .D07,  .E07, .F07, .G07, .H07");
var oitoHoras = $(".B04, .B05, .B06, .B07, .C04, .C07, .D04, .D07, .E04, .E05, .E06, .E07, .F04, .F07, .G04, .G07, .H04, .H05, .H06, .H07");
var noveHoras = $(".B04, .B05, .B06, .B07, .C04, .C07, .D04, .D07, .E04, .E05, .E06, .E07, .F07, .G07, .H04, .H05, .H06, .H07");

var maisDeNoveHoras = $(".B01, .C01, .D01, .E01, .F01, .G01, .H01");
var desligarPixelsHoraDig2 = $(".B04, .B05, .B06, .B07, .C04, .C07, .D04, .D07, .E04, .E05, .E06, .E07, .F04, .F07, .G04, .G07, .H04, .H05, .H06, .H07");


const horaFramesDigito2 = [zeroHora, umaHora, duasHoras, tresHoras, quatroHoras, cincoHoras, seisHoras, seteHoras, oitoHoras, noveHoras];


//minuto digito 1

var minutoZeroDig1 = $(".B11, .B12, .B13, .B14, .C11, .C14, .D11, .D14, .E14, .E11, .F11, .F14, .G11, .G14, .H11, .H12, .H13, .H14");
var minutoUmDig1 = $(".B14, .C14, .D14, .E14, .F14, .G14, .H14");
var minutoDoisDig1 = $(".B11, .B12, .B13, .B14, .C14, .D14, .E12, .E13, .E14, .E11, .F11, .G11, .H11, .H12, .H13, .H14");
var minutoTresDig1 = $(".B11, .B12, .B13, .B14, .C14, .D14, .E12, .E13, .E14, .E11, .F14, .G14, .H11, .H12, .H13, .H14");
var minutoQuatroDig1 = $(".B11, .B14, .C11, .C14, .D11, .D14, .E14, .E11, .E12, .E13, .F14, .G14, .H14");
var minutoCincoDig1 = $(".B11, .B12, .B13, .B14, .C11, .D11, .E12, .E13, .E14, .E11, .F14, .G14, .H11, .H12, .H13, .H14");
var desligarPixelsMinutosDig1 = $(".B11, .B12, .B13, .B14, .C11, .C14, .D11, .D14, .E12, .E13, .E14, .E11, .F11, .F14, .G11, .G14, .H11, .H12, .H13, .H14");


const minutosFramesDigito1 = [minutoZeroDig1, minutoUmDig1, minutoDoisDig1, minutoTresDig1, minutoQuatroDig1, minutoCincoDig1];

//minuto digito 2


var minutoZeroDig2 = $(".B16, .B17, .B18, .B19, .C16, .C19, .D16, .D19, .E16, .E19, .F16, .F19, .G16, .G19, .H16, .H17, .H18, .H19");
var minutoUmDig2 = $(".B19, .C19, .D19, .E19, .F19, .G19, .H19");
var minutoDoisDig2 = $(".B16, .B17, .B18, .B19, .C19, .D19, .E16, .E17, .E18,  .E19, .F16, .G16, .H16, .H17, .H18, .H19");
var minutoTresDig2 = $(".B16, .B17, .B18, .B19, .C19, .D19, .E16, .E17, .E18, .E19, .F19, .G19, .H16, .H17, .H18, .H19");
var minutoQuatroDig2 = $(".B16, .B19, .C16, .C19, .D16, .D19, .E16, .E17, .E18, .E19, .F19, .G19, .H19");
var minutoCincoDig2 = $(".B16, .B17, .B18, .B19, .C16, .D16, .E16, .E17, .E18, .E19, .F19, .G19, .H16, .H17, .H18, .H19");
var minutoSeisDig2 = $(".B16, .B17, .B18, .B19, .C16, .D16, .E16, .E17, .E18, .E19, .F16, .F19, .G16, .G19, .H16, .H17, .H18, .H19");
var minutoSeteDig2 = $(".B16, .B17, .B18, .B19, .C19, .D19, .E19, .F19, .G19, .H19");
var minutoOitoDig2 = $(".B16, .B17, .B18, .B19, .C16, .C19, .D16, .D19, .E16, .E17, .E18, .E19, .F16, .F19, .G16, .G19, .H16, .H17, .H18, .H19");
var minutoNoveDig2 = $(".B16, .B17, .B18, .B19, .C16, .C19, .D16, .D19, .E16, .E17, .E18, .E19, .F19, .G19, .H16, .H17, .H18, .H19");
var desligarPixelsMinutosDig2 = $(".B16, .B17, .B18, .B19, .C16, .C19, .D16, .D19, .E16, .E17, .E18, .E19, .F16, .F19, .G16, .G19, .H16, .H17, .H18, .H19");

const minutosFramesDigito2 = [minutoZeroDig2, minutoUmDig2, minutoDoisDig2, minutoTresDig2, minutoQuatroDig2, minutoCincoDig2, minutoSeisDig2, minutoSeteDig2, minutoOitoDig2, minutoNoveDig2];

// SEGUNDOS DIGITO 1

var segundosZeroDig1 = $(" .L13, .L14, .L15, .M13, .M15, .N13, .N15, .O13, .O15, .P13, .P14, .P15");
var segundosUmDig1 = $(".L15, .M15, .N15, .O15, .P15");
var segundosDoisDig1 = $(" .L13, .L14, .L15, .M15, .N13, .N14, .N15, .O13, .P13, .P14, .P15");
var segundosTresDig1 = $(" .L13, .L14, .L15, .M15, .N13, .N14, .N15, .O15, .P13, .P14, .P15");
var segundosQuatroDig1 = $(".L13, .L15, .M13, .M15, .N13, .N14, .N15, .O15, .P15");
var segundosCincoDig1 = $(" .L13, .L14, .L15, .M13, .N13, .N14, .N15, .O15, .P13, .P14, .P15");

var desligarPixelsSegundosDig1 = $(" .L13, .L14, .L15, .M13, .M15, .N13, .N14, .N15, .O13, .O15, .P13, .P14, .P15");

const segundosFramesDigito1 = [segundosZeroDig1, segundosUmDig1, segundosDoisDig1, segundosTresDig1, segundosQuatroDig1, segundosCincoDig1];

// SEGUNDOS DIGITO 2

var segundosZeroDig2 = $(".L17, .L18, .L19, .M17, .M19, .N17, .N19, .O17, .O19, .P17, .P18, .P19");
var segundosUmDig2 = $(".L19, .M19, .N19, .O19, .P19");
var segundosDoisDig2 = $(".L17, .L18, .L19, .M19, .N17, .N18, .N19, .O17, .P17, .P18, .P19");
var segundosTresDig2 = $(".L17, .L18, .L19, .M19, .N17, .N18, .N19, .O19, .P17, .P18, .P19");
var segundosQuatroDig2 = $(".L17, .L19, .M17, .M19, .N17, .N18, .N19, .O19, .P19");
var segundosCincoDig2 = $(".L17, .L18, .L19, .M17, .N17, .N18, .N19, .O19, .P17, .P18, .P19");
var segundosSeisDig2 = $(".L17, .L18, .L19, .M17, .N18, .N17, .N19, .O17, .O19, .P17, .P18, .P19");
var segundosSeteDig2 = $(".L17, .L18, .L19, .M19, .N19, .O19, .P19");
var segundosOitoDig2 = $(".L17, .L18, .L19, .M17, .M19, .N17, .N18, .N19, .O17, .O19, .P17, .P18, .P19");
var segundosNoveDig2 = $(".L17, .L18, .L19, .M17, .M19, .N17, .N18, .N19, .O19, .P17, .P18, .P19");
var desligarPixelsSegundosDig2 = $(".L17, .L18, .L19, .M17, .M19, .N17, .N18, .N19, .O17, .O19, .P17, .P18, .P19");

const segundosFramesDigito2 = [segundosZeroDig2, segundosUmDig2, segundosDoisDig2, segundosTresDig2, segundosQuatroDig2, segundosCincoDig2, segundosSeisDig2, segundosSeteDig2, segundosOitoDig2, segundosNoveDig2];

// PERIODO

var primeiroPeriodo = $(".L01, .L02, .L03, .L05, .L06, .L08, .L09, .M01, .M03, .M05, .M07, .M09, .N01, .N02, .N03, .N05, .N07, .N09, .O01, .O03, .O05, .O09");
var segundoPeriodo = $(".L01, .L02, .L03, .L05, .L06, .L08, .L09, .M01, .M03, .M05, .M07, .M09, .N01, .N02, .N03, .N05, .N07, .N09, .O01, .O05, .O09");

export {
    painelDeHoras,  
    horaFramesDigito2, 
    minutosFramesDigito1, 
    minutosFramesDigito2, 
    segundosFramesDigito1, 
    segundosFramesDigito2, 
    primeiroPeriodo, 
    segundoPeriodo,
    maisDeNoveHoras,
    desligarPixelsHoraDig2,
    desligarPixelsMinutosDig1,
    desligarPixelsMinutosDig2,
    desligarPixelsSegundosDig1,
    desligarPixelsSegundosDig2
}