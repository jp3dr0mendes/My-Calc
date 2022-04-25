var aux = 0
var valores = []
var func = 0
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
    console.log(valores[valores.length -  1])
    //console.log(valores[valores.length-  2])
}

//criando função de identificar a operação a ser executada

function operations(b){
    func = b
    
    console.log(func)
    
    aux++
        
    pegaValor()
    
    let a = document.querySelector('input[name="res"]')
    a.value = ""
}
//criando funções auxiliares

function soma (a,b){
    return a+b
}

function sub (a,b){
    return a-b
}

function mult (a,b){
    return a*b
}

function div (a,b){
    return a/b
}

//criando função para alertar o valor do campo visor

function mostraValor () {

    pegaValor()

    console.log("valores no array")

    console.log("-----")

    console.log(valores.length)

    console.log("------")

    for (let i = 0; i < valores.length; i++){
        console.log(valores[i])
    }

    console.log("-------")

    if (valores.length = 1){
        
    } else if(valores.lenght = 2){
        switch (b){
            case '+':
                valores.push(valores[0] + valores[1])
            case '-':
                valores.push(valores[0] - valores[1])
            case '*':
                valores.push(valores[0] * valores[1])
            case '/':
                valores.push(valores[0] / valores[1])
        }
    } else {
        switch (b){
            case '+':
                valores.push(valores[valores.length - 1] + valores[valores.length - 2])
            case '-':
                valores.push(valores[valores.length - 1] - valores[valores.length - 2])
            case '*':
                valores.push(valores[valores.length - 1] * valores[valores.length - 2])
            case '/':
                valores.push(valores[valores.length - 1] / valores[valores.length - 2])
        }
    }

    res = valores[valores.length - 1]
    console.log(valores.length - 1)

    let a = document.querySelector('input[name="res"]')

    if (res){
        a.value = res  
    } else {
        a.value = 0
    }    
    console.log(a.value)

    aux = 0
}
