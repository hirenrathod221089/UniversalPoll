import { getPolls } from "./pollStore";
import { renderPolls } from "./renderPolls";
import { initializeVoting } from "./vote";

export function initializeSearch() {

    const searchInput = document.querySelector("#searchInput");

    searchInput.addEventListener("input", function () {

        const searchText = searchInput.value.toLowerCase();

        const polls = getPolls();

        const filteredPolls = polls.filter(poll => {

            return (
                poll.question.toLowerCase().includes(searchText) ||
                poll.optionA.toLowerCase().includes(searchText) ||
                poll.optionB.toLowerCase().includes(searchText)
            );

        });

        document.querySelector("#pollContainer").innerHTML =
            renderPolls(filteredPolls);


            initializeVoting();

    });

}