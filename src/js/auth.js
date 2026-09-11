import { showToast } from "./toast";

import {
    login,
    logout,
    auth
} from "../services/authService";

import {
    onAuthStateChanged
} from "firebase/auth";

export function initializeAuth() {

    const loginBtn = document.querySelector("#loginBtn");
    const logoutBtn = document.querySelector("#logoutBtn");
    const userName = document.querySelector("#userName");

    if (loginBtn) {

        loginBtn.addEventListener("click", async () => {

            try {

                await login();

                location.reload();

            }
            catch (error) {

                showToast("Login failed. Please try again.", "danger");

            }

        });

    }

    if (logoutBtn) {

        logoutBtn.addEventListener("click", async () => {

            try {

                await logout();

            }
            catch (error) {

                showToast("Logout failed. Please try again.", "danger");

            }

        });

    }

    onAuthStateChanged(auth, (user) => {

        if (!loginBtn || !logoutBtn || !userName)
            return;

        if (user) {

            userName.innerText = user.displayName;

            loginBtn.classList.add("d-none");

            logoutBtn.classList.remove("d-none");

        }
        else {

            userName.innerText = "";

            loginBtn.classList.remove("d-none");

            logoutBtn.classList.add("d-none");

        }

    });

}