export function FeaturedPoll(polls) {

    if (!polls || polls.length === 0) {
        return "";
    }

    const featuredPoll = [...polls]
        .sort((a, b) => (b.totalVotes || 0) - (a.totalVotes || 0))[0];

    return `

        <div class="card poll-card mb-4">

            <div class="card-body p-4">

                <div class="d-flex align-items-center mb-2">

                    <span class="badge bg-warning text-dark">
                        🔥 Trending
                    </span>

                </div>

                <h4 class="fw-bold mb-2">
                    ${featuredPoll.question}
                </h4>

                <p class="text-muted mb-0">
                    ${featuredPoll.totalVotes || 0} votes
                </p>

            </div>

        </div>

    `;
}