// Navigation & Menu
const menuLinks = document.querySelectorAll(".hamburger-menu a");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const hamburgerMenuBtn = document.querySelector(".hamburger-menu-btn");

// Preferences & Actions
const themeSwitchBtn = document.querySelector(".theme-switch-btn");

// Copy Triggers
const phoneCopyBtn = document.getElementById("phone-copy-btn");
const emailCopyBtn = document.getElementById("email-copy-btn");
const locationCopyBtn = document.getElementById("location-copy-btn");

let isDarkMode = localStorage.getItem("isDarkMode") === "true";

// Toast Triggers
const copyToastMsg = document.querySelector(".toast-copy");
const copyToastCloseBtn = document.querySelector(".toast-close-btn");

let hideTimeout;

function copyToast() {
  copyToastMsg.classList.add("shown");
  clearTimeout(hideTimeout);
  hideTimeout = setTimeout(() => {
    copyToastMsg.classList.remove("shown");
  }, 2500);
}

copyToastCloseBtn.addEventListener("click", () => {
  copyToastMsg.classList.remove("shown");
  clearTimeout(hideTimeout);
});

phoneCopyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText("+995577663355");
  copyToast();
});

emailCopyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText("binaryanalytics@gmail.com");
  copyToast();
});
locationCopyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText("Georgia, Tbilisi, N7");
  copyToast();
});

// legal updater
document.querySelector("#copyright-year").textContent =
  new Date().getFullYear();

document.addEventListener("click", (event) => {
  const clickedOutsideMenu = !hamburgerMenu.contains(event.target);
  const clickedOutsideBtn = !hamburgerMenuBtn.contains(event.target);
  if (clickedOutsideMenu && clickedOutsideBtn) {
    hamburgerMenu.classList.remove("active");
    document.querySelector("body").classList.remove("menu-open");
  }
});

menuLinks.forEach((button) => {
  const icon = document.createElement("span");
  icon.classList.add("material-symbols-rounded");
  icon.innerHTML = "chevron_right";
  icon.style.display = "none";
  button.appendChild(icon);

  const showIcon = () => (icon.style.display = "block");
  const hideIcon = () => (icon.style.display = "none");

  button.addEventListener("mouseenter", showIcon);
  button.addEventListener("mouseleave", hideIcon);
  button.addEventListener("focus", showIcon);
  button.addEventListener("blur", hideIcon);

  button.addEventListener("click", () => {
    hamburgerMenu.classList.remove("active");
    document.querySelector("body").classList.remove("menu-open");
  });
});

hamburgerMenuBtn.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  document.querySelector("body").classList.toggle("menu-open");
});

themeSwitchBtn.addEventListener("click", () => {
  if (isDarkMode == null) {
    isDarkMode = true;
    localStorage.setItem("isDarkMode", true);
  }
  if (isDarkMode) {
    isDarkMode = false;
    document.documentElement.setAttribute("data-theme", "light");
    document.querySelector(".theme-switch-btn span").innerHTML = "dark_mode";
    document.querySelector(".logo").src = "assets/images/icons/logo_dark.svg";
  } else {
    isDarkMode = true;
    document.documentElement.setAttribute("data-theme", "dark");
    document.querySelector(".theme-switch-btn span").innerHTML = "light_mode";
    document.querySelector(".logo").src = "assets/images/icons/logo_light.svg";
  }
});
