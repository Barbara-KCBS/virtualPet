function percorreOpcoesAhEsquerda(atividadeAhSerPercorrida, contador, receberNovoValor, quantidadeDeOpcoes){
    if(contador === quantidadeDeOpcoes){
        contador = 0;
    }
    else{
        contador++;
    }
    receberNovoValor(contador)
    atividadeAhSerPercorrida();
}

export { percorreOpcoesAhEsquerda }