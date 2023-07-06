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