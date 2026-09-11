export function AdminCategoryManager(categories) {

    return `

        <div class="card poll-card mb-4">

            <div class="card-body p-4">

                <h4 class="mb-4">
                    Manage Categories
                </h4>

                <div class="row g-2 mb-4">

                    <div class="col-md-2">

                        <input
                            id="categoryIcon"
                            class="form-control"
                            placeholder="Icon"
                            maxlength="2">

                    </div>

                    <div class="col-md-7">

                        <input
                            id="categoryName"
                            class="form-control"
                            placeholder="Category name">

                    </div>

                    <div class="col-md-3 d-flex gap-2">

                        <button
                            id="addCategoryBtn"
                            class="btn btn-danger w-100">

                            Add Category

                        </button>

                        <button
                            id="cancelCategoryBtn"
                            class="btn btn-secondary d-none">

                            Cancel

                        </button>

                    </div>

                </div>

                <div id="categoryList">

                    ${
                        categories.length === 0

                        ? `
                            <p class="text-muted mb-0">
                                No categories found.
                            </p>
                        `

                        : categories.map(category => `

                            <div
                                class="d-flex align-items-center justify-content-between border rounded-3 p-3 mb-2">

                                <div>

                                    <span class="fs-4 me-2">
                                        ${category.icon || "📁"}
                                    </span>

                                    <strong>
                                        ${category.name}
                                    </strong>

                                </div>

                                <div class="d-flex align-items-center gap-2">

                                    ${
                                        category.isActive !== false

                                        ? `
                                            <span class="badge bg-success">
                                                Active
                                            </span>
                                        `

                                        : `
                                            <span class="badge bg-secondary">
                                                Inactive
                                            </span>
                                        `
                                    }

                                    <button
                                        type="button"
                                        class="btn btn-sm btn-warning category-edit-btn"
                                        data-id="${category.id}"
                                        data-name="${category.name}"
                                        data-icon="${category.icon || ""}">

                                        Edit

                                    </button>

                                    <button
                                        type="button"
                                        class="btn btn-sm ${
                                            category.isActive !== false
                                                ? "btn-secondary"
                                                : "btn-success"
                                        } category-toggle-btn"
                                        data-id="${category.id}"
                                        data-active="${category.isActive !== false}">

                                        ${
                                            category.isActive !== false
                                                ? "Disable"
                                                : "Enable"
                                        }

                                    </button>

                                </div>

                            </div>

                        `).join("")
                    }

                </div>

            </div>

        </div>

    `;
}