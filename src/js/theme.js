import {
    isSoundEnabled,
    toggleSound
} from "./sound";

export function initializeTheme() {

    const themeBtn = document.querySelector("#themeBtn");

    const soundBtn = document.querySelector("#soundBtn");

    if (!themeBtn || !soundBtn) {
    return;
}

    // Load saved theme
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {

        document.body.classList.add("light-theme");

        themeBtn.innerHTML = '<i class="bi bi-sun-fill"></i>';

    }

    soundBtn.innerHTML = isSoundEnabled()
    ? '<i class="bi bi-volume-up-fill"></i>'
    : '<i class="bi bi-volume-mute-fill"></i>';

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light-theme");

        const isLight =
            document.body.classList.contains("light-theme");

        localStorage.setItem(
            "theme",
            isLight ? "light" : "dark"
        );

        themeBtn.innerHTML = isLight
            ? '<i class="bi bi-sun-fill"></i>'
            : '<i class="bi bi-moon-stars-fill"></i>';

    });

    soundBtn.addEventListener("click", () => {

    const enabled = toggleSound();

    soundBtn.innerHTML = enabled
        ? '<i class="bi bi-volume-up-fill"></i>'
        : '<i class="bi bi-volume-mute-fill"></i>';

    });

}