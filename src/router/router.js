export function getCurrentPage() {

    const path = window.location.pathname.toLowerCase();

    if (path === "/admin") {

        return "admin";

    }

    return "home";

}