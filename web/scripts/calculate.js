function showResult() {
    var username = $("#username").val();
    var exp = $("input[name=exp]:checked").val() == "no" ? 0 : $("input[name=exp]:checked").val() == "maybe" ? 5 : $("input[name=exp]:checked").val() == "yes" ? 10 : 0;
    var games = $("input[name=games]:checked").val() == "no" ? 0 : $("input[name=games]:checked").val() == "maybe" ? 5 : $("input[name=games]:checked").val() == "yes" ? 10 : 0;
    var web = $("input[name=web]:checked").val() == "no" ? 0 : $("input[name=web]:checked").val() == "maybe" ? 5 : $("input[name=web]:checked").val() == "yes" ? 10 : 0;
    var dataSci = $("input[name=dataSci]:checked").val() == "no" ? 0 : $("input[name=dataSci]:checked").val() == "maybe" ? 5 : $("input[name=dataSci]:checked").val() == "yes" ? 10 : 0;
    var android = 0;
    var ios = 0;
    var both = 0;
    if ($("input[name=mobile]:checked").val() == "no") {
        android = 0;
        ios = 0;
        both = 0;
    }
    else if ($("input[name=mobile]:checked").val() == "maybe") {
        android = 3;
        ios = 3;
        both = 3;
    }
    else if ($("input[name=mobile]:checked").val() == "android") {
        android = 10;
        ios = 0;
        both = 8;
    }
    else if ($("input[name=mobile]:checked").val() == "ios") {
        android = 0;
        ios = 10;
        both = 8;
    }
    else if ($("input[name=mobile]:checked").val() == "both") {
        android = 2;
        ios = 2;
        both = 10;
    }
    else {
        android = 0;
        ios = 0;
        both = 0;
    }
    var cyber = $("input[name=cyber]:checked").val() == "no" ? 0 : $("input[name=cyber]:checked").val() == "maybe" ? 5 : $("input[name=cyber]:checked").val() == "yes" ? 10 : 0;
    var desktop = $("input[name=desktop]:checked").val() == "no" ? 0 : $("input[name=desktop]:checked").val() == "maybe" ? 5 : $("input[name=desktop]:checked").val() == "yes" ? 10 : 0;
    var ai = $("input[name=ai]:checked").val() == "no" ? 0 : $("input[name=ai]:checked").val() == "maybe" ? 5 : $("input[name=ai]:checked").val() == "yes" ? 10 : 0;
    var content = {
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
    var user_content = {};
    for (var x in content) {
        if (content[x] == 0) {
        }
        else {
            user_content[x] = content[x];
        }
    }
    console.log(user_content);
    var scores = {};
    for (var language in data) {
        var stats = data[language];
        var score = 0;
        for (var stat in user_content) {
            var weight = user_content[stat];
            var value = stats[stat];
            score += weight * value;
        }
        scores[language] = score;
    }
    // find the language with the highest score
    var bestLanguage = null;
    var bestScore = 0;
    for (var language in scores) {
        var score = scores[language];
        if (score > bestScore) {
            bestLanguage = language;
            bestScore = score;
        }
    }
    $("#result").html(" ".concat(bestLanguage));
    $("#trend").html("this language is ".concat(trend_data[data[bestLanguage].trend]));
    $("#langImg").attr("src", "img/".concat(bestLanguage, ".png"));
    console.log("Best language for the user is ".concat(bestLanguage, " with a score of ").concat(bestScore, "."));
}
