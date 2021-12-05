function percorreOpcoesAhDireita(atividadeAhSerPercorrida, contador, receberNovoValor, quantidadeDeOpcoes){
    if(contador === 0){
        contador = quantidadeDeOpcoes;
    }
    else{
        contador--;
    }
    receberNovoValor(contador)
    atividadeAhSerPercorrida();
}

export { percorreOpcoesAhDireita }