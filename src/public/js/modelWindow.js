const modal = document.getElementById("myModal");
const btn = document.getElementById("openModalBtn");
const closeBtn = modal.querySelector(".close");

// Открыть модальное окно при клике на кнопку
btn.addEventListener("click", () => {
    modal.style.display = "block";
    // Можно добавить фокус на окно для доступности
    closeBtn.focus();
});

// Закрыть модальное окно при клике на крестик
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    btn.focus();
});

// Закрыть модальное окно при клике вне содержимого
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
        btn.focus();
    }
});

// Закрыть модальное окно по нажатию Esc
window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.style.display === "block") {
        modal.style.display = "none";
        btn.focus();
    }
});