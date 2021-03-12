export default function generateUniqueId() {
    if (window.crypto && window.crypto.getRandomValues) {
        return window.crypto.getRandomValues(new Uint32Array(1))[0];
    } else {
        return Math.random()
    }
}