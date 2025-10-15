let operacao = null;

function escolherOperacao(op) {
  operacao = op;
}

function calcular() {
  const num1 = Number(document.getElementById('input1').value);
  const num2 = Number(document.getElementById('input2').value);
  let resultado;

  function formatarNumero(num) {
    return num.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  if (operacao === '+') resultado = num1 + num2;
  else if (operacao === '-') resultado = num1 - num2;
  else if (operacao === '*') resultado = num1 * num2;
  else if (operacao === '/') {
    if (num2 === 0) {
      document.querySelector('.resultado').innerText = 'Erro: divisão por zero!';
      return;
    }
    resultado = num1 / num2;
  } else {
    document.querySelector('.resultado').innerText = 'Escolha uma operação!';
    return;
  }

  document.querySelector('.resultado').innerText = formatarNumero(resultado);
}
