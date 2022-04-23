//criando a função para inserir o valor dos botões no visor

function insert (a){
    let aux = document.getElementById("resultado")
    aux.value += a
    console.log(a)
    console.log(aux)
}



//criando função para alertar o valor do campo visor

function mostraValor (res){
    let aux = document.querySelector('input[name="res"]')

    aux.value = res

    console.log(aux.value)
}

