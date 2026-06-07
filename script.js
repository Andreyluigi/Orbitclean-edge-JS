var cur = 0;
var total = 3;

function updateSlide() {
  document.getElementById('slides').style.transform = 'translateX(-' + (cur * 100) + '%)';
  document.querySelectorAll('.dot').forEach(function(d, i) {
    d.classList.toggle('active', i === cur);
  });
}

function slideNext() {
  cur = (cur + 1) % total;
  updateSlide();
}

function slidePrev() {
  cur = (cur - 1 + total) % total;
  updateSlide();
}

function goSlide(n) {
  cur = n;
  updateSlide();
}

setInterval(slideNext, 6000);

//temas
document.addEventListener("DOMContentLoaded", () => {
  const btnSpace = document.getElementById("theme-space");
  const btnEclipse = document.getElementById("theme-eclipse");
  const btnGround = document.getElementById("theme-ground");
  const body = document.body;
  const header = document.querySelector("header");

  function clearThemes() {
    body.classList.remove("theme-eclipse-active", "theme-ground-active");
    if (header) header.classList.remove("theme-ground-header");
    document.querySelectorAll(".theme-btn").forEach(b => b.classList.remove("active"));
  }

  if (btnSpace && btnEclipse && btnGround) {
    btnSpace.addEventListener("click", () => {
      clearThemes();
      btnSpace.classList.add("active");
    });

    btnEclipse.addEventListener("click", () => {
      clearThemes();
      body.classList.add("theme-eclipse-active");
      btnEclipse.classList.add("active");
    });

    btnGround.addEventListener("click", () => {
      clearThemes();
      body.classList.add("theme-ground-active");
      if (header) header.classList.add("theme-ground-header");
      btnGround.classList.add("active");
    });
  }
});