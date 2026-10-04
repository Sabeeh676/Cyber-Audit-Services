const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}

document.querySelectorAll(".menu > button").forEach((button) => {
  button.addEventListener("click", () => {
    const open = button.parentElement.classList.toggle("open");
    button.setAttribute("aria-expanded", String(open));
  });
});

document.querySelectorAll(".submenu > button").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    button.parentElement.classList.toggle("open");
  });
});

const slides = [...document.querySelectorAll(".slide")];
const dots = [...document.querySelectorAll(".dots button")];
let index = 0;

function show(next) {
  if (!slides.length) return;
  index = (next + slides.length) % slides.length;
  slides.forEach((slide, i) => slide.classList.toggle("active", i === index));
  dots.forEach((dot, i) => {
    if (i === index) dot.setAttribute("aria-current", "true");
    else dot.removeAttribute("aria-current");
  });
}

document.querySelectorAll("[data-slide]").forEach((button) => {
  button.addEventListener("click", () => show(index + Number(button.dataset.slide)));
});
dots.forEach((dot, i) => dot.addEventListener("click", () => show(i)));

const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.reset();
    const note = document.querySelector(".note");
    if (note) note.style.display = "block";
  });
}
