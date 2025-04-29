const nav = document.querySelector(".website__nav");
let logo = document.querySelector(".website__nav-logo");
let home = document.querySelector(".home");
const bottomContainer = document.querySelector(".website__bottom");

document.addEventListener("scroll", () => {
  if (window.scrollY > bottomContainer.offsetTop - nav.offsetHeight - 50) {
    nav.classList.add("active");
    logo.src = "./img/logo-dark.png";
    home.src = "./img/home-dark.png";
  } else {
    nav.classList.remove("active");
    logo.src = "./img/logo-light.png";
    home.src = "./img/home.png";
  }
});
