const themeSwitcher = document.querySelector(".theme-switcher");

let currentTheme = localStorage.getItem("theme");

document.documentElement.className = `theme-${currentTheme ?? "light"}`;

themeSwitcher.addEventListener("click", () => {
    currentTheme = currentTheme == "dark" ? "light" : "dark";
    document.documentElement.className = `theme-${currentTheme}`;
    localStorage.setItem("theme", currentTheme);
});
