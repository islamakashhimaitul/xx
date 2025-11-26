// THEME TOGGLE
const body = document.body;
const toggle = document.getElementById("themeToggle");
const storedTheme = localStorage.getItem("ielts-theme");

if (storedTheme === "dark") {
  body.classList.add("dark");
  if (toggle) toggle.textContent = "☀";
}

if (toggle) {
  toggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    const isDark = body.classList.contains("dark");
    toggle.textContent = isDark ? "☀" : "☾";
    localStorage.setItem("ielts-theme", isDark ? "dark" : "light");
  });
}

// FOOTER YEAR
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// GENERIC QUIZ LOGIC
function setupQuizzes() {
  const quizzes = document.querySelectorAll(".quiz");
  quizzes.forEach((quiz) => {
    const quizId = quiz.dataset.quizId;
    const correct = quiz.dataset.correct;
    const button = quiz.querySelector("[data-quiz-check]");
    const resultEl = quiz.querySelector(".quiz-result");
    const nameAttr = `q-${quizId}`;

    if (!button || !resultEl) return;

    button.addEventListener("click", () => {
      const selected = quiz.querySelector(`input[name="${nameAttr}"]:checked`);
      if (!selected) {
        resultEl.textContent = "Please choose an answer first.";
        return;
      }
      if (selected.value === correct) {
        resultEl.textContent = "✅ Correct! Nice job.";
      } else {
        resultEl.textContent = "❌ Not quite. Check the explanation above and try again.";
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", setupQuizzes);
