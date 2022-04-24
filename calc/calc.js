//criando a função para inserir o valor dos botões no visor

function insert (a){
    let aux = document.getElementById("resultado")
    aux.value += a
    console.log(a)
    //console.log(aux)
}

var visorContent = document.getElementById("resultado")

var res = function operations (visorContent){

}

//criando função para alertar o valor do campo visor

function mostraValor (res){
    let aux = document.querySelector('input[name="res"]')

    if (res){
        aux.value = res  
    } else {
        aux.value =""
    }    
    console.log(aux.value)
}

