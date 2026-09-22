const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

toggle?.addEventListener("click", () => {
  menu.classList.toggle("open");
});

document.querySelectorAll(".menu a").forEach(link => {
  link.addEventListener("click", () => menu.classList.remove("open"));
});
