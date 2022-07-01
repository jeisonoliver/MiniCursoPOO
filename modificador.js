function FcapitalizarNova (colecao, atributo){
    if (typeof colecao[0] == 'object'){
        var resultado = colecao.map(function(obj){
            var letraInicial = obj[atributo].charAt(0).toUpperCase();
            var restoTexto = obj[atributo].slice(1);
            obj[atributo] = letraInicial + restoTexto;
            return obj;
        });
        console.log(resultado);
    }
    else {
       FCapitalizar(colecao);
    }
}

function FCapitalizar(vetor){
    var modificado = [];

    for (var i = 0; i < vetor.length; i++) {
        var letraInicial = vetor[i].charAt(0).toUpperCase();
        var restoTexto = vetor[i].slice(1);
        var resultado = letraInicial + restoTexto;
        modificado[i] = resultado;
    }
    return modificado;
}


function FOrdenar(vetor){
    return vetor.sort(function(a,b){
        return a.localeCompare(b);
    });
}

function FCaixaAlta(vetor){
    var modificado = [];

    for (var i = 0; i < vetor.length; i++) {
        modificado[i] = vetor[i].toUpperCase();
    }
    return modificado;
} 
    

export default {
    capitalizarNova : FcapitalizarNova,
    capitalizar : FCapitalizar,
    ordenar : FOrdenar,
    caixaAlta : FCaixaAlta
}
