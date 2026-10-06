let nome = joao
// RF01.1 Armazenar o nome do cliente.
let numpedido = 2333456
// RF01.2 Armazenar o numero indentificador ao pedido.
const nomelanchote = "lanchotech"
// RF01.3 Armazenar o nome lanchonete.
let nomeproduto = 'coxinha'
// RF01.4  Armazenar o produto inicialmente solicitado.
let preco = 2
// armazenar o preço unitario
let quantidade = 12

console.log ("cliente:",nome)
console.log("cliente:",numpedido)
console.log ("produto",nomeproduto)
console.log("preço unitario R$:",preco)
console.log ("quantidade",quantidade)

let nome = prompt("qual o seu nome? ")
let numpedido = Number(prompt("qual o numero do seu pedido? "))
let nomeproduto = prompt("qual o pedido? ")
let quantidade = prompt("quantidade? ")
let preco = Number(prompt("qual o preco do produto: "))