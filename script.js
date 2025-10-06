document.getElementById("survey-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    age: document.getElementById("age").value,
    rating: document.getElementById("rating").value,
    comment: document.getElementById("comment").value
  };

  const status = document.getElementById("status");

  // Показываем уведомление "Отправка..."
  showStatus("⏳ Отправка...", "neutral");

  try {
    const res = await fetch("https://script.google.com/macros/s/AKfycbyxPIjaa4sYIP3bXxVIB9OyBC98A67GUpMFvRz220g1RB6MP9vgoPzLUNBMzV-x4eCB/exec", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (res.ok) {
      showStatus("✅ Ответ сохранён! Спасибо ❤️", "success");
      document.getElementById("survey-form").reset();
    } else {
      showStatus("⚠️ Ошибка отправки. Попробуйте позже.", "error");
    }
  } catch (err) {
    showStatus("❌ Не удалось отправить. Проверьте интернет.", "error");
  }
});

// функция для отображения уведомлений
function showStatus(message, type) {
  const status = document.getElementById("status");
  status.className = "status show"; // сбрасываем классы
  if (type === "success") status.classList.add("success");
  if (type === "error") status.classList.add("error");
  status.textContent = message;

  // Убираем уведомление через 4 секунды
  setTimeout(() => {
    status.classList.remove("show");
    setTimeout(() => status.className = "status hidden", 400);
  }, 4000);
}
