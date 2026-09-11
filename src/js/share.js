import { showToast } from "./toast";
import { playSound } from "./sound";

export function initializeShare() {

    document.addEventListener("click", async (e) => {

        // WhatsApp

        if (e.target.closest(".share-btn--whatsapp")) {

            e.preventDefault();

            const card = e.target.closest(".poll-card");

            const pollId = card.dataset.id;

            const question = card.dataset.question;

            const url =
                `${window.location.origin}?poll=${pollId}`;

            const message =
`${question}

Vote here:
${url}`;

            window.open(

                `https://wa.me/?text=${encodeURIComponent(message)}`,

                "_blank"

            );

        }

        // Copy Link

if (e.target.closest(".share-btn--copy")) {

    e.preventDefault();

    const card = e.target.closest(".poll-card");

    const pollId = card.dataset.id;

    const url =
        `${window.location.origin}?poll=${pollId}`;

    await navigator.clipboard.writeText(url);

    playSound("Pop.wav");

    showToast("Link copied to clipboard!", "success");

}

    });

}