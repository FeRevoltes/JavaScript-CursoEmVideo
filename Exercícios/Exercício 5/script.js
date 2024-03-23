function multiplication(){
    var num = parseInt(document.getElementById('num').value)
    var table = document.getElementById('table')
    var count = ''

    for(var i = 1; i <= 10; i ++){
        count += `${num} x ${i} = ${num * i}\n`
    }

    table.value = count;
}