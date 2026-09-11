export function Toast() {

    return `

<div
    class="toast-container position-fixed top-0 end-0 p-3"
    style="z-index:9999;">

    <div
    id="appToast"
    class="toast border-0"
    role="alert"
    style="min-width:320px;">
    
        <div class="d-flex">

            <div
                id="toastMessage"
                class="toast-body">

            </div>

            <button
                class="btn-close btn-close-white me-2 m-auto"
                data-bs-dismiss="toast">

            </button>

        </div>

    </div>

</div>

`;

}