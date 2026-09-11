import { getPolls } from "../services/pollService";
import { AdminPollList } from "../components/AdminPollList";
import { Toast } from "../components/Toast";
import { AdminDashboard } from "../components/AdminDashboard";
import { AdminSearchBar } from "../components/AdminSearchBar";
import { getCategories } from "../services/categoryService";
import { AdminCategoryManager } from "../components/AdminCategoryManager";

export async function AdminPage() {

    const polls = await getPolls();
    const categories = await getCategories();

    return `

    <div class="container py-5">

        <h2 class="fw-bold mb-1">
            Admin Dashboard
        </h2>

        <p class="text-muted mb-4">
            Manage polls, monitor voting activity, and control visibility.
        </p>

        ${AdminDashboard(polls)}

        ${AdminCategoryManager(categories)}

    <div class="card poll-card">

        <div class="card-body p-4">

            <h4 class="mb-4">
                Create New Poll
            </h4>

            <div class="mb-3">

                <label class="form-label">
                    Category
                </label>

            <select id="category" class="form-select">

                ${
                    categories
                        .filter(category => category.isActive !== false)
                        .map(category => `
                            
                            <option
                                value="${category.id}"
                                data-name="${category.name}"
                                data-icon="${category.icon || ""}">
                                
                                ${category.icon || ""} ${category.name}

                            </option>

                        `)
                        .join("")
                }

            </select>

            </div>

            <div class="mb-3">

                <label class="form-label">
                    Question
                </label>

                <input
                    id="question"
                    class="form-control"
                    placeholder="Enter question">

            </div>

            <div class="mb-3">

                <label class="form-label">
                    Option A
                </label>

                <input
                    id="optionA"
                    class="form-control"
                    placeholder="First option">

            </div>

            <div class="mb-4">

                <label class="form-label">
                    Option B
                </label>

                <input
                    id="optionB"
                    class="form-control"
                    placeholder="Second option">

            </div>

            <button
                id="createPollBtn"
                class="btn btn-danger w-100">

                Create Poll

            </button>

        </div>

    </div>

    <hr class="my-4">

    <div class="d-flex justify-content-between align-items-center mb-2">

        <div>

            <h3 class="mb-1">
                📚 Poll Library (${polls.length})
            </h3>

            <small class="text-muted">
                <small class="text-muted">
                    Browse, search and manage all polls from one place.
                </small>

        </div>

    </div>

    ${AdminSearchBar()}

    ${AdminPollList(polls)}

    ${Toast()}

</div>

`;
}