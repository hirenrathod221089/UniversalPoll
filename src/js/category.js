import { getPolls } from "./pollStore";
import { renderPolls } from "./renderPolls";
import { initializeVoting } from "./vote";

import { getCategories } from "../services/categoryService";


export async function setupCategoryFilter() {

    const buttons = document.querySelectorAll(".category-btn");

    if (!buttons.length) return;


    // Get all categories from Firestore
    const categories = await getCategories();


    // Only active categories
    const activeCategories = categories.filter(
        category => category.isActive !== false
    );


    // Create a quick lookup of active category IDs
    const activeCategoryIds = new Set(
        activeCategories.map(category => category.id)
    );


    // Get all polls
    const polls = getPolls();


    // ---------------------------------
    // Show only polls from active categories
    // ---------------------------------

    const visiblePolls = polls.filter(poll =>
        activeCategoryIds.has(poll.category)
    );


    // ---------------------------------
    // Category buttons
    // ---------------------------------

    buttons.forEach(button => {

        const category = button.dataset.category;


        // Hide category button if category is inactive
        if (
            category !== "all" &&
            !activeCategoryIds.has(category)
        ) {

            button.style.display = "none";

            return;

        }


        button.addEventListener("click", () => {

            let filteredPolls;


            // All
            if (category === "all") {

                filteredPolls = visiblePolls;

            }

            // Specific category
            else {

                filteredPolls = visiblePolls.filter(
                    poll => poll.category === category
                );

            }


            document.querySelector("#pollContainer").innerHTML =
                renderPolls(filteredPolls);


            initializeVoting();

        });

    });


    // ---------------------------------
    // Initial page load
    // ---------------------------------

    const pollContainer =
        document.querySelector("#pollContainer");


    if (pollContainer) {

        pollContainer.innerHTML =
            renderPolls(visiblePolls);

        initializeVoting();

    }

}