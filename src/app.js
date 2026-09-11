import { HomePage } from "./pages/HomePage";
import { AdminPage } from "./pages/AdminPage";

export async function renderPage(page) {

    const app = document.querySelector("#app");

    switch (page) {

        case "admin":

            app.innerHTML = await AdminPage();
            break;

        default:

            app.innerHTML = await HomePage();
            break;

    }

}