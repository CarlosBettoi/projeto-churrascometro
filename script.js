let inputAdultos = document.getElementById("adultos")
let inputCriancas = document.getElementById("criancas")
let inputADuracao = document.getElementById("duracao")

let resultado = document.getElementById("resultado")

function calcular() {
    console.log("Calcular")

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputADuracao.value;

    let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qdtTotalCerveja = cervejaPP(duracao) * adultos;
    let qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);
    
    
    resultado.innerHTML = `<p> ${qdtTotalCarne/1000} kg de carne </p> ` 
    resultado.innerHTML += `<p> ${Math.ceil(qdtTotalCerveja/355)} latas de cerveja </p> `
    resultado.innerHTML += `<p> ${Math.ceil(qdtTotalBebidas/2000)} Pet's de 2 litros de Bebidas </p> `                           
}

function carnePP(duracao) {
    if (duracao >= 6) {
        return 650;
    } else {
        return 400;
    }
}
function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}
function bebidasPP(duracao) {
    if (duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}