function insert (){
    let w = document.getElementById("button1")
    let aux = document.getElementById("resultado")

    console.log(w)
    console.log(aux)
}


insert()

let aux = document.querySelector('input[name="res"]')

console.log(aux.value)

//criando função para alertar o valor do campo visor

function mostraValor (){
    let aux = document.querySelector('input[name="res"]')

    aux.value = 2

    console.log(aux.value)
}

mostraValor()