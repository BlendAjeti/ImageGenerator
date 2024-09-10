const button = document.getElementById('button');
const mainImg = document.getElementById('imgOne');
const slides = document.querySelectorAll('.slide-img');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

slides.forEach((slide) => {
  slide.addEventListener('click', function (e) {
    let z = e.target.getAttribute('src');
    mainImg.setAttribute('src', z);

    const prevActiveEl = document.querySelector('.active-img');
    if (prevActiveEl) {
      prevActiveEl.classList.remove('active-img');
      e.target.classList.add('active-img');
    }

    console.log(e);
  });
});

function randomImg() {
  const randomNumber = Math.floor(Math.random() * slides.length);
  console.log(randomNumber);

  mainImg.src = slides[randomNumber].src;
}

let count = 0;
function nextImg() {
  if (count === slides.length - 1) {
    count = 0;
  } else {
    count++;
  }
  mainImg.src = slides[count].src;
}

function prevImg() {
  if (count === 0) {
    count = slides.length - 1;
  } else {
    count--;
  }
  mainImg.src = slides[count].src;
}

nextBtn.addEventListener('click', nextImg);
prevBtn.addEventListener('click', prevImg);
button.addEventListener('click', randomImg);
