let numbers = []
let selectNum = document.getElementById('select')
let res = document.getElementById('result')

function addNum(){
    let num = parseInt(document.getElementById('num').value)
    console.log(numbers)
    if (isNaN(num) || num < 0 || num > 100 ){
        alert('Coloque um número valido!')
    } else if (numbers.includes(num)){
        alert('Este número já foi adicionado!')
    }else {
        numbers.push(num)
        let op = document.createElement('option')
        op.textContent = `Valor ${num} adicionado`
        selectNum.appendChild(op)
    }
    document.getElementById('num').value = ''; //Limpa o valor do campo
    document.getElementById('num').focus() // Coloca o campo em foco
}

function count(){
    if (isNaN(numbers[0])){
        alert('Coloque um número valido antes de calcular!')
        return
    }
    
    let numHigh = numbers[0]
    let numSmall = numbers[0]
    let sum = 0
    for(let i=0; i < numbers.length; i++){
        sum += numbers[i]
        if (numbers[i] > numHigh){
            numHigh = numbers[i]
        }
        if (numbers[i] < numSmall){
            numSmall = numbers[i]
        }
    }
    res.innerHTML = `<p> Números cadastrados: ${numbers.length} </p>`
    res.innerHTML += `<p> Número mais alto: ${numHigh}</p>`
    res.innerHTML += `<p> Número mais baixo: ${numSmall}</p>`
    res.innerHTML += `<p>A somas de todos os números é igual a ${sum}</p>`
    res.innerHTML += `<p>A média dos números é igual a ${sum / numbers.length}</p>`
}

function clean(){
    numbers = []
    selectNum.innerHTML = ''
    res.innerHTML = ''
}