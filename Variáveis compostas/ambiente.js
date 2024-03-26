let num = [9,3,8]
console.log(num)
num[3] = 6
console.log(num)
num.push(7)
console.log(num)
console.log(num.length)
num.sort()
console.log(num)
num.pop()
console.log(num)
num.shift()
console.log(num)
num.unshift(0)
console.log(num)

for(let i = 0; i < num.length; i ++){
    console.log(`A posição ${i} tem valor ${num[i]}`)
}

let num = [5, 6, 7, 4, 8, 2, 3, 1]
for(let i in num){
    console.log(`A posição ${i} tem valor ${num[i]}`)
}
let indice = num.indexOf(7)
console.log(indice)
