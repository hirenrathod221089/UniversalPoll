import {
    getCategories,
    createCategory,
    updateCategory,
    toggleCategory
} from "../services/categoryService";

import { showToast } from "../js/toast";
import { playSound } from "../js/sound";


export function initializeCategoryManager() {

    const addButton = document.querySelector("#addCategoryBtn");
    const cancelButton = document.querySelector("#cancelCategoryBtn");

    if (!addButton) return;


    let editingCategoryId = null;


    // ---------------------------------
    // Add / Update Category
    // ---------------------------------

    addButton.addEventListener("click", async () => {

        const nameInput = document.querySelector("#categoryName");
        const iconInput = document.querySelector("#categoryIcon");

        const name = nameInput.value.trim();
        const icon = iconInput.value.trim();


        if (!name) {

            showToast(
                "Please enter category name.",
                "warning"
            );

            return;

        }


        if (!icon) {

            showToast(
                "Please enter category icon.",
                "warning"
            );

            return;

        }


        addButton.disabled = true;


        try {

            // ---------------------------------
            // UPDATE CATEGORY
            // ---------------------------------

            if (editingCategoryId) {

                await updateCategory(
                    editingCategoryId,
                    {
                        name,
                        icon
                    }
                );


                playSound("Success_Notification.wav");


                showToast(
                    "Category updated successfully!",
                    "success"
                );


                editingCategoryId = null;


                setTimeout(() => {

                    location.reload();

                }, 1000);


                return;

            }


            // ---------------------------------
            // CREATE CATEGORY
            // ---------------------------------

            const categories = await getCategories();


            const id = name
                .toLowerCase()
                .trim()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/^-+|-+$/g, "");


            if (!id) {

                showToast(
                    "Invalid category name.",
                    "warning"
                );

                return;

            }


            const exists = categories.some(
                category => category.id === id
            );


            if (exists) {

                showToast(
                    "A category with this name already exists.",
                    "warning"
                );

                return;

            }


            const maxOrder = categories.length > 0
                ? Math.max(
                    ...categories.map(category =>
                        Number(category.order) || 0
                    )
                )
                : 0;


            await createCategory({

                id,
                name,
                icon,
                order: maxOrder + 1,
                isActive: true

            });


            playSound("Success_Notification.wav");


            showToast(
                "Category added successfully!",
                "success"
            );


            setTimeout(() => {

                location.reload();

            }, 1000);

        }
        catch (error) {

            console.error(error);


            showToast(
                editingCategoryId
                    ? "Unable to update category."
                    : "Unable to add category.",
                "danger"
            );

        }
        finally {

            addButton.disabled = false;

        }

    });


    // ---------------------------------
    // Cancel Edit
    // ---------------------------------

    if (cancelButton) {

        cancelButton.addEventListener("click", () => {

            editingCategoryId = null;


            document.querySelector("#categoryName").value = "";
            document.querySelector("#categoryIcon").value = "";


            addButton.textContent = "Add Category";

            addButton.classList.remove("btn-warning");
            addButton.classList.add("btn-danger");


            cancelButton.classList.add("d-none");

        });

    }


    // ---------------------------------
    // Edit / Toggle
    // ---------------------------------

    document.addEventListener("click", async (event) => {


        // ---------------------------------
        // Edit Category
        // ---------------------------------

        const editButton =
            event.target.closest(".category-edit-btn");


        if (editButton) {

            editingCategoryId =
                editButton.dataset.id;


            const currentName =
                editButton.dataset.name;


            const currentIcon =
                editButton.dataset.icon;


            document.querySelector("#categoryName").value =
                currentName;


            document.querySelector("#categoryIcon").value =
                currentIcon;


            addButton.textContent =
                "Update Category";


            addButton.classList.remove("btn-danger");
            addButton.classList.add("btn-warning");


            if (cancelButton) {

                cancelButton.classList.remove("d-none");

            }


            document.querySelector("#categoryName").focus();


            return;

        }


        // ---------------------------------
        // Toggle Category
        // ---------------------------------

        const toggleButton =
            event.target.closest(".category-toggle-btn");


        if (toggleButton) {

            const id =
                toggleButton.dataset.id;


            const isActive =
                toggleButton.dataset.active === "true";


            try {

                await toggleCategory(
                    id,
                    isActive
                );


                playSound("Success_Notification.wav");


                showToast(
                    isActive
                        ? "Category disabled."
                        : "Category enabled.",
                    "success"
                );


                setTimeout(() => {

                    location.reload();

                }, 1000);

            }
            catch (error) {

                console.error(error);


                showToast(
                    "Unable to change category status.",
                    "danger"
                );

            }

        }

    });

}