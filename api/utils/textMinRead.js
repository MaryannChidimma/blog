
function readingTime(article) {
    const text = article
    const wpm = 225;
    const words = text.trim().split(/\s+/).length;
    const time = Math.ceil(words / wpm);

    return time
}

module.exports = readingTime;