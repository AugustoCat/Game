// Pagina INDEX
  var matrix = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ];
  
      function changeValue(row, col) {
        if (matrix[row][col] === 0) {
          matrix[row][col] = 1;
          document.querySelector('td').classList.toggle("active");
        } else {
          matrix[row][col] = 0;
        }
        updateTable();
      }

      

      function updateTable() {
        var cells = document.getElementsByTagName('td');
        var index = 0;
        var isMatch = true; // Variável para verificar se as matrizes são iguais
      
        for (var i = 0; i < matrix.length; i++) {
          for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
              cells[index].innerText = '0';
            } else {
              cells[index].innerText = '1';
            }
      
            // Verifica se os valores são diferentes entre as matrizes
            if (matrix[i][j] !== originalMatrix[i][j]) {
              isMatch = false;
            }
      
            index++;
          }
        }
      
        // Verifica se as matrizes são iguais
        if (isMatch) {
            // Redireciona o usuário para outra página
            window.location.href = "outra_pagina.html";
          }
      }
      
      var originalMatrix = [
        [1, 0, 1],
        [0, 1, 0],
        [1, 1, 1]
      ];


      // PUZZLE QUIZ
      
      function closeDialog() {
        var dialog = document.getElementById('dialog');
        dialog.style.display = 'none';
      }
      
      var currentQuestion = 0;
      var score = 0;
  
      var questions = [
        {
          question: "Qual a linguagem utilizada para estilizar um site: \n 1: CSS \n 2: HTML \n 3: JavaScript",
          answer: "1"
        },
        {
          question: "Qual a shebang de bash? \n 1: #!/usr/bin/bash \n 2: !#/usr/bin/bash \n 3:/bin/bash",
          answer: "1"
        },
        {
          question: "Qual é estrutura de controle utilizada em programação para executar um bloco de código repeditamente até que uma condição seja falsa? 1: Condição if 2: Condição switch 3: estrutura de repetição While ",
          answer: "3"
        }
      ];
  
      function showDialog() {
        var dialog = document.getElementById('dialog');
        dialog.style.display = 'block';
        loadQuestion();
      }
  
      function loadQuestion() {
     
        var questionElement = document.getElementById('question');
        var currentQuestionObj = questions[currentQuestion];
  
        questionElement.textContent = currentQuestionObj.question;
       
      }
  
      function checkAnswer() {
        var answerInput = document.getElementById('answer');
        var userAnswer = answerInput.value.toLowerCase();
        var currentQuestionObj = questions[currentQuestion];
  
        switch (userAnswer) {
          case currentQuestionObj.answer:
            score++;
            break;
          default:
            break;
        }

        answerInput.value = '';
        currentQuestion++;
        
        if (currentQuestion < questions.length) {
          loadQuestion();
        } else {
          showResult();
        }
      }
  
      function showResult() {
        if (score == 3) {
          alert("no final aparece o codigo 'h981' na tela")
        } else {
          alert("Respostas incorretas")
          currentQuestion=0;
          loadQuestion();
          window.location.href = "outra_pagina.html";
        }
        var dialog = document.getElementById('dialog');
        dialog.innerHTML = '';
  
        var resultElement = document.createElement('h2');
        resultElement.textContent = "Resultado: " + score + "/" + questions.length;
        dialog.appendChild(resultElement);
      
    }
    


  //Inserir senha

  function abrirCofre() {
    const senhaJogador = document.getElementById("senhaInput").value;
    const senhaCofre = "h9814tb";
    
    while (senhaJogador !== senhaCofre) {
      alert("Senha incorreta")
      return;
    }

    window.location.href = ""
  }

  // puzzle4
  function puzzleErro() {
  let aleatorio = Math.floor(Math.random() * 50);
  const NUMALEATORIO = aleatorio;
  var respostaDoJogador;
  var tentativas = 0;

// Executar o loop do-while até que o jogador acerte o número
  do {
    respostaDoJogador = parseInt(prompt("Tente adivinhar o número (entre 1 e 50):"));
    const NUMALEATORIO = aleatorio;
    if (respostaDoJogador < NUMALEATORIO) {
      alert("O número que você digitou é menor que o que estou pensando. Tente novamente!");
    } else if (respostaDoJogador > NUMALEATORIO) {
      alert("O número que você digitou é maior que o que estou pensando. Tente novamente!");
    }
    tentativas++;
  } while (respostaDoJogador !== NUMALEATORIO);

  alert("Parabéns! Você acertou o número em " + tentativas + " tentativa(s)! com um sussurro satisfeito, a entidade revela uma parte crucial do código necessário para avançar. Ela entrega a você um pedaço de papel com uma sequência de caracteres, você le a sequencia '4tb' ");
}