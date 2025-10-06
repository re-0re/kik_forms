document.getElementById("survey-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    age: document.getElementById("age").value,
    rating: document.getElementById("rating").value,
    comment: document.getElementById("comment").value
  };

  document.getElementById("status").textContent = "⏳ Отправка...";

  try {
    await fetch("https://script.google.com/macros/s/ВАШ_SCRIPT_ID/exec", {
      method: "POST",
      body: JSON.stringify(data)
    });
    document.getElementById("status").textContent = "✅ Ответ отправлен!";
    document.getElementById("survey-form").reset();
  } catch (err) {
    document.getElementById("status").textContent = "❌ Ошибка отправки";
  }
});
