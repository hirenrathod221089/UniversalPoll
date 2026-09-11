export function PollCard(poll) {

    const percentageA =
    poll.totalVotes === 0
        ? 0
        : Math.round((poll.votesA / poll.totalVotes) * 100);

    const percentageB =
    poll.totalVotes === 0
        ? 0
        : 100 - percentageA;

    return `
        <div id="poll-${poll.id}" class="card poll-card shadow-lg border-0 rounded-4 overflow-hidden" data-id="${poll.id}" 
        data-question="${poll.question}">

    <div class="card-body p-4">

        <h2 class="poll-question fw-bold text-center mb-4">
            ${poll.question}
        </h2>

        <div class="poll-options row g-2 align-items-center mb-4">

            <div class="col">

                <button
    type="button"
    class="option-btn option-btn--a btn w-100 vote-btn"
    data-id="${poll.id}"
    data-option="A">

    <span class="option-badge">A</span>

    <span class="option-name">
        ${poll.optionA}
    </span>

</button>

            </div>

            <div class="col-auto">

                <div class="poll-vs">VS</div>

            </div>

            <div class="col">

                <button
    type="button"
    class="option-btn option-btn--b btn w-100 vote-btn"
    data-id="${poll.id}"
    data-option="B">

    <span class="option-badge">B</span>

    <span class="option-name">
        ${poll.optionB}
    </span>

</button>

            </div>

        </div>

        <div class="poll-stats py-4">

    <div class="mb-3">

        <div class="d-flex justify-content-between">

            <strong>${poll.optionA}</strong>

            <span>${percentageA}%</span>

        </div>

        <div class="progress mt-2">

            <div
                class="progress-bar bg-danger"
                style="width:${percentageA}%">

            </div>

        </div>

    </div>

    <div>

        <div class="d-flex justify-content-between">

            <strong>${poll.optionB}</strong>

            <span>${percentageB}%</span>

        </div>

        <div class="progress mt-2">

            <div
                class="progress-bar bg-primary"
                style="width:${percentageB}%">

            </div>

        </div>

    </div>

    <div class="text-center mt-4">

        👥 ${poll.totalVotes.toLocaleString()} Votes

    </div>

</div>

        <div class="poll-share d-flex justify-content-center gap-3">

            <a href="#" class="share-btn share-btn--whatsapp" aria-label="Share on WhatsApp">

                <i class="bi bi-whatsapp"></i>

            </a>

            <a href="#" class="share-btn share-btn--copy" aria-label="Copy Link">

            <i class="bi bi-link-45deg"></i>

            </a>

        </div>

    </div>

</div>
    `;
}
