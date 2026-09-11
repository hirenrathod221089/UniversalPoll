import { getPolls, swapPollOrder } from "../services/pollService";
import { showToast } from "../js/toast";

export function initializeMovePoll() {

    document.addEventListener("click", async (e) => {

        const isUp = e.target.classList.contains("move-up-btn");
        const isDown = e.target.classList.contains("move-down-btn");

        if (!isUp && !isDown) {
            return;
        }

        const pollId = e.target.dataset.id;

        e.target.disabled = true;

        try {
            const polls = await getPolls();

        const currentIndex = polls.findIndex(
            poll => poll.id === pollId
        );

        const targetIndex = isUp
            ? currentIndex - 1
            : currentIndex + 1;

        if (
            targetIndex < 0 ||
            targetIndex >= polls.length
        ) {
            return;
        }

        const currentPoll = polls[currentIndex];
        const targetPoll = polls[targetIndex];

        await swapPollOrder(
            currentPoll.id,
            currentPoll.order,
            targetPoll.id,
            targetPoll.order
        );

        showToast("Poll order updated!", "success");

        setTimeout(() => {

            location.reload();

        }, 1000);
    }

    catch (error) {

    console.error(error);

    showToast(
        "Unable to move poll.",
        "danger"
    );

    }
    finally {

        e.target.disabled = false;

    }

    });

}