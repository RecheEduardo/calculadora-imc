var valor = parseFloat(document.querySelector('#number1'))
var valor2 = parseFloat(document.querySelector('#number2'))
var resultado = document.getElementById('result')

function somar() {

    resultado.innerHTML = (`Seu IMC é ${(parseFloat(number2.value) / parseFloat(number1.value) ** 2).toFixed(1)}!`)

    if (isNaN(parseFloat(number2.value) / parseFloat(number1.value) ** 2)) {

    resultado.innerHTML = ('Por favor, coloque os dois números<br>para realizar o cálculo!')
                            
    }
}
