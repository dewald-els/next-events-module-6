export function humanReadableDate({year, month, day}, options) {
    return new Date(year, month - 1, day).toLocaleDateString("en-GB", options);
}