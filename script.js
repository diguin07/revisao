let nome = "Diego Alves";
let idade = 16;
let idadeEsposa = "16";
const anoNascimento = 2007;

if (idade === idadeEsposa) {
    alert("Igual...")
}else {
    alert("Cada um no seu quadrado!")
}

const titulo = document.getElementById("Titulo");
const resultado = document.getElementById("resultado")
const Nome = document.getElementById("Nome");
const eMail = document.getElementById("E-mail")

titulo.textContent = "Mudei o titulo!! eu posso..."

function mostrarResultado(){
        resultado.textContent = nome.value + "" + eMail.value;
}