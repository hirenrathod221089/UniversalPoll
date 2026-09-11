import { getPolls } from "../services/pollService";
import { renderPolls } from "./renderPolls";
import { initializeVoting } from "./vote";
import { setPolls } from "./pollStore";
import { FeaturedPoll } from "../components/FeaturedPoll";

export async function refreshPolls() {

    const polls = await getPolls();

    const visiblePolls = polls.filter(
        poll => poll.isVisible !== false
    );

    setPolls(visiblePolls);

    const featuredContainer =
        document.querySelector("#featuredPollContainer");

    if (featuredContainer) {

        featuredContainer.innerHTML =
            FeaturedPoll(visiblePolls);

    }

    const container =
        document.querySelector("#pollContainer");

    if (!container) {
        return;
    }

    container.innerHTML =
        renderPolls(visiblePolls);

    initializeVoting();

}