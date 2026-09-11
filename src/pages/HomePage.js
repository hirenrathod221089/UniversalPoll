import { getPolls } from "../services/pollService";
import { getCategories } from "../services/categoryService";
import { renderPolls } from "../js/renderPolls";
import { setPolls } from "../js/pollStore";
import { Navbar } from "../components/Navbar";
import { SearchBar } from "../components/SearchBar";
import { CategoryBar } from "../components/CategoryBar";
import { AdvertisementModal } from "../components/AdvertisementModal";
import { Toast } from "../components/Toast";
import { FeaturedPoll } from "../components/FeaturedPoll";

export async function HomePage() {

    try {

        const polls = await getPolls();

        const categories = await getCategories();

        const activeCategories = categories.filter(
            category => category.isActive !== false
        );

        const activeCategoryIds = new Set(
            activeCategories.map(category => category.id)
        );

        const visiblePolls = polls.filter(
            poll =>
                poll.isVisible !== false &&
                activeCategoryIds.has(poll.category)
        );

        setPolls(visiblePolls);

        const pollCards = renderPolls(visiblePolls);

        return `

        <div class="container py-5">

            ${Navbar()}

            <div class="text-center mt-3 mb-4">

                <h3 class="fw-bold text-light">
                    Universal Poll 🌍
                </h3>

                <p class="text-secondary mb-0">
                    Let's build a universal opinion together.
                </p>

                <p class="text-secondary mb-0">
                    Vote honestly, discover public opinion, and share it with your friends.
                </p>

            </div>

            ${SearchBar()}

            ${CategoryBar(activeCategories)}

            <div id="featuredPollContainer">

                ${FeaturedPoll(visiblePolls)}

            </div>

            <div id="pollContainer">

                ${pollCards}

            </div>

        </div>

${AdvertisementModal()}

${Toast()}

`;

    }
    catch {

        return `

<div class="container py-5">

    ${Navbar()}

    <div class="alert alert-danger">

        Unable to load polls.
        Please refresh the page.

    </div>

</div>

`;

    }

}