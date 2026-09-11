import app from "./firebase";

import {
    getFirestore,
    collection,
    getDocs,
    addDoc,
    deleteDoc,
    doc,
    updateDoc,
    increment,
    getDoc,
    setDoc,
    serverTimestamp
} from "firebase/firestore";

const db = getFirestore(app);

export async function getPolls() {

    const snapshot = await getDocs(collection(db, "polls"));

    const polls = [];

    snapshot.forEach(doc => {

        polls.push({

            id: doc.id,
            ...doc.data()

        });

    });

    return polls.sort((a, b) => a.order - b.order);
}

export async function createPoll(poll) {

    await addDoc(collection(db, "polls"), poll);

}

export async function updatePoll(id, poll) {

    const pollRef = doc(db, "polls", id);

    await updateDoc(pollRef, poll);

}

export async function deletePoll(id) {

    await deleteDoc(doc(db, "polls", id));

}

export async function votePoll(id, option) {

    if (option !== "A" && option !== "B") {

        throw new Error("Invalid vote option.");

    }

    const pollRef = doc(db, "polls", id);

    if (option === "A") {

        await updateDoc(pollRef, {

            votesA: increment(1),
            totalVotes: increment(1)

        });

    }
    else {

        await updateDoc(pollRef, {

            votesB: increment(1),
            totalVotes: increment(1)

        });

    }

}

export async function hasUserVoted(pollId, userId) {

    const voteRef = doc(db, "votes", `${pollId}_${userId}`);

    const vote = await getDoc(voteRef);

    return vote.exists();

}

export async function saveUserVote(pollId, userId, option) {

    const voteId = `${pollId}_${userId}`;

    await setDoc(doc(db, "votes", voteId), {

        pollId,

        userId,

        option,

        createdAt: serverTimestamp()

    });

}

export async function toggleVisibility(id, isVisible) {

    const pollRef = doc(db, "polls", id);

    await updateDoc(pollRef, {
        isVisible: !isVisible
    });

}

export async function swapPollOrder(
    firstPollId,
    firstOrder,
    secondPollId,
    secondOrder
) {

    await updateDoc(doc(db, "polls", firstPollId), {
        order: secondOrder
    });

    await updateDoc(doc(db, "polls", secondPollId), {
        order: firstOrder
    });

}