import { toggleVisibility } from "../services/pollService";
import { showToast } from "../js/toast";
import { playSound } from "../js/sound";

export function initializeToggleVisibility() {

    document.addEventListener("click", async (e) => {

        if (!e.target.classList.contains("toggle-visibility-btn")) {
            return;
        }

        const id = e.target.dataset.id;
        const isVisible = e.target.dataset.visible === "true";

        const message = isVisible
            ? "Hide this poll?"
            : "Make this poll visible again?";

        if (!confirm(message)) {
            return;
        }

        try {

            await toggleVisibility(id, isVisible);

            playSound(isVisible ? "Whoosh.wav" : "Ding.wav");

            showToast(
                isVisible
                    ? "Poll hidden successfully."
                    : "Poll is visible again.",
                "success"
            );

            setTimeout(() => {
                location.reload();
            }, 700);

        }
        catch (error) {

            console.error(error);

            showToast(
                "Unable to update poll visibility.",
                "danger"
            );
        }

    });

}