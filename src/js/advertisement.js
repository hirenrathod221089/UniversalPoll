import { Modal } from "bootstrap";

export function showAdvertisement() {

    return new Promise((resolve) => {

        const modalElement = document.querySelector("#advertisementModal");

        const modal = new Modal(modalElement, {

            backdrop: "static",

            keyboard: false

        });

        const continueBtn = document.querySelector("#continueVoteBtn");

        const timer = document.querySelector("#adTimer");

        let seconds = 5;

        continueBtn.disabled = true;

        timer.innerText = seconds;

        modal.show();

        const interval = setInterval(() => {

            seconds--;

            timer.innerText = seconds;

            if (seconds <= 0) {

                clearInterval(interval);

                continueBtn.disabled = false;

            }

        }, 1000);

        continueBtn.onclick = () => {

            continueBtn.disabled = true;

            modal.hide();

            resolve();

        };

    });

}