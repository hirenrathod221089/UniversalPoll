const STORAGE_KEY = "universal-poll-sound";

export function isSoundEnabled() {

    const value = localStorage.getItem(STORAGE_KEY);

    // Default = enabled
    return value !== "false";

}

export function setSoundEnabled(enabled) {

    localStorage.setItem(STORAGE_KEY, enabled);

}

export function toggleSound() {

    const enabled = !isSoundEnabled();

    setSoundEnabled(enabled);

    return enabled;

}

export function playSound(fileName) {

    if (!isSoundEnabled()) {
        return;
    }

    const audio = new Audio(`/sounds/${fileName}`);

    audio.volume = 0.4;

    audio.play().catch(() => {});

}