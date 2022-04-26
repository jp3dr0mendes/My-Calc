var aux = 0
var valores = []
var func = 0

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
    console.log("valor do input")
    console.log(cont)
    valores.push(cont)
    console.log("valor do ultimo elemento do array")
    console.log(valores[valores.length -  1])
}

//criando função de identificar a operação a ser executada

function operations(b){
    func = b

    /*switch (b) {
        case "+":
            func = 1;
            break;
        case "-":
            func = 2;
            break;
        case "*":
            func = 3;
        case "/":
            func = 4;
            break;
        default:

        console.log(func)
    }*/
    
    console.log(func)
    
    aux++
        
    pegaValor()
    
    let a = document.querySelector('input[name="res"]')
    a.value = ""
}

//criando funções para as quatro operações da calculadora

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
    console.log("-----------")
    console.log(func)
    pegaValor()

    var res = 0

    switch (func) {
        case "+":
        res = soma(valores[valores.length - 2], valores[valores.length - 1])
        console.log("valor de res")
        console.log(res)
            break;
        case "-":
        res = sub(valores[valores.length - 2], valores[valores.length - 1])
        console.log("valor de res")
        console.log(res)
            break;
        case "*":
        res = mult(valores[valores.length - 2], valores[valores.length - 1])
        console.log("valor de res")
        console.log(res)
            break;
        case "/":
        res = div(valores[valores.length - 2], valores[valores.length - 1])
        console.log("valor de res")
        console.log(res)
            break;
        default:

        console.log(func)
    }

        /*if (func = 1){
            res = soma(valores[valores.length - 2], valores[valores.length - 1])
            console.log("valor de res")
            console.log(res)
        } else if (func = 2) {
            res = sub(valores[valores.length - 2], valores[valores.length - 1])
            console.log("valor de res")
            console.log(res)
        } else if (func = 3){
            res = mult(valores[valores.length - 2], valores[valores.length - 1])
            console.log("valor de res")
            console.log(res)
        } else if (func = 4) {
            res = div(valores[valores.length - 2], valores[valores.length - 1])
            console.log("valor de res")
            console.log(res)
        } */

    console.log(res)

    let a = document.querySelector('input[name="res"]')
 
    if (res){
        a.value = res  
    } else {
        a.value = 0
    }    
    console.log(a.value)

    aux = 0
}
