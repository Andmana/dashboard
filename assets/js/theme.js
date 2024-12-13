const themeBtn = document.getElementById("theme");
const light = document.getElementById("sun");
const dark = document.getElementById("moon");
const root = document.querySelector(":root");

let theme = "light";

themeBtn.addEventListener("click", () => {
    let first = document.querySelector(".flip-box-front");
    let second = document.querySelector(".flip-box-back");

    first.replaceChildren();
    second.replaceChildren();

    if (theme === "light") {
        first.appendChild(dark);
        second.appendChild(light);

        theme = "dark";
        changeTheme();
    } else {
        first.appendChild(light);
        second.appendChild(dark);

        theme = "light";
        changeTheme();
    }
});

// On page load
document.addEventListener("DOMContentLoaded", (event) => {
    const a = 0;
});

function changeTheme() {
    let rootStyle = getComputedStyle(root);
    if (theme == "light") {
        root.style.setProperty("--bg-color", "white");
        root.style.setProperty("--bg2-color", "lightgray");
        root.style.setProperty("--primary-color", "#3b82f6");
        root.style.setProperty("--font-color", "black");
        root.style.setProperty("--font2-color", "#1e293b");
    } else {
        root.style.setProperty("--bg-color", "#111827");
        root.style.setProperty("--bg2-color", "#1e293b");
        root.style.setProperty("--primary-color", "#020617");
        root.style.setProperty("--font-color", "white");
        root.style.setProperty("--font2-color", "#cbd5e1");
    }
}
