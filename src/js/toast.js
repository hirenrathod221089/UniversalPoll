import { Toast as BootstrapToast } from "bootstrap";

export function showToast(message, type = "success") {

    const toast = document.querySelector("#appToast");

    const body = document.querySelector("#toastMessage");

    body.innerHTML = message;

    toast.className = "toast border-0";

    switch (type) {

    case "success":

        body.innerHTML = "✅ " + message;

        toast.classList.add("text-bg-success");

        break;

    case "danger":

        body.innerHTML = "❌ " + message;

        toast.classList.add("text-bg-danger");

        break;

    case "warning":

        body.innerHTML = "⚠️ " + message;

        toast.classList.add("text-bg-warning");

        break;

    default:

        body.innerHTML = "ℹ️ " + message;

        toast.classList.add("text-bg-dark");

}

    const toastInstance = BootstrapToast.getOrCreateInstance(toast, {

    delay: 3000

});

toastInstance.show();

}