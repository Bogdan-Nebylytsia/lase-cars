//Slider

let slideIndex = 0;
const dots = document.querySelectorAll('.slider-pagination-dots');
const slides = document.querySelectorAll('.slider-slide');

function showSlide() {

  slides.forEach(slide => {
    slide.classList.remove('showing');
  });

  slideIndex++;

  if (slideIndex >= slides.length) {
      slideIndex = 0;
  }

  slides[slideIndex].classList.add('showing');
  
  dots.forEach(dot => {
    dot.className = dot.className.replace('slider-pagination-dots-active', '');
  });

  dots[slideIndex].className += ' slider-pagination-dots-active';



}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    console.log(index);
    if (index === 0) {
      slideIndex = slides.length-1;
    } else {
      slideIndex = index-1;
    }

    console.log(slideIndex);
    
    showSlide();
  });
});

setInterval(showSlide, 9000);

//tabs

const tabsBtn = document.querySelectorAll('.tabs__btn-item'),
  tabsContent = document.querySelectorAll('.tabs__content-item');

tabsBtn.forEach(btn => {
  btn.addEventListener('click', open);
});

function open(evt) {
  const tabsTarget = evt.currentTarget,
    button = tabsTarget.dataset.button;
  console.log(button);

  tabsBtn.forEach(btn => {
    btn.classList.remove('tabs__btn-item-active');
  });

  tabsTarget.classList.add('tabs__btn-item-active');

  tabsContent.forEach(item => {
    item.classList.remove('tabs__content-item-active');
  });

  document.querySelector(`#${button}`).classList.add('tabs__content-item-active');
}