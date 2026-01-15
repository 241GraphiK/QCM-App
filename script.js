let questions = [];
let userAnswers = [];
let username = "";

async function startQuiz() {
  username = document.getElementById("username").value;
  if (!username) {
    alert("Veuillez entrer votre nom !");
    return;
  }

  try {
    const res = await fetch("questions.json");
    questions = await res.json();
  } catch (err) {
    alert("Impossible de charger questions.json !");
    return;
  }

  document.getElementById("start-screen").classList.add("hidden");
  document.getElementById("quiz-container").classList.remove("hidden");
  document.getElementById("submit-section").classList.remove("hidden");

  renderQuiz();
}

function renderQuiz() {
  const container = document.getElementById("quiz-container");
  container.innerHTML = "";

  questions.forEach((q, i) => {
    let html = `<div>
      <p>${i + 1}. ${q.question}</p>`;
    q.options.forEach((opt, j) => {
      html += `<label>
        <input type="radio" name="q${i}" value="${j}">
        ${opt}
      </label><br>`;
    });
    html += "</div>";
    container.innerHTML += html;
  });
}

function submitQuiz() {
  let score = 0;
  userAnswers = [];

  questions.forEach((q, i) => {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (selected) {
      userAnswers.push(parseInt(selected.value));
      if (parseInt(selected.value) === q.answer) {
        score += 0.5;
      }
    } else {
      userAnswers.push(null);
    }
  });

  document.getElementById("result").innerText =
    `${username}, votre score est : ${score}/20`;

  // Envoi vers backend Node.js
  fetch("http://localhost:3000/api/results", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, answers: userAnswers, score })
  });
}