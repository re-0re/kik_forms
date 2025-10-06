document.getElementById("survey-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    age: document.getElementById("age").value,
    rating: document.getElementById("rating").value,
    comment: document.getElementById("comment").value
  };

  const status = document.getElementById("status");
  status.textContent = "⏳ Отправка...";

  try {
    await fetch("https://script.google.com/macros/s/AKfycby1aFqAu2yecrGO3dgdJMXyUTP3rV9gQGEk9W2SouEiZIRwJYHvaGK6Ca-ypoKIVZtC/exec", {
      method: "POST",
      body: JSON.stringify(data)
    });

    status.textContent = "✅ Спасибо! Ответ отправлен.";
    status.style.color = "green";
    document.getElementById("survey-form").reset();
  } catch (err) {
    status.textContent = "❌ Ошибка отправки. Попробуйте позже.";
    status.style.color = "red";
  }
});
