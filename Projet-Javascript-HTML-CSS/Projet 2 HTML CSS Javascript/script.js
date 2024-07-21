document.addEventListener("DOMContentLoaded", () => {
  const salahButton = document.querySelector(".js-button");

  salahButton.addEventListener("click", () => {
    if (salahButton.innerText === "Mohamed Salah") {
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

document.addEventListener("DOMContentLoaded", () => {
  const salahButton = document.querySelector(".js-button1");

  salahButton.addEventListener("click", () => {
    if (salahButton.innerText === "Darwin Nunez") {
      salahButton.innerText = "Darwin MERGUEZ !!!";
      salahButton.style.fontSize = "35px";
      salahButton.style.background = "black";
      salahButton.style.color = "red";
    } else {
      salahButton.innerText = "Darwin Nunez";
      salahButton.style.fontSize = "16px";
      salahButton.style.background = "red";
      salahButton.style.color = "white";
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const salahButton = document.querySelector(".js-button2");

  salahButton.addEventListener("click", () => {
    if (salahButton.innerText === "Cody Gakpo") {
      salahButton.innerText = "Sous coté";
      salahButton.style.fontSize = "24px";
      salahButton.style.background = "black";
      salahButton.style.color = "red";
    } else {
      salahButton.innerText = "Cody Gakpo";
      salahButton.style.fontSize = "16px";
      salahButton.style.background = "red";
      salahButton.style.color = "white";
    }
  });
});
