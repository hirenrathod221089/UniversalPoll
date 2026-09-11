export function AdvertisementModal() {

    return `

<div
    class="modal fade"
    id="advertisementModal"
    tabindex="-1">

    <div class="modal-dialog modal-dialog-centered">

        <div class="modal-content bg-dark text-white">

            <div class="modal-header">

                <h5 class="modal-title">

                    Sponsored

                </h5>

            </div>

            <div class="modal-body text-center">

                <img
                    src="https://placehold.co/600x250?text=Your+Advertisement"
                    class="img-fluid rounded mb-3">

                <h5>

                    Your Advertisement Here

                </h5>

                <p>

                    Continue in

                    <span id="adTimer">

                        5

                    </span>

                    seconds...

                </p>

            </div>

            <div class="modal-footer">

                <button
                    id="continueVoteBtn"
                    class="btn btn-success"
                    disabled>

                    Continue

                </button>

            </div>

        </div>

    </div>

</div>

`;

}