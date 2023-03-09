const scores = {};
for (const language in data) {
    const stats = data[language];
    let score = 0;
    for (const stat in user_content) {
        const weight = user_content[stat];
        const value = stats[stat];
        score += weight * value;
    }
    scores[language] = score;
}

// find the language with the highest score
let bestLanguage = null;
let bestScore = 0;
for (const language in scores) {
    const score = scores[language];
    if (score > bestScore) {
        bestLanguage = language;
        bestScore = score;
    }
}
