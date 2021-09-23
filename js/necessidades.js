function temperatura(){
    $(".A01, .A03, .A04, .A05, .B03, .B05, .B16, .C01, .C03, .C05, .D03, .D05, .D09, .D10, .D11, .D13, .D14, .D15, .D17, .D18, .D19, .E01, .E03, .E05, .E11, .E13, .E17, .F03, .F04, .F05, .F09, .F10, .F11, .F13, .F14, .F15, .F17, .G01, .G03, .G04, .G05, .G09, .G15, .G17, .H03, .H04, .H05, .H09, .H10, .H11, .H13, .H14, .H15, .H17, .H18, .H19, .I01, .I03, .I04, .I05, .J03, .J04, .J05, .K02, .K06, .L01, .L04, .L07, .M01, .M03, .M04, .M05, .M07, .N01, .N04, .N07, .O02, .O06, .P03, .P04, .P05").toggleClass("preto");	
}

function copo1(){
    $(".C04, .C05, .C06, .C07, .C08, .D04, .D05, .D06, .D07, .D08, .E04, .E05, .E06, .E07, .E08, .F04, .F05, .F06, .F07, .F08, .G05, .G06, .G07").toggleClass("preto");  
}
function copo2(){
    $(".C12, .C13, .C14, .C15, .C16, .D12, .D13, .D14, .D15, .D16, .E12, .E13, .E14, .E15, .E16, .F12, .F13, .F14, .F15, .F16, .G13, .G14, .G15").toggleClass("preto");  
}
function copo3(){
    $(".K04, .K05, .K06, .K07, .K08, .L04, .L05, .L06, .L07, .L08, .M04, .M05, .M06, .M07, .M08, .N04, .N05, .N06, .N07, .N08, .O05, .O06, .O07").toggleClass("preto"); 
}

function copo4(){
    $(".K12, .K13, .K14, .K15, .K16, .L12, .L13, .L14, .L15, .L16, .M12, .M13, .M14, .M15, .M16, .N12, .N13, .N14, .N15, .N16, .O13, .O14, .O15").toggleClass("preto");  
}


function sede(){
        $(".B03, .B09, .B11, .B17, .C03, .C09, .C11, .C17, .D03, .D09, .D11, .D17, .E03, .E09, .E11, .E17, .F03, .F09, .F11, .F17, .G03, .G04, .G08, .G09, .G11, .G12, .G16, .G17, .H04, .H05, .H06, .H07, .H08, .H12, .H13, .H14, .H15, .H16, .J03, .J09, .J11, .J17, .K03, .K09, .K11, .K17, .L03, .L09, .L11, .L17, .M03, .M09, .M11, .M17, .N03, .N09, .N11, .N17, .O03, .O04, .O08, .O09, .O11, .O12, .O16, .O17, .P04, .P05, .P06, .P07, .P08, .P12, .P13, .P14, .P15, .P16").toggleClass("preto");	
        
        if(bebida === 1){
            copo1();
        }
        if(bebida === 2){
            copo1();
            copo2();
        }
        if(bebida === 3){
            copo1();
            copo2();
            copo3();
        }
        if(bebida === 4){
            copo1();
            copo2();
            copo3();
            copo4();
        }
}


function fome(){
    $(".F02, .F03, .F04, .F05, .F06, .F07, .F08, .F09, .F11, .F12, .F13, .F14, .F15, .F16, .F17, .F18, .G03, .G04, .G05, .G06, .G07, .G08, .G12, .G13, .G14, .G15, .G16, .G17, .H04, .H05, .H06, .H07, .H13, .H14, .H15, .H16, .N02, .N03, .N04, .N05, .N06, .N07, .N08, .N09, .N11, .N12, .N13, .N14, .N15, .N16, .N17, .N18, .O03, .O04, .O05, .O06, .O07, .O08, .O12, .O13, .O14, .O15, .O16, .O17, .P04, .P05, .P06, .P07, .P13, .P14, .P15, .P16").toggleClass("preto");	 
}

function pesoEIdade(){
    $(".C11, .C13, .D11, .D13, .D15, .E11, .E13, .E14, .E17, .E18, .E19, .F11, .F13, .F15, .F17, .F19, .G11, .G13, .G15, .G17, .G18, .G19, .H19, .I03, .I04, .I05, .I06, .I07, .I08, .I09, .I17, .I18, .I19, .J02, .J10, .K01, .K11,.L01, .L04, .L08, .L11, .L19, .M01, .M11, .M19, .N01, .N04, .N05, .N06, .N07, .N08, .N11, .N19, .O02, .O10, .O19, .P03, .P04, .P05, .P06, .P07, .P08, .P09, .P19").toggleClass("preto");
}

