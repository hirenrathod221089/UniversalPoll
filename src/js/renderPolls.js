import { PollCard } from "../components/PollCard";

export function renderPolls(polls) {

    return polls
        .map(poll => PollCard(poll))
        .join("");

}