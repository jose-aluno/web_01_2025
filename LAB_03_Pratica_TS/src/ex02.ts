let produtos: string[] = ["Arroz", "Feijão", "Leite", "Pão"]

while ( produtos.indexOf("Leite") > 0){
    produtos[produtos.indexOf("Leite")] = "Queijo"
}

produtos.shift()
produtos.push("Café")

console.log(`Lista de produtos: ${produtos}`)