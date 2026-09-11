import { showToast } from "../js/toast";
import {
    createPoll,
    updatePoll
} from "../services/pollService";

import {
    editingPollId,
    editingPoll
} from "./editPoll";

import { playSound } from "../js/sound";

export function initializeCreatePoll() {

    const button = document.querySelector("#createPollBtn");

    if (!button) return;

    button.addEventListener("click", async () => {

        button.disabled = true;

        try {
            
            const categorySelect = document.querySelector("#category");

            const category = categorySelect.value;

            if (!category) {

                showToast("Please select a category.", "warning");

                return;

            }

            const selectedCategory =
                categorySelect.options[categorySelect.selectedIndex];

            const categoryName =
                `${selectedCategory.dataset.icon || ""} ${selectedCategory.dataset.name}`.trim();

            const question =
                document.querySelector("#question").value.trim();

            const optionA = document.querySelector("#optionA").value.trim();
            const optionB = document.querySelector("#optionB").value.trim();

    if (!question || !optionA || !optionB) {
        showToast("Please fill all fields.", "warning");
        return;
    }

    if (optionA.toLowerCase() === optionB.toLowerCase()) {

    showToast("Both options cannot be the same.", "warning");

    return;

}

    const poll = {
        category,
        categoryName,
        question,
        optionA,
        optionB,

        votesA: editingPoll ? editingPoll.votesA : 0,

        votesB: editingPoll ? editingPoll.votesB : 0,

        totalVotes: editingPoll ? editingPoll.totalVotes : 0,

        hasVoted: false,

        isVisible: editingPoll ? editingPoll.isVisible : true,

        order: editingPoll ? editingPoll.order : Date.now()
    };

    if (editingPollId) {

    await updatePoll(editingPollId, poll);

    playSound("Success_Notification.wav");

    showToast("Poll updated successfully!", "success");

    }
    else {

        await createPoll(poll);

        playSound("Success_Notification.wav");

        showToast("Poll created successfully!", "success");

    }

    await new Promise(resolve => setTimeout(resolve, 1500));

    location.reload();

        }
        catch(error) {
            showToast("Unable to save poll. Please try again.", "danger");
        }
        finally {
             button.disabled = false;
        }

});

}