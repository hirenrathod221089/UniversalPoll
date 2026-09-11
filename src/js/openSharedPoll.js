export function openSharedPoll() {

    const params = new URLSearchParams(window.location.search);

    const pollId = params.get("poll");

    if (!pollId)
        return;

    setTimeout(() => {

        const poll = document.querySelector(`#poll-${pollId}`);

        if (!poll)
            return;

        poll.scrollIntoView({

            behavior: "smooth",

            block: "center"

        });

        poll.classList.add("shared-poll");

        setTimeout(() => {

            poll.classList.remove("shared-poll");

        }, 3000);

    }, 500);

}