/* Слайдер */

const sliderTabButtons = document.querySelectorAll('.slider-pagination-button');
const slides = document.querySelectorAll('.slider-item');
const buttonPrevious = document.querySelector('.slider-prev');
const buttonNext = document.querySelector('.slider-next');
let counter = 0;

const clearClasses = () => {
  document.querySelector('.slider-item-current').classList.remove('slider-item-current');
  document.querySelector('.slider-pagination-button-current').classList.remove('slider-pagination-button-current');
};

const changeColor = (theme) => {
  document.body.style.backgroundColor = theme;
};

sliderTabButtons.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    clearClasses();
    counter = index;
    slides[index].classList.add('slider-item-current');
    tab.classList.add('slider-pagination-button-current');
    changeColor(slides[index].dataset.theme);
  });
});

buttonPrevious.addEventListener('click', () => {
  clearClasses();
  counter = counter - 1;
  if (counter < 0) {
    counter = slides.length - 1;
  }

  slides[counter].classList.add('slider-item-current');
  sliderTabButtons[counter].classList.add('slider-pagination-button-current');
  changeColor(slides[counter].dataset.theme);
});

buttonNext.addEventListener('click', () => {
  clearClasses();
  counter = counter + 1;
  if (counter > slides.length - 1) {
    counter = 0;
  }
  slides[counter].classList.add('slider-item-current');
  sliderTabButtons[counter].classList.add('slider-pagination-button-current');
  changeColor(slides[counter].dataset.theme);
});

/* Модальное окно */

const modal = document.querySelector('.modal-container');
const btn = document.querySelector('.feedback-form-button');
const closeBtn = document.querySelector('.modal-close-button');

btn.addEventListener('click', (evt) => {
  evt.preventDefault();
  modal.style.display = "flex";
});

closeBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  modal.style.display = "none";
});

window.addEventListener('click', (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