function estudos(){
    $(".B02, .B03, .B04, .B05, .B06, .B07, .B08, .B09, .B10, .B11, .B12, .C04, .C05, .C06, .C07, .C08, .C09, .C13, .D03, .D10, .D13, .E02, .E11, .E13, .F02, .F05, .F08, .F11, .G02, .G11, .H02, .H05, .H06, .H07, .H08, .H11, .I03, .I10, .J04, .J05, .J06, .J07, .J08, .J09, .J12, .J13, .J14, .J15, .K12, .K15, .L12, .L18, .M12, .M17, .M18, .M19, .N12, .N18, .O12, .O15, .P12, .P13, .P14, .P15").toggleClass("preto");
}

function humor(){
    $(".B06, .B07, .B08, .B09, .B10, .B11, .B12, .B13, .B14, .C05, .C06, .C14, .C15, .D04, .D16, .E04, .E06, .E09, .E11, .E14, .E16, .F03, .F07, .F08, .F12, .F13, .F17, .G03, .G17, .H03, .H06, .H07, .H08, .H09, .H10, .H11, .H12, .H13, .H14, .H17, .I03, .I05, .I06, .I07, .I08, .I09, .I10, .I11, .I12, .I13, .I14, .I15, .I17, .J03, .J05, .J06, .J07, .J08, .J09, .J10, .J11, .J12, .J13, .J14, .J15, .J17, .K03, .K05, .K06, .K07, .K08, .K09, .K10, .K11, .K12, .K13, .K14, .K15, .K17, .L03, .L17, .M04, .M16, .N05, .N15, .O06, .O07, .O13, .O14, .P07, .P08, .P09, .P10, .P11, .P12, .P13").toggleClass("preto"); 
}

var contadorNecessidades = 0;
var ultimaNecessidade= false;
var mostrarNecessidade;
var necessidade;
var iniciarIntervaloNecessidades = false;
var contadorIntervaloNecessidade = 1;
var encerrarIntervaloNecessidade = false;
var escNecessidades = false;
var percorrerNecessidades = false;
var botaoDireitoNecessidades = false;


function necessidadesDoDino(){
     
    encerrarIntervaloNecessidade = false;

    if(mostrarNecessidade === false){
        return
    } 

    else{

        escNecessidades = true;

        if(iniciarIntervaloNecessidades == true){

            iniciarIntervaloNecessidades = false;

            var intervaloDaNecessidade = setInterval(() => {

                if(encerrarIntervaloNecessidade == true){
                    clearInterval(intervaloDaNecessidade);
                    ultimaNecessidade = false;
                }

                if(contadorIntervaloNecessidade == 10){
                    
                    iniciarIntervaloNecessidades = true;
                    ultimaNecessidade = false;
                    mostrarNecessidade = false;
                    contadorNecessidades = 0;

                    clearInterval(intervaloDaNecessidade);
                    if(luzDesligada === false){
                        telaInicial(dinoBebe, frameBebeMovimento1);
                    }
                    if(luzDesligada === true){
                        telaInicialApagada();
                    }
                    
                }

                contadorIntervaloNecessidade += 1;
            }, 1000);
        }

        if(botaoDireitoNecessidades ===  false){
            if(contadorNecessidades === 6){
                contadorNecessidades = 1;
            }
            else{
                contadorNecessidades += 1;
            }
        }
        if(botaoDireitoNecessidades === true){
            if(contadorNecessidades === 1){
                contadorNecessidades = 6;
            }
            else{
                contadorNecessidades -= 1;
            }

        }

        if(contadorNecessidades == 1){
            contadorIntervaloNecessidade = 1;
            desligarTodosOsPixels();
            humor();
            necessidade = "humor";
        }

        if(contadorNecessidades == 2){
            contadorIntervaloNecessidade = 1;
            desligarTodosOsPixels();
            temperatura();
            necessidade = "temperatura";
        }
    
        if(contadorNecessidades == 3){
            contadorIntervaloNecessidade = 1;
            desligarTodosOsPixels();
            sede();
            necessidade = "sede"
        }

        if(contadorNecessidades == 4){
            contadorIntervaloNecessidade = 1;
            desligarTodosOsPixels();
            fome();
            necessidade = "fome"
        }

        if(contadorNecessidades == 5){
            contadorIntervaloNecessidade = 1;
            desligarTodosOsPixels();
            pesoEIdade();
            necessidade = "peso e idade"
        }

        if(contadorNecessidades == 6){
            contadorIntervaloNecessidade = 1;
            desligarTodosOsPixels();
            estudos();
            necessidade = "estudar"
        }

    }
}

$(".selecao-esquerda").click(()=>{
    if(percorrerNecessidades === false){
        return
    }
    botaoDireitoNecessidades = false;
    necessidadesDoDino();  
});

$(".selecao-direita").click(() => {
    if(percorrerNecessidades === false){
        return
    }
    botaoDireitoNecessidades = true;
    necessidadesDoDino(); 
});

$("#esc").click(()=>{
    if(escNecessidades === false){
        return
    }
    else{
        contadorIntervaloNecessidade = 10;
        escNecessidades = false;
    }
});