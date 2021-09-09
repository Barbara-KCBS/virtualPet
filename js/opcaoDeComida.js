var compararComida1 = 1;
var compararComida2 = false;

function opcaoDeComida(){
   
    if(compararComida1 == 1 && compararComida2 == false){
        hamburguer();
        macarrao();
    }
    if(compararComida1 == 1 && compararComida2 == true){
        coxa();
        hamburguer();
        compararComida2 = false;
        compararComida1 -= 1;
    }

    if(compararComida1 == 2){
        macarrao();
        sorvete();
    }
    if(compararComida1 == 3){
        sorvete();
        cenoura();
    }
    if(compararComida1 == 4){
        cenoura();
        maca();
    }
    if(compararComida1 == 5){
        maca();
        coxa();
        compararComida1 -= 5;
        compararComida2 = true;
    }

    compararComida1 += 1;
}