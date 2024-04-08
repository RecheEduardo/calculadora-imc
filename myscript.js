var valor = parseFloat(document.querySelector('#number1'))
var valor2 = parseFloat(document.querySelector('#number2'))
var valorimc = document.getElementById('result')
var imccheck = document.getElementById('checkimc')

function somar() {

    var resultado = ((parseFloat(number2.value) / parseFloat(number1.value) ** 2).toFixed(1))
    var classificacao
    valorimc.innerHTML = (`Seu IMC é ${resultado}`)

    if (resultado <= 18.5) {

        classificacao = 'Abaixo do Peso'
    }

    else if (resultado >= 18.6 && resultado <= 24.9) {

        classificacao = 'Peso Normal'
    }

    else if (resultado >= 25 && resultado <= 29.9) {

        classificacao = 'Acima do Peso'
    }

    else if (resultado >= 30 && resultado <= 34.9) {

        classificacao = 'Obesidade Grau I'
    }

    else if (resultado >= 35 && resultado <= 39.9) {

        classificacao = 'Obesidade Grau II'
    }

    else {

        classificacao = 'Obesidade Grau III'
    }

    imccheck.innerHTML = (`Você está classificado como: <strong>${classificacao}</strong>!<br><br>`)

    if (isNaN(resultado)) {

        valorimc.innerHTML = ('Por favor, coloque os dois números<br>para realizar o cálculo!')
        imccheck.innerHTML = null
                                
    }
  
}
