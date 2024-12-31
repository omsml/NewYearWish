// Countdown Timer Logic
const countdownElement = {
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds"),
};

const wishElement = document.getElementById("wish");
const titleElement = document.getElementById("title");
const footerElement = document.querySelector("footer p");
const newYearDate = new Date(new Date().getFullYear() + 1, 0, 1, 0, 0, 0);

// Wishes in both languages
const wishes = {
  en: [
    "Happy New Year! 🎉",
    "May this year bring joy and prosperity! 🎉",
    "Cheers to a fresh start and new opportunities! 🥂",
    "Let’s make this year unforgettable! 🌟",
    "Wishing you success, happiness, and health in the New Year! 🌟😊",
    "New Year, New Beginnings! ✨🎉",
    "Here’s to a year full of love, joy, and peace! ❤️",
  ],
  od: [
    "ନୂତନ ବର୍ଷକୁ ସ୍ବାଗତ! 🎉",
    "ଆଗାମୀ ବର୍ଷ ଆପଣଙ୍କୁ ସୁଖ ଏବଂ ସମୃଦ୍ଧି ଆଣିପାରେ! 🎉",
    "ନୂତନ ଆରମ୍ଭ ଏବଂ ନୂତନ ସୁଯୋଗର ପାଇଁ ଚିଆର୍ସ! 🥂",
    "ଏହି ବର୍ଷକୁ ଅବିସ୍ମରଣୀୟ କରିବା! 🌟",
    "ନୂତନ ବର୍ଷରେ ଆପଣଙ୍କୁ ସଫଳତା, ସୁଖ ଓ ସ୍ବାସ୍ଥ୍ୟ ମିଳୁ! 🌟😊",
    "ନୂତନ ବର୍ଷ, ନୂତନ ଆରମ୍ଭ! ✨🎉",
    "ଏହି ବର୍ଷକୁ ପ୍ରେମ, ସମ୍ମାନ ଏବଂ ଶାନ୍ତିର ପୂର୍ଣ୍ଣ ହେବା! ❤️",
  ],
};

// Translations for Days, Hours, Minutes, and Seconds
const translations = {
  en: {
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",
    footer: "Happy New Year From Codex. All Rights Reserved."
  },
  od: {
    days: "ଦିନ",
    hours: "ଘଣ୍ଟା",
    minutes: "ମିନିଟ୍",
    seconds: "ସେକେଣ୍ଡ୍",
    footer: "କୋଡେକ୍ସ ପକ୍ଷରୁ ନୂତନ ବର୍ଷର ଶୁଭେଚ୍ଛା । ସମସ୍ତ ଅଧିକାର ସଂରକ୍ଷିତ"
  }
};

// Update Countdown function
function updateCountdown() {
  const now = new Date();
  const timeLeft = newYearDate - now;

  if (timeLeft <= 0) {
    clearInterval(countdownInterval);
    titleElement.textContent = selectedLang === "en" ? "Happy New Year 2025!" : "ନୂତନ ବର୍ଷ 2025!"; // Update title after countdown ends
    wishElement.textContent = wishes[selectedLang][Math.floor(Math.random() * wishes[selectedLang].length)]; // Random wish based on language
    titleElement.style.fontSize = "4rem"; // Increase font size after countdown ends
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  countdownElement.days.textContent = String(days).padStart(2, "0");
  countdownElement.hours.textContent = String(hours).padStart(2, "0");
  countdownElement.minutes.textContent = String(minutes).padStart(2, "0");
  countdownElement.seconds.textContent = String(seconds).padStart(2, "0");
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();

// Language Switch
const languageSwitch = document.getElementById("language-switch");
let selectedLang = "en"; // Default language is English

languageSwitch.addEventListener("change", (event) => {
  selectedLang = event.target.value; // Update selected language

  // Update the title
  titleElement.textContent =
    selectedLang === "en" ? "Happy New Year!" : "ନୂତନ ବର୍ଷକୁ ସ୍ବାଗତ!";

  // Display a random wish based on the selected language
  wishElement.textContent = wishes[selectedLang][Math.floor(Math.random() * wishes[selectedLang].length)];

  // Update countdown labels based on the selected language
  const labels = document.querySelectorAll(
    "#countdown-section .countdown-item span:nth-child(2)"
  );
  const keys = ["days", "hours", "minutes", "seconds"];
  labels.forEach((label, index) => {
    label.textContent = translations[selectedLang][keys[index]];
  });

  // Update footer message based on the selected language
  footerElement.textContent = translations[selectedLang].footer;
});

// Random Wish on Refresh (default to English)
wishElement.textContent = wishes["en"][Math.floor(Math.random() * wishes["en"].length)];

// Theme Switch Logic
const themeToggleButton = document.getElementById("theme-toggle");

themeToggleButton.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  if (document.body.classList.contains("light-theme")) {
    themeToggleButton.textContent = "Switch to Dark Theme";
  } else {
    themeToggleButton.textContent = "Switch to Light Theme";
  }
});
