const phrase:string = "Trabalhando com filter"

let palavras: string[] = phrase.split(" ")
 console.log(palavras)

let resultado = palavras.filter( item => item.length > 5)
console.log(resultado)