for(let i1 = 1; i1 <= 16; i1++){
    let linha = `linha linha${i1}`;
    $(".main").append($("<div>", {class: linha}));       
}

for(let i2 = 1; i2 <= 16; i2++){
    let coluna = `.linha${i2}`
    for(let i3 = 1; i3 <= 19; i3++){                      
        if(i2 < 26){ var letra = 64 } else { var letra = 71}
        let colunaClasse;
        if(i3 < 10){
            colunaClasse = `pixel ${String.fromCodePoint(letra + i2)}0${i3}`;  
        } else {
            colunaClasse = `pixel ${String.fromCodePoint(letra + i2)}${i3}`;   
        }
        
        $(coluna).append($("<div>", {class: colunaClasse}));          
    }           
}