"use strict";
// let dark = localStorage.getItem("dark");
const mobileMenu = document.querySelector(".mobile-menu");
const darkColor = document.querySelector(".dark-color");
const mobileBtns = document.querySelectorAll(".mobile-nav");
const darkTheme = document.querySelector(".dark-theme");
const darkMode = document.querySelector(".dark");
mobileBtns.forEach((btnEl) => {
  btnEl.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
});

// const removeDark = () => {
//   heroSection.classList.remove("dark");
// };
// removeDark();
// darkTheme.addEventListener("click", () => {
//   heroSection.classList.toggle("dark");
// });
// const enableDarkMode = () => {

//   // localStorage.setItem("dark", "active");
// };
// const disableDarkMode = () => {
//   document.body.classList.remove("dark");
//   // localStorage.setItem("dark", null);
// };

// if (dark === "active") enableDarkMode();
darkTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
