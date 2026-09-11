export function initializeAdminSearch() {

    const searchBox = document.querySelector("#adminSearch");

    if (!searchBox) {
        return;
    }

    searchBox.addEventListener("input", () => {

        const value = searchBox.value
            .trim()
            .toLowerCase();

        document
            .querySelectorAll(".poll-item")
            .forEach(card => {

                const text = card.textContent.toLowerCase();

                card.style.display =
                    text.includes(value)
                        ? ""
                        : "none";

            });

    });

}