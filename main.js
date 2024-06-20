let numero1 = document.querySelector('#entrada1');  //variável - nome da variável - chama função do JS  - id do input no html.
let numero2 = document.querySelector('#entrada2');
let resultado = document.querySelector('#resultado');

function somar(){
    //value aparece o resultado dentro da caixa de resultado. Só serve pra input.
    //inner.html aparece o resultado embaixo do resultado como forma de texto. Puxa toda informação do html independente da tag.
    resultado.value = Number(numero1.value) + Number(numero2.value); // soma da função.
    // number antea da variável serve para somar como numero e não como string. 

}

function dividir(){
    resultado.value = Number(numero1.value) / Number(numero2.value);
}

function multiplicar(){
    resultado.value = Number(numero1.value) * Number(numero2.value);
}
 function subtrair(){
    resultado.value = Number(numero1.value) - Number(numero2.value);
 }

 function imc(){
    let altura = document.querySelector('#altura');
    let peso = document.querySelector('#peso');
    let imc =  Number(peso.value)/(Number(altura.value)*Number(altura.value));

    document.querySelector('#imc').value = imc.toFixed(2);

    let consideracoes =document.querySelector('#consideracoes');

    if(imc < 18.5){
        consideracoes.textContent = 'Abaixo do peso';
    } else if(imc >= 18.5 && imc <= 24.9){
        consideracoes.textContent = 'Peso ideal';
    } else if(imc >= 25 && imc <= 29.9){
        consideracoes.textContent = 'Levemente acima do peso';
    } else if(imc >= 30 && imc <= 34.9){
        consideracoes.textContent = 'Obesidade grau 1';
    } else if(imc >= 35 && imc <= 39.9){
        consideracoes.textContent = 'Obesidade grau 2';
    } else {
        consideracoes.textContent = 'Obesidade grau 3';
    }
 }  




 