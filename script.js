// Navigation & Menu
const menuLinks = document.querySelectorAll(".hamburger-menu a");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const hamburgerMenuBtn = document.querySelector(".hamburger-menu-btn");
const menuBtnIcon = document.querySelector(
  ".material-symbols-rounded.menu-btn",
);

// Preferences & Actions
const themeSwitchBtn = document.querySelector(".theme-switch-btn");
const themeSwitchIcon = document.querySelector(".theme-switch-btn span");
const siteLogo = document.querySelector(".logo");

let isDarkMode = false;

// Copy Triggers
const phoneCopyBtn = document.getElementById("phone-copy-btn");
const emailCopyBtn = document.getElementById("email-copy-btn");
const locationCopyBtn = document.getElementById("location-copy-btn");

// Toast Triggers
const copyToastMsg = document.querySelector(".toast-copy");
const copyToastCloseBtn = document.querySelector(".toast-close-btn");

const documentBody = document.body;

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
  animateIconChange(phoneCopyBtn, "check");
  setTimeout(() => {
    animateIconChange(phoneCopyBtn, "content_copy");
  }, 1000);
});

emailCopyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText("binaryanalytics@gmail.com");
  copyToast();
  animateIconChange(emailCopyBtn, "check");
  setTimeout(() => {
    animateIconChange(emailCopyBtn, "content_copy");
  }, 1000);
});
locationCopyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText("Georgia, Tbilisi, N7");
  copyToast();
  animateIconChange(locationCopyBtn, "check");
  setTimeout(() => {
    animateIconChange(locationCopyBtn, "content_copy");
  }, 1000);
});

// legal updater
document.querySelector("#copyright-year").textContent =
  new Date().getFullYear();

document.addEventListener("click", (event) => {
  const clickedOutsideMenu = !hamburgerMenu.contains(event.target);
  const clickedOutsideBtn = !hamburgerMenuBtn.contains(event.target);
  if (clickedOutsideMenu && clickedOutsideBtn) {
    hamburgerMenu.classList.remove("active");
    documentBody.classList.remove("menu-open");
  }
  checkMenuIsOpen();
});

menuLinks.forEach((button) => {
  const icon = document.createElement("span");
  icon.classList.add("material-symbols-rounded");
  icon.textContent = "chevron_right";
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
    documentBody.classList.remove("menu-open");
  });
});

function animateIconChange(icon, iconName) {
  if (iconName != icon.textContent) {
    icon.classList.add("changing");

    setTimeout(() => {
      icon.textContent = iconName;
      icon.classList.remove("changing");
    }, 150);
  }
}

function checkMenuIsOpen() {
  const isMenuOpen = hamburgerMenu.classList.contains("active");

  if (isMenuOpen) {
    animateIconChange(menuBtnIcon, "close");
  } else {
    animateIconChange(menuBtnIcon, "menu");
  }
}

hamburgerMenuBtn.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  documentBody.classList.toggle("menu-open");
  checkMenuIsOpen();
});

themeSwitchBtn.addEventListener("click", () => {
  if (isDarkMode) {
    isDarkMode = false;
    document.documentElement.setAttribute("data-theme", "light");
    animateIconChange(themeSwitchIcon, "dark_mode");
    siteLogo.src = "assets/images/icons/logo_dark.svg";
  } else {
    isDarkMode = true;
    document.documentElement.setAttribute("data-theme", "dark");
    animateIconChange(themeSwitchIcon, "light_mode");
    siteLogo.src = "assets/images/icons/logo_light.svg";
  }
});

window.addEventListener("load", async () => {
  await document.fonts.ready;
  document.querySelector(".loader-overlay").remove();
});
