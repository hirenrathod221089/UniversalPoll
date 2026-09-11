export function Navbar() {

    return `
    
        <nav class="navbar navbar-expand-lg rounded-4 shadow-sm px-3">

            <div class="container-fluid">

                <a class="navbar-brand fw-bold text-danger" href="#">
                    Universal Poll
                </a>

                <div class="d-flex align-items-center gap-2">

                    <span
                        id="userName"
                        class="fw-semibold text-light">
                    </span>

                    <button
                        id="loginBtn"
                        class="btn btn-success btn-sm">

                        <i class="bi bi-google"></i>

                        Login

                    </button>

                    <button
                        id="logoutBtn"
                        class="btn btn-danger btn-sm d-none">

                        Logout

                    </button>

                    <button
                    class="btn btn-outline-secondary"
                    id="soundBtn">

                    <i class="bi bi-volume-up-fill"></i>

                    </button>

                    <button
                        class="btn btn-outline-secondary"
                        id="themeBtn">

                        <i class="bi bi-moon-stars-fill"></i>

                    </button>main

                </div>

            </div>

        </nav>

    `;

}