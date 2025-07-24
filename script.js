let browniePoints = 0;

const taskIcons = {
  swimming: "🏊‍♀️",
  reading: "📚",
  coding: "💻",
  cooking: "🍳",
  dancing: "💃",
  gym: "🏋️‍♀️",
  walking: "🚶‍♀️",
  drawing: "🎨",
  gardening: "🪴",
  movie: "🎬",
  cleaning: "🧹"
};

const quotes = [
  "You're crushing it, Sparkster! 💪",
  "Another step closer to your goals. 🌟",
  "Small wins = Big confidence!",
  "Proud of you already 🥰",
  "Focus + action = magic! ✨",
  "You did that. You really did. 👑",
  "Work done. Sparkle on. 💙"
];

function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim().toLowerCase();

  if (taskText === "") return;

  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const label = document.createElement("label");
  label.style.cursor = "pointer";
  if (taskIcons[taskText]) {
    label.innerHTML = `${taskIcons[taskText]} ${capitalize(taskText)}`;
  } else {
    label.textContent = capitalize(taskText);
  }

  checkbox.addEventListener("change", function () {
    if (this.checked) {
      browniePoints += 1;
      document.getElementById("points").textContent = browniePoints;
      showQuote();
    }
  });

  li.appendChild(checkbox);
  li.appendChild(label);
  document.getElementById("taskList").appendChild(li);

  input.value = "";
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function toggleTheme() {
  document.body.classList.toggle("dark");
}

function showQuote() {
  const quoteEl = document.getElementById("quote");
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteEl.textContent = randomQuote;
  quoteEl.style.opacity = 1;

  setTimeout(() => {
    quoteEl.style.opacity = 0;
  }, 3000);
}
