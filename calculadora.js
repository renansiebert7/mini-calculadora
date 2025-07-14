function formatarNumero(numero) {
    return numero.toLocaleString('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: 2 });
}

function cliqueinaadição() {
    const num1 = Number(document.getElementById('input1').value);
    const num2 = Number(document.getElementById('input2').value);
    const resultado = num1 + num2;
    document.querySelector('.resultado').innerText = formatarNumero(resultado);
}

function cliqueinasubtração() {
    const num1 = Number(document.getElementById('input1').value);
    const num2 = Number(document.getElementById('input2').value);
    const resultado = num1 - num2;
    document.querySelector('.resultado').innerText = formatarNumero(resultado);
}

function cliqueinamultiplicação() {
    const num1 = Number(document.getElementById('input1').value);
    const num2 = Number(document.getElementById('input2').value);
    const resultado = num1 * num2;
    document.querySelector('.resultado').innerText = formatarNumero(resultado);
}

function cliqueinadivisão() {
    const num1 = Number(document.getElementById('input1').value);
    const num2 = Number(document.getElementById('input2').value);
    if (num2 === 0) {
        document.querySelector('.resultado').innerText = 'Erro: Divisão por zero!';
    } else {
        const resultado = num1 / num2;
        document.querySelector('.resultado').innerText = formatarNumero(resultado);
    }
}