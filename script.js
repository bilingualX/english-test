//CHECAR SCORE

var botaoCheckScore = document.querySelector(".btn.checkscore");
var resultadoElement = document.getElementById("resultado"); // Elemento onde a pontuação é exibida

// Adiciona um ouvinte de evento de clique ao botão de checar pontuação
botaoCheckScore.addEventListener("click", function verificar() {
  var form = document.querySelectorAll('.perguntas');
  var respostasCorretas = 0;
  var totalPerguntas = form.length; // Número total de perguntas

  form.forEach(function (form) {
    var opcoes = form.querySelectorAll('input[name="opcao1"]');
    var respostaCorreta = form.querySelector('input[name="opcao1"]:checked[value="correto"]');

    if (respostaCorreta) {
      respostasCorretas++;
    }
  });

  var pontuacaoEmPorcentagem = (respostasCorretas / totalPerguntas) * 100;
  resultadoElement.innerHTML = "Your score is: " + pontuacaoEmPorcentagem + "%";
});

// CHECAR RESPOSTAS CERTAS

var checkAnswersButton = document.querySelector(".btn.checkan");

checkAnswersButton.addEventListener("click", function () {
  var forms = document.querySelectorAll('.perguntas');

  forms.forEach(function (form) {
    var respostaCorreta = form.querySelector('input[name="opcao1"][value="correto"]');
    var respostaSelecionada = form.querySelector('input[name="opcao1"]:checked');

    if (respostaSelecionada) {
      if (respostaSelecionada === respostaCorreta) {
        // Marca a resposta como correta com um fundo verde
        respostaSelecionada.parentNode.style.backgroundColor = "green";
      } else {
        // Marca a resposta errada com um fundo vermelho
        respostaSelecionada.parentNode.style.backgroundColor = "#f12727";
      }
    }
  });
});

// LIMPAR

var clearButton = document.querySelector(".btn.clear");

clearButton.addEventListener("click", function () {
  var forms = document.querySelectorAll('.perguntas');

  forms.forEach(function (form) {
    var opcoes = form.querySelectorAll('input[name="opcao1"]');

    opcoes.forEach(function (opcao) {
      opcao.checked = false; // Desmarca todas as opções
      opcao.parentNode.style.backgroundColor = "transparent"; // Remove qualquer estilo de fundo
    });
  });

  // Limpa o conteúdo do elemento "resultado"
  resultadoElement.innerHTML = "";
});


