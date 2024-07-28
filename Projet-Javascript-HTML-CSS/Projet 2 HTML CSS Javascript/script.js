document.addEventListener("DOMContentLoaded", () => {
  const salahButtons = document.querySelectorAll(".js-button");

  salahButtons.forEach(salahButton => {
    salahButton.addEventListener("click", () => {
      if (salahButton.innerHTML === "Mohamed Salah") {
        salahButton.innerText = "The Egyptian King";
        salahButton.style.fontSize = "24px";
        salahButton.style.background = "black";
        salahButton.style.color = "red";
      } else {
        salahButton.innerText = "Mohamed Salah";
        salahButton.style.fontSize = "16px";
        salahButton.style.background = "red";
        salahButton.style.color = "white";
      }
    });
  });
});




const swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  slidesPerView: 3,
  loop: true,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  speed: 600,
  breakpoints: {

    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1366: {
      slidesPerView: 3,
      spaceBetween: 50,
    }
  },
  
  
});