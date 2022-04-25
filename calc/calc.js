var aux = 0
var valores = []
var func = ""
var res = 0

//criando a função para inserir o valor dos botões no visor

function insert (a){
    let aux = document.getElementById("resultado")
    aux.value += a
    console.log(a)
    //console.log(aux)
}

// criando uma função de pegar valores do input

function pegaValor(){
    let cont = document.getElementById("resultado").value
    console.log(cont)
    valores.push(cont)
}

//criando função de identificar a operação a ser executada

function operations(b){
    func = b
    console.log(func)
    aux++
    console.log(aux)
    pegaValor()
    let a = document.querySelector('input[name="res"]')
    a.value =""
    if(valores.lenght != 0){

    }
}

//criando função para alertar o valor do campo visor

function mostraValor (res){
    let a = document.querySelector('input[name="res"]')

    if (res){
        a.value = res  
    } else {
        a.value =""
    }    
    console.log(a.value)

    aux = 0
}

