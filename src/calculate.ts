function showResult() {
const username = $("#username").val();
const exp = $("input[name=exp]:checked").val() == "no"  ?  0 : $("input[name=exp]:checked").val() == "maybe" ? 5 : $("input[name=exp]:checked").val() == "yes" ? 10 : 0
const games = $("input[name=games]:checked").val() == "no"  ?  0 : $("input[name=games]:checked").val() == "maybe" ? 5 : $("input[name=games]:checked").val() == "yes" ? 10 : 0;
const web = $("input[name=web]:checked").val() == "no"  ?  0 : $("input[name=web]:checked").val() == "maybe" ? 5 : $("input[name=web]:checked").val() == "yes" ? 10 : 0;
const dataSci = $("input[name=dataSci]:checked").val() == "no"  ?  0 : $("input[name=dataSci]:checked").val() == "maybe" ? 5 : $("input[name=dataSci]:checked").val() == "yes" ? 10 : 0;
let android = 0;
let ios = 0;
let both = 0;

if ($("input[name=mobile]:checked").val() == "no") {
    android = 0
    ios = 0
    both = 0
} else if ($("input[name=mobile]:checked").val() == "maybe") {
    android = 3;
    ios = 3;
    both = 3;
} else if ($("input[name=mobile]:checked").val() == "android") {
    android = 10;
    ios = 0;
    both = 8;
} else if ($("input[name=mobile]:checked").val() == "ios") {
    android = 0;
    ios = 10;
    both = 8;
} else if ($("input[name=mobile]:checked").val() == "both") {
    android = 2;
    ios = 2;
    both = 10;
}  else {
    android = 0;
    ios = 0;
    both = 0;
}
const cyber = $("input[name=cyber]:checked").val() == "no"  ?  0 : $("input[name=cyber]:checked").val() == "maybe" ? 5 : $("input[name=cyber]:checked").val() == "yes" ? 10 : 0;

const desktop = $("input[name=desktop]:checked").val() == "no" ? 0 : $("input[name=desktop]:checked").val() == "maybe" ? 5 : $("input[name=desktop]:checked").val() == "yes" ? 10 : 0;
const ai = $("input[name=ai]:checked").val() == "no" ? 0 : $("input[name=ai]:checked").val() == "maybe" ? 5 : $("input[name=ai]:checked").val() == "yes" ? 10 : 0;


const content = {
    "android": android,
    "ios": ios,
    "both": both,
    "desktop": desktop,
    "web": web,
    "games": games,
    "dataSci": dataSci,
    "cyber": cyber,
    "ai": ai,
};
let user_content = {}
for (const x in content) {
    if (content[x] == 0) {
    } else {
        user_content[x] = content[x];
    }
}

console.log(user_content);

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
let bestLanguage: null | string = null;
let bestScore: number = 0;
for (const language in scores) {
    const score = scores[language];
    if (score > bestScore) {
        bestLanguage = language;
        bestScore = score;
    }
}

$("#result").html(` ${bestLanguage}`);
$("#trend").html(`this language is ${trend_data[data[bestLanguage].trend]}`);
$("#langImg").attr("src", `img/${bestLanguage}.png`);
console.log(`Best language for the user is ${bestLanguage} with a score of ${bestScore}.`);}