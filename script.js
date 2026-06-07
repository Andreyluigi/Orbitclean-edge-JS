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
//formulario
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("satelliteForm");
  const successBox = document.getElementById("formSuccess");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault(); 
      
      let isValid = true;

      const fields = [
        { id: "nome_operadora", errorId: "err_nome" },
        { id: "email_contato", errorId: "err_email" },
        { id: "qtd_satelites", errorId: "err_qtd" }
      ];

      fields.forEach(field => {
        const input = document.getElementById(field.id);
        const errorSpan = document.getElementById(field.errorId);

        if (input && errorSpan) {
          if (input.value.trim() === "") {
            input.classList.add("input-error");
            errorSpan.style.display = "block";
            isValid = false;
          } else {
            input.classList.remove("input-error");
            errorSpan.style.display = "none";
          }
        }
      });

      if (isValid) {
        successBox.style.display = "block";
        form.reset();
        

        setTimeout(() => {
          successBox.style.display = "none";
        }, 5000);
      }
    });
  }
});