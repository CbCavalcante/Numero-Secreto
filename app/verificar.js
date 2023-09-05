function verificaNumero(chute) {
    const numero = +chute

    if (chuteInvalido(numero)) {
        (chute.toUpperCase() === "GAME OVER")
            document.body.innerHTML =
                `
                <h2>Game Over!!!</h2>
                <h3>Pressione o botão para jogar novamente</h3>
                <button id="jogar-novamente" class="btn-jogar" >Jogar novamente</button>
                `
                document.body.style.backgroundColor = "#FAF0E6";

        elementoChute.innerHTML += `<div>Valor inválido</div>`
        return
    }

    if (numeroMaiorOuMenor(chute)){
        elementoChute.innerHTML += `<div>Valor inválido. chute um número entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if (numero === numeroSecreto){
        document.body.innerHTML = `
            <h2>Parabéns! Você acertou, grande gênio</h2>
            <h3>o número secreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    } else if (numero > numeroSecreto){
        elementoChute.innerHTML += `<div>O número secreto é menor! <i class="fa-solid fa-circle-down"></i></div>`
    } else {
        elementoChute.innerHTML += `<div>O número secreto é maior! <i class="fa-solid fa-circle-up"></i></div>`
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorOuMenor(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener ('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})




