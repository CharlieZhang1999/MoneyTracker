export function getCurrentTime() {
    return Date.now();
}

// Adds a leading 0 to numbers from 1 through 9
// Returns as a string
export function prependdedNumber(n: number) {
    return n < 10 ? `0${n}` : `${n}`;
}

// Formats a unixTime number to a string "MM.DD.YYYY HH:MM AM/PM"
// Returns a string
export function formatTime(unixTime: number) {
    const date = new Date(unixTime);
    const yearString = `${date.getFullYear()}`;
    const monthString = prependdedNumber(date.getMonth() + 1); // prepend 0 to months 1 through 9
    const dayString = prependdedNumber(date.getDate()); // prepend 0 to days 1 through 9

    return `${monthString}/${dayString}/${yearString}`;
}