var currentTab = 0;
showTab(currentTab);
function showTab(n) {
    var x = $(".tab");
    x.hide();
    x.eq(n).show();
    if (n == 0) {
        $("#prevBtn").hide();
    }
    else {
        $("#prevBtn").show();
    }
    if (n == x.length - 1) {
        //HIDE EVERY BUTTON
        $("#nextBtn").hide();
        $("#prevBtn").hide();
        showResult();
    }
    else {
        $("#nextBtn").html("Next").prop("disabled", false);
    }
    fixStepIndicator(n);
}
$(document).ready(function () {
    showTab(0); // show the first tab when the page loads
});
function nextPrev(n) {
    var x = $(".tab");
    if (n == -1 && currentTab == 0) {
        // If on the first tab, do nothing
        return false;
    }
    if (n == 1 && !validateForm()) {
        // If going forward and form is invalid, do nothing
        return false;
    }
    x.eq(currentTab).hide();
    currentTab += n;
    if (currentTab >= x.length) {
        $("#regForm").submit();
        return false;
    }
    showTab(currentTab);
}
function validateForm() {
    var x, y, i, valid = true;
    x = $(".tab");
    y = x.eq(currentTab).find("input");
    for (i = 0; i < y.length; i++) {
        if (y[i].value == "") {
            y[i].className += " invalid";
            valid = false;
        }
    }
    if (valid) {
        $(".step").eq(currentTab).addClass("finish");
    }
    return valid;
}
function fixStepIndicator(n) {
    $(".step").removeClass("active");
    $(".step").eq(n).addClass("active");
}
