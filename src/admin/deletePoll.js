import app from "../services/firebase";
import { showToast } from "../js/toast";
import { playSound } from "../js/sound";

import {
    getFirestore,
    deleteDoc,
    doc
} from "firebase/firestore";

const db = getFirestore(app);

export function initializeDelete() {

    document.addEventListener("click", async (e) => {

        if (!e.target.classList.contains("delete-btn"))
            return;

        const id = e.target.dataset.id;

        if (!id)
        return;

        if (!confirm("Delete this poll?"))
            return;

        try {

            await deleteDoc(doc(db, "polls", id));

            playSound("Trash_Delete.wav");

            showToast("Poll deleted successfully!", "success");

            await new Promise(resolve => setTimeout(resolve, 1500));

            location.reload();

        }
        catch (error) {

            showToast("Unable to delete poll. Please try again.", "danger");

        }

            });

}