let buton1 = document.querySelector(".buton1");
let giris2 = document.querySelector(".giris2");
let giris1 = document.querySelector(".giris1");
let buton2 = document.querySelector(".buton2");
let giris3 = document.querySelector(".giris3");
let giris4 = document.querySelector(".giris4");
let buton3 = document.querySelector(".buton3");
let buton4 = document.querySelector(".buton4");
let giris5 = document.querySelector(".giris5");
let bayan = document.querySelectorAll(".giris5 input")[0];
let erkek = document.querySelectorAll(".giris5 input")[1];
let buton6 = document.querySelector(".buton6");
let giris6 = document.querySelector(".giris6");

let buton5 = document.querySelector(".buton5");
let asksonuc = document.querySelector("#asksonuc");
buton5.addEventListener("click", function () {
  let bayanismi = bayan.value;
  let erkekismi = erkek.value;
  asksonuc.textContent = "Aşk oranınız: %100 💕";
  asksonuc.style.display = "block";
});

buton1.addEventListener("click", function () {
  giris1.style.display = "none";
  giris2.style.display = "flex";
});
buton2.addEventListener("click", function () {
  giris2.style.display = "none";
  giris3.style.display = "flex";
});
buton3.addEventListener("click", function () {
  giris3.style.display = "none";
  giris4.style.display = "flex";
});
buton4.addEventListener("click", function () {
  giris4.style.display = "none";
  giris5.style.display = "flex";
});
buton6.addEventListener("click", function () {
  giris5.style.display = "none";
  giris6.style.display = "flex";
});
let geri2 = document.querySelector(".geri2");
let geri3 = document.querySelector(".geri3");
let geri4 = document.querySelector(".geri4");
let geri5 = document.querySelector(".geri5");
let geri6 = document.querySelector(".geri6");

geri2.addEventListener("click", function () {
  giris2.style.display = "none";
  giris1.style.display = "flex";
});

geri3.addEventListener("click", function () {
  giris3.style.display = "none";
  giris2.style.display = "flex";
});

geri4.addEventListener("click", function () {
  giris4.style.display = "none";
  giris3.style.display = "flex";
});

geri5.addEventListener("click", function () {
  giris5.style.display = "none";
  giris4.style.display = "flex";
});

geri6.addEventListener("click", function () {
  giris6.style.display = "none";
  giris5.style.display = "flex";
});
