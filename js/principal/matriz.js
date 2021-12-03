export function criarMatriz() {

    for(let i1 = 1; i1 <= 16; i1++){
        let linhaClasse = `linha linha${i1}`;
        $(".main").append($("<div>", {class: linhaClasse}));       
    }

    for(let i2 = 1; i2 <= 16; i2++){
        let linha = `.linha${i2}`
        for(let i3 = 1; i3 <= 38; i3++){                      
            if(i2 < 26){ var letra = 64 } else { var letra = 71}
            let colunaClasse;
            let texto;
            if(i3 < 10){
                colunaClasse = `pixel ${String.fromCodePoint(letra + i2)}0${i3}`; 
                texto = `.${String.fromCodePoint(letra + i2)}0${i3}`
                $(linha).append($("<div>", {class: colunaClasse})); 
                // $(texto).text(texto);
            } 
            if(i3 >= 10 && i3 <=19) {
                colunaClasse = `pixel ${String.fromCodePoint(letra + i2)}${i3}`;
                $(linha).append($("<div>", {class: colunaClasse})); 
                texto = `.${String.fromCodePoint(letra + i2)}${i3}`
                // $(texto).text(texto);
                
            }
            if(i3 > 19){
                $(linha).append("<div>");
            }
                            
        }           
    }
}

