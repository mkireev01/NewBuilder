

document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const nextButton = document.querySelector(".next-btn");
  const prevButton = document.querySelector(".prev-btn");
  const cards = Array.from(track.children);

  const cardWidth = cards[0].getBoundingClientRect().width; // Определяем ширину карточки

  // Расставляем карточки в строку
  cards.forEach((card, index) => {
    card.style.left = cardWidth * index + "px";
  });

  let currentIndex = 0;

  // Функция для перемещения карусели
  const moveCarousel = (index) => {
    track.style.transform = `translateX(-${cardWidth * index}px)`;
  };

  // Кнопка "вперёд"
  nextButton.addEventListener("click", () => {
    if (currentIndex < cards.length - 1) {
      currentIndex++;
      moveCarousel(currentIndex);
    }
  });

  // Кнопка "назад"
  prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      moveCarousel(currentIndex);
    }
  });
});

// Открытие и закрытие модального окна
const modal = document.getElementById("contactModal");
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.getElementById("closeModal");

// Открыть модальное окно
openModalBtn.onclick = () => {
  modal.style.display = "flex";
};

// Закрыть модальное окно
closeModalBtn.onclick = () => {
  modal.style.display = "none";
};

// Закрыть окно при клике вне содержимого
window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
