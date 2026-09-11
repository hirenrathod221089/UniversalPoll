export function AdminPollList(polls) {

    return polls.map((poll, index) => `

        <div
    class="card mt-3 poll-item"

    data-id="${poll.id}"
    data-category="${poll.category}"
    data-question="${poll.question}"
    data-optiona="${poll.optionA}"
    data-optionb="${poll.optionB}"
    data-votesa="${poll.votesA}"
    data-votesb="${poll.votesB}"
    data-totalvotes="${poll.totalVotes}"
    data-isvisible="${poll.isVisible !== false}"
    data-order="${poll.order}">

            <div class="card-body">

                <div class="d-flex justify-content-between">

                    <div>

                        <h5>${poll.question}</h5>

                        <span class="badge bg-primary">
                            ${poll.categoryName}
                        </span>

                        <span class="badge bg-${poll.isVisible !== false ? "success" : "danger"} ms-2">
                            ${poll.isVisible !== false ? "🟢 Visible" : "🔴 Hidden"}
                        </span>

                    </div>

                    <div>

                        ${index > 0 ? `
                        <button
                            class="btn btn-info btn-sm move-up-btn"
                            data-id="${poll.id}">

                            ⬆️

                        </button>
                        ` : ""}

                        ${index < polls.length - 1 ? `
                        <button
                            class="btn btn-info btn-sm move-down-btn"
                            data-id="${poll.id}">

                            ⬇️

                        </button>
                        ` : ""}

                        <button
                            class="btn btn-warning btn-sm me-1 edit-btn"
                            data-id="${poll.id}">

                            Edit

                        </button>

                        <button
                            class="btn btn-danger btn-sm delete-btn"
                            data-id="${poll.id}">

                            Delete

                        </button>

                        <button
                            class="btn btn-${poll.isVisible !== false ? "secondary" : "success"} btn-sm toggle-visibility-btn"
                            data-id="${poll.id}"
                            data-visible="${poll.isVisible !== false}">

                            ${poll.isVisible !== false ? "🙈 Hide" : "👁️ Unhide"}

                        </button>

                    </div>

                </div>

                <hr>

                <div class="row text-center">

                    <div class="col">

                        ${poll.optionA}

                        <br>

                        ${poll.votesA}

                    </div>

                    <div class="col">

                        ${poll.optionB}

                        <br>

                        ${poll.votesB}

                    </div>

                    <div class="col">

                        Total

                        <br>

                        ${poll.totalVotes}

                    </div>

                </div>

            </div>

        </div>

    `).join("");

}