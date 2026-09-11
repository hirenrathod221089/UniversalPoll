export function CategoryBar(categories) {

    const categoryList = [];

    // ---------------------------------
    // All Categories button
    // ---------------------------------

    categoryList.push({
        key: "all",
        name: "🌎 All",
        color: "danger"
    });


    // ---------------------------------
    // Active categories from Firestore
    // ---------------------------------

    categories.forEach(category => {

        let color = "secondary";

        if (category.id === "sports")
            color = "primary";

        if (category.id === "movies")
            color = "success";

        if (category.id === "technology")
            color = "warning";

        if (category.id === "food")
            color = "info";


        categoryList.push({

            key: category.id,

            name: `${category.icon || "📁"} ${category.name}`,

            color

        });

    });


    // ---------------------------------
    // Render buttons
    // ---------------------------------

    let html = `
        <div class="mt-4 d-flex gap-2 flex-wrap">
    `;


    categoryList.forEach(category => {

        html += `

            <button
                class="btn btn-sm btn-${category.color} rounded-pill category-btn"
                data-category="${category.key}">

                ${category.name}

            </button>

        `;

    });


    html += `</div>`;


    return html;

}