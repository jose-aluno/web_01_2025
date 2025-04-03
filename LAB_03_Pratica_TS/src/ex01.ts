let numeros: number[] = [3, 8, 12, 7, 5, 20, 18]

let pares: Array<number> = []
let impares: number[] = []

for( const num of numeros){
    if (num % 2 == 0){
        pares.push(num)
    }else{
        impares.push(num)
    }
}

console.log(`Pares: ${pares.length} \nImpares: ${impares.length}`)