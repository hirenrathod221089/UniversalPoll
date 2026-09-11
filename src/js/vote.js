import { votePoll, hasUserVoted, saveUserVote } from "../services/pollService";
import { getCurrentUser } from "../services/authService";
import { refreshPolls } from "./refreshPolls";
import { showAdvertisement } from "./advertisement";
import { showToast } from "./toast";
import { playSound } from "./sound";

export function initializeVoting() {

    const buttons = document.querySelectorAll(".vote-btn");

    buttons.forEach(button => {

        button.addEventListener("click", async () => {

            const user = getCurrentUser();

            if (!user) {

                showToast("Please login first.", "warning");

                return;

            }

            const pollId = button.dataset.id;
            const option = button.dataset.option;

            button.disabled = true;

            try {

                console.log("1. Checking existing vote...");

                const alreadyVoted =
                    await hasUserVoted(pollId, user.uid);

                console.log(
                    "2. Existing vote check passed:",
                    alreadyVoted
                );

                if (alreadyVoted) {

                    showToast(
                        "You have already voted on this poll.",
                        "warning"
                    );

                    return;

                }

                console.log("3. Showing advertisement...");

                await showAdvertisement();

                console.log("4. Advertisement completed.");

                console.log("5. Updating poll...");

                await votePoll(pollId, option);

                console.log("6. Poll updated successfully.");

                console.log("7. Saving user vote...");

                await saveUserVote(
                    pollId,
                    user.uid,
                    option
                );

                console.log("8. User vote saved successfully.");

                await refreshPolls();

                playSound("Mouse_Click.wav");

                showToast(
                    "Vote submitted successfully!",
                    "success"
                );

            }
            catch (error) {

                console.error(error);

                showToast(
                    "Unable to submit your vote.",
                    "danger"
                );

            }
            finally {

                button.disabled = false;

            }

        });

    });

}