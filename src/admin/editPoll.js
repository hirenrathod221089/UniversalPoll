export let editingPollId = null;
export let editingPoll = null;

export function initializeEdit() {

    document.addEventListener("click", (e) => {
        if (!e.target.classList.contains("edit-btn"))
            return;

        const card = e.target.closest(".poll-item");

        if (!card) return;

        editingPollId = e.target.dataset.id;

        editingPoll = {

            votesA: Number(card.dataset.votesa) || 0,

            votesB: Number(card.dataset.votesb) || 0,

            totalVotes: Number(card.dataset.totalvotes) || 0,

            hasVoted: false,

            isVisible: card.dataset.isvisible === "true",

            order: Number(card.dataset.order)

        };

        document.querySelector("#category").value =
            card.dataset.category;

        document.querySelector("#question").value =
            card.dataset.question;

        document.querySelector("#optionA").value =
            card.dataset.optiona;

        document.querySelector("#optionB").value =
            card.dataset.optionb;

            const btn = document.querySelector("#createPollBtn");

            if (!btn)
                return;


        btn.textContent = "Update Poll";
        btn.classList.remove("btn-danger");
        btn.classList.add("btn-warning");

        window.scrollTo({

            top: document.body.scrollHeight,
            behavior: "smooth"

        });

    });

}