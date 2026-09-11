let currentPolls = [];

export function setPolls(polls) {

    currentPolls = [...polls];

}

export function getPolls() {

    return [...currentPolls];

}