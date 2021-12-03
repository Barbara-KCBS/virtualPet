var inicioDoJogo = $(".C06, .C07, .C09, .C10, .D05, .D08, .D11, .E05, .E11, .F06, .F10, .G07, .G09, .G11, .G12, .G14, .G15, .H08, .H10,  .H11, .H12, .H13, .H14, .H15, .H16, .I10,  .I11, .I12, .I13, .I14, .I15, .I16, .J11, .J12, .J13, .J14, .J15, .K12, .K13, .K14, .L13, .K06, .K07, .K09,.K10, .L05, .L08, .L11, .M05, .M11, .N06, .N10, .O07, .O09, .P08");

//jogador
var jogadorPapel = $(".D03, .D04, .E02, .E05, .E06, .E07, .E08, .F01, .F02, .F09, .G06, .G07, .G08, .G09, .H09, .I06, .I07, .I08, .I09, .J09, .K06, .K07, .K08, .K09, .L01, .L02, .L09, .M03, .M04, .M05, .M06, .M07, .M08");
var jogadorPedra = $(".D03, .D04, .E02, .E05, .E06, .F01, .F02, .F07, .G06, .G07, .H07, .I06, .I07, .J07, .K06, .K07, .L01, .L02, .L07, .M03, .M04, .M05, .M06");
var jogadorTesoura = $(".D03, .D04, .E02, .E05, .F01, .F02, .F06, .F07, .F08, .F09, .F10, .G10, .H06, .H07, .H08, .H09, .I10, .J06, .J07, .J08, .J09, .J10, .K06, .L01, .L02, .L06, .M03, .M04, .M05");

var lancesDoJogadorFrames = [jogadorPapel, jogadorPedra, jogadorTesoura];

//dino
var dinoPapel = $(".D14, .D15, .E14, .E15, .F17, .F18, .G13, .G14, .G16, .G17, .G18, .G19, .H13, .H14, .H16, .H17, .H18, .H19, .I16, .I17, .I18, .I19, .J13, .J14, .J16, .J17, .J18, .J19, .K13, .K14, .K16, .K17, .K18, .K19, .L17, .L18, .M14, .M15, .N14, .N15");
var dinoPedra = $(".F17, .F18, .G16, .G17, .G18, .G19, .H16, .H17, .H18, .H19, .I16, .I17, .I18, .I19, .J16, .J17, .J18, .J19, .K16, .K17, .K18, .K19, .L17, .L18");
var dinoTesoura = $(".F17, .F18, .G13, .G14, .G16, .G17, .G18, .G19, .H13, .H14, .H16, .H17, .H18, .H19, .I16, .I17, .I18, .I19, .J13, .J14, .J16, .J17, .J18, .J19, .K13, .K14, .K16, .K17, .K18, .K19, .L17, .L18");

var lancesDoDinoFrames = [ dinoPapel, dinoPedra, dinoTesoura ]


export { inicioDoJogo, lancesDoJogadorFrames, lancesDoDinoFrames }