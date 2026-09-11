import "./services/firebase";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./css/style.css";

import { renderPage } from "./app";

import { initializeSearch } from "./js/search";
import { setupCategoryFilter } from "./js/category";
import { initializeVoting } from "./js/vote";
import { initializeAuth } from "./js/auth";

import { initializeCreatePoll } from "./admin/createPoll";
import { initializeDelete } from "./admin/deletePoll";
import { initializeEdit } from "./admin/editPoll";
import { initializeCategoryManager } from "./admin/categoryManager";
import { initializeShare } from "./js/share";
import { openSharedPoll } from "./js/openSharedPoll";
import { initializeTheme } from "./js/theme";

import { showToast } from "./js/toast";


async function init() {

    // Change to "admin" while developing admin features.
    const page = "home";

    await renderPage(page);

    initializeAuth();

    initializeTheme();

    if (page === "home") {

        initializeSearch();

        setupCategoryFilter();

        initializeVoting();

        initializeShare();

        openSharedPoll();

    }
    else {

    initializeCreatePoll();

    initializeDelete();

    initializeEdit();

    initializeCategoryManager();

    }

}


init().catch((error) => {

    console.error(error);

    showToast(
        "Application failed to start.",
        "danger"
    );

});