var prevScrollpos = window.scrollY;
var currentScrollPos;
var brkorpa = 0;
window.onscroll = function () {
  currentScrollPos = window.scrollY;
  if (prevScrollpos < currentScrollPos) {
    document.getElementById("header").style.opacity = 0;
    document.getElementById("header").style.zIndex = 0;
    document.getElementById("header").style.transition = "all 1s";
    if (window.location.pathname.includes("index")) {
      document.getElementById("drugasekcija").style.borderTop = "2px solid rgba(246, 245, 245, 0.3)";
      document.getElementById("drugasekcija").style.transition = "all 0.5s";
    }
  }
  else {
    document.getElementById("header").style.opacity = 1;
    document.getElementById("header").style.zIndex = 1;
    document.getElementById("header").style.transition = "all 1s";
    if (window.location.pathname.includes("index")) {
      document.getElementById("drugasekcija").style.borderTop = "2px solid rgba(246, 245, 245, 1)";
      document.getElementById("drugasekcija").style.transition = "all 0.5s";
    }
  }
  if (window.location.pathname.includes("proizvodi")) {
    document.getElementById("korpadiv").style.display = "none";
  }
  prevScrollpos = currentScrollPos;
}

function Zamena(e) {
  e.innerText = "proizvodi iz ove prodavnice";
  e.style.setProperty("text-decoration", "none");
  document.getElementById("ime").innerText = "Miloš Bujak";
}

function Vrati(e) {
  e.innerText = "neznanje i samopouzdanje";
  e.style.setProperty("text-decoration", "line-through");
  document.getElementById("ime").innerText = "Mark Tven";
}

function PrikaziKorpu() {
  var korpa = document.getElementById("korpadiv");
  if (korpa.style.display == "none")
    korpa.style.display = "block";
}

function Sakrij(e) {
  if (!e.matches(':hover'))
    e.style.display = "none";
}
var animacija = false;
function Počni() {
  if (!animacija) {
    document.getElementById("ja").style.animation = "shake 0.5s infinite";
    setTimeout(() => { animacija = true }, 500);
  }
  else {
    document.getElementById("ja").style.animation = "none";
    setTimeout(() => { animacija = false }, 500);
  }
}

function Stani() {
  document.getElementById("ja").style.animation = "none";
}

function DodajUKorpu(e) {
  var korpacena = document.getElementById("korpacena");
  korpacena = parseInt(korpacena.innerText);
  var cena = e.children[1].children[1].innerText;
  var ime = e.children[1].children[0].innerText;
  var slika = e.children[0].src;
  cena = cena.slice(0, -1);
  cena = parseInt(cena);
  korpacena += cena;
  document.getElementById("korpacena").innerText = korpacena;
  document.getElementById("korpadiv").innerHTML +=
    `<div class='korpap'>
    <img src="${slika}">
    <span>${ime}</span><span>${cena}$</span>
    <i onclick="Ukloni(this)" class="fa fa-window-close "></i>
  </div>`;
  brkorpa += 1;
  document.getElementById("korpab").innerText = brkorpa;
  document.getElementById("dodato").style.display = "block";
  document.getElementById("dodato").style.opacity = 1;
  document.getElementById("dodato").style.animation = "0.3s pojavljivanje linear";
  document.getElementById("proizvodip").style.opacity = 0.3;
  setTimeout(() => {
    document.getElementById("dodato").style.display = "none";
    document.getElementById("proizvodip").style.opacity = 1;
  }, 800);

}

function Ukloni(e) {
  var korpacena = document.getElementById("korpacena").innerText;
  korpacena = parseInt(korpacena);
  var cena = e.parentElement.children[2].innerText;
  cena = cena.slice(0, -1);
  cena = parseInt(cena);
  korpacena -= cena;
  e.parentElement.remove();
  document.getElementById("korpacena").innerText = korpacena;
  brkorpa -= 1;
  document.getElementById("korpab").innerText = brkorpa;
}