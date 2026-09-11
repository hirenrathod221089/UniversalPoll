import "./services/firebase";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./css/style.css";

import { renderPage } from "./app";

import { initializeAuth } from "./js/auth";

import { initializeCreatePoll } from "./admin/createPoll";
import { initializeDelete } from "./admin/deletePoll";
import { initializeEdit } from "./admin/editPoll";
import { initializeToggleVisibility } from "./admin/toggleVisibility";
import { initializeAdminSearch } from "./admin/searchPoll";

import { protectAdminPage } from "./admin/adminGuard";

import { initializeMovePoll } from "./admin/movePoll";
import { initializeCategoryManager } from "./admin/categoryManager";

import { initializeTheme } from "./js/theme";

import { showToast } from "./js/toast";

async function init() {

    console.log("ADMIN MAIN LOADED");

    const result = await protectAdminPage();

    if (!result.success) {  

        document.querySelector("#app").innerHTML = `

<div class="container py-5">

    <div class="row justify-content-center">

        <div class="col-lg-5">

            <div class="card poll-card">

                <div class="card-body text-center p-5">

                    <i class="bi bi-shield-lock display-1 text-danger"></i>

                    <h2 class="mt-4">

                        ${result.message}

                    </h2>

                    <p class="text-muted mt-3">

                        ${
                            result.message === "Access Denied"
                                ? "You are signed in, but this account is not an administrator. Please logout and sign in with an administrator account."
                                : "Please sign in with an administrator account to continue."
                        }

                    </p>

                    <button
                        id="loginBtn"
                        class="btn btn-danger mt-3">

                        <i class="bi bi-google"></i>

                        Login with Google

                    </button>

                    <button
                        id="logoutBtn"
                        class="btn btn-secondary mt-3 d-none">

                        Logout

                    </button>

                    <h5
                        id="userName"
                        class="mt-4">

                    </h5>

                </div>

            </div>

        </div>

    </div>

</div>

`;

        initializeAuth();

        return;

    }

    await renderPage("admin");

    initializeAuth();

    initializeTheme();

    initializeCreatePoll();

    initializeDelete();

    initializeEdit();

    initializeAdminSearch();

    initializeToggleVisibility();

    initializeMovePoll();

    initializeCategoryManager();

}

init().catch((error) => {

    console.error(error);

    document.querySelector("#app").innerHTML = `

<div class="container py-5">

    <div class="alert alert-danger text-center">

        <h3>Something went wrong</h3>

        <p>${error.message}</p>

    </div>

</div>

`;

    showToast("Unable to load admin page.", "danger");

});