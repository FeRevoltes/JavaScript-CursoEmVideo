function multiplication(){
    var num = parseInt(document.getElementById('num').value)
    var table = document.getElementById('table')
    var count = ''

    if(isNaN(num)){
        alert(`Por favor, digite um número valido.`)
        return;
    }

    for(var i = 1; i <= 10; i ++){
        count += `${num} x ${i} = ${num * i}\n`
    }

    table.value = count;
}