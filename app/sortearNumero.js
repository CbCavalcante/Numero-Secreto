const menorValor = 0
const maiorValor = 100
const numeroSecreto = gerarNumeroAleatorio()


function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1)
}


console.log('O número secreto é:', numeroSecreto)


const elementMenorV = document.getElementById('menor-valor')
elementMenorV.innerHTML = menorValor


const elementMaiorV = document.getElementById('maior-valor')
elementMaiorV.innerHTML = maiorValor



