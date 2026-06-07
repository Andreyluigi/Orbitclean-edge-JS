var cur = 0;
var total = 3;

function updateSlide() {
  document.getElementById('slides').style.transform = 'translateX(-' + (cur * 100) + '%)';
  document.querySelectorAll('.dot').forEach(function(d, i) {
    d.classList.toggle('active', i === cur);
  });
}

function slideNext() {
  cur = (cur + 1) % total;
  updateSlide();
}

function slidePrev() {
  cur = (cur - 1 + total) % total;
  updateSlide();
}

function goSlide(n) {
  cur = n;
  updateSlide();
}

setInterval(slideNext, 6000);

//temas
document.addEventListener("DOMContentLoaded", () => {
  const btnSpace = document.getElementById("theme-space");
  const btnEclipse = document.getElementById("theme-eclipse");
  const btnGround = document.getElementById("theme-ground");
  const body = document.body;
  const header = document.querySelector("header");

  function clearThemes() {
    body.classList.remove("theme-eclipse-active", "theme-ground-active");
    if (header) header.classList.remove("theme-ground-header");
    document.querySelectorAll(".theme-btn").forEach(b => b.classList.remove("active"));
  }

  if (btnSpace && btnEclipse && btnGround) {
    btnSpace.addEventListener("click", () => {
      clearThemes();
      btnSpace.classList.add("active");
    });

    btnEclipse.addEventListener("click", () => {
      clearThemes();
      body.classList.add("theme-eclipse-active");
      btnEclipse.classList.add("active");
    });

    btnGround.addEventListener("click", () => {
      clearThemes();
      body.classList.add("theme-ground-active");
      if (header) header.classList.add("theme-ground-header");
      btnGround.classList.add("active");
    });
  }
});
//formulario
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("satelliteForm");
  const successBox = document.getElementById("formSuccess");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault(); 
      
      let isValid = true;

      const fields = [
        { id: "nome_operadora", errorId: "err_nome" },
        { id: "email_contato", errorId: "err_email" },
        { id: "qtd_satelites", errorId: "err_qtd" }
      ];

      fields.forEach(field => {
        const input = document.getElementById(field.id);
        const errorSpan = document.getElementById(field.errorId);

        if (input && errorSpan) {
          if (input.value.trim() === "") {
            input.classList.add("input-error");
            errorSpan.style.display = "block";
            isValid = false;
          } else {
            input.classList.remove("input-error");
            errorSpan.style.display = "none";
          }
        }
      });

      if (isValid) {
        successBox.style.display = "block";
        form.reset();
        

        setTimeout(() => {
          successBox.style.display = "none";
        }, 5000);
      }
    });
  }
});
//quiz
document.addEventListener("DOMContentLoaded", () => {
  const quizQuestions = [
    {
      q: "Qual é a velocidade média aproximada de um detrito espacial em órbita baixa (LEO)?",
      options: ["A) 5.000 km/h", "B) 12.000 km/h", "C) 28.000 km/h", "D) 100.000 km/h"],
      correct: 2
    },
    {
      q: "O que diz a Síndrome de Kessler sobre o lixo espacial?",
      options: [
        "A) Os detritos pegam fogo ao entrar na atmosfera.",
        "B) Colisões geram novos fragmentos, criando uma reação em cadeia destrutiva.",
        "C) O lixo espacial altera a gravidade da Terra.",
        "D) Os satélites se perdem devido ao vento solar."
      ],
      correct: 1
    },
    {
      q: "Qual agência espacial indicou a existência de cerca de 130 milhões de fragmentos de lixo?",
      options: ["A) NASA", "B) ESA (Agência Espacial Europeia)", "C) AEB", "D) Roscosmos"],
      correct: 1
    },
    {
      q: "Qual a energia equivalente do impacto de um detrito de apenas 1cm a velocidades orbitais?",
      options: ["A) Um estalo de dedos", "B) Uma bala de revólver", "C) Uma granada de mão", "D) Uma bomba nuclear"],
      correct: 2
    },
    {
      q: "Qual é o principal problema dos métodos tradicionais de evasão comandados pelo solo?",
      options: ["A) O custo do combustível", "B) A alta latência de comunicação", "C) A falta de radares na Terra", "D) O tamanho dos satélites"],
      correct: 1
    },
    {
      q: "O OrbitClean Edge utiliza qual conceito de computação para acelerar tomadas de decisão?",
      options: ["A) Cloud Computing (Nuvem)", "B) Edge Computing (Computação de Borda)", "C) Quantum Computing", "D) Blockchain"],
      correct: 1
    },
    {
      q: "Qual a média de tempo estimada para tomada de decisão no sistema OrbitClean Edge?",
      options: ["A) 45 milissegundos", "B) 10 minutos", "C) 400 milissegundos", "D) 2 segundos"],
      correct: 0
    },
    {
      q: "Para que serve a arquitetura de 'rede em malha' (Mesh) entre os satélites?",
      options: [
        "A) Para transmitir canais de TV mais rápido.",
        "B) Para propagar os novos vetores de evasão automaticamente para satélites vizinhos.",
        "C) Para rastrear o clima na Terra.",
        "D) Para carregar as baterias solares."
      ],
      correct: 1
    },
    {
      q: "Com qual Objetivo de Desenvolvimento Sustentável (ODS) da ONU o projeto está alinhado?",
      options: ["A) ODS 2 (Fome Zero)", "B) ODS 5 (Igualdade de Gênero)", "C) ODS 9 (Indústria, Inovação e Infraestrutura)", "D) ODS 14 (Vida na Água)"],
      correct: 2
    },
    {
      q: "Qual o microcontrolador utilizado na simulação de hardware do protótipo?",
      options: ["A) Raspberry Pi 5", "B) Arduino Uno R3", "C) ESP32", "D) Intel Core i9"],
      correct: 1
    }
  ];

  let currentQuestionIndex = 0;
  let score = 0;

  const quizContainer = document.getElementById("quiz-content");
  const startBtn = document.getElementById("start-quiz-btn");

  if (startBtn && quizContainer) {
    startBtn.addEventListener("click", () => {
      currentQuestionIndex = 0;
      score = 0;
      renderQuestion();
    });
  }

  function renderQuestion() {
    if (currentQuestionIndex < quizQuestions.length) {
      const currentQuestion = quizQuestions[currentQuestionIndex];
      
      quizContainer.innerHTML = `
        <div class="quiz-question-num">Pergunta ${currentQuestionIndex + 1} de ${quizQuestions.length}</div>
        <div class="quiz-question-text">${currentQuestion.q}</div>
        <div class="quiz-options">
          ${currentQuestion.options.map((option, index) => `
            <button class="quiz-option-btn" data-index="${index}">${option}</button>
          `).join('')}
        </div>
      `;

      // Adiciona eventos nos botões de resposta criados
      document.querySelectorAll(".quiz-option-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
          const selectedIndex = parseInt(e.target.getAttribute("data-index"));
          if (selectedIndex === currentQuestion.correct) {
            score++;
          }
          currentQuestionIndex++;
          renderQuestion();
        });
      });
    } else {
      renderResult();
    }
  }

  function renderResult() {
    let performanceMsg = "";
    if (score >= 8) performanceMsg = "🚀 Excelente! Você é um Engenheiro Aeroespacial de elite.";
    else if (score >= 5) performanceMsg = "🛰️ Bom trabalho! Órbita parcialmente estável.";
    else performanceMsg = "⚠️ Alerta Crítica! Risco severo de colisão invisível.";

    quizContainer.innerHTML = `
      <div class="quiz-result-box">
        <h3>Resultado do Desafio</h3>
        <div class="quiz-score-big">${score} / ${quizQuestions.length}</div>
        <p style="color: var(--fg2); margin-bottom: 2rem;">Você acertou ${score} de 10 perguntas técnicas.</p>
        <p style="font-weight: 600; font-size: 1.1rem; margin-bottom: 2rem;">${performanceMsg}</p>
        <button id="restart-quiz-btn" class="btn" style="border: none; cursor: pointer; margin: 0 auto;">Tentar Novamente</button>
      </div>
    `;

    document.getElementById("restart-quiz-btn").addEventListener("click", () => {
      currentQuestionIndex = 0;
      score = 0;
      renderQuestion();
    });
  }
});