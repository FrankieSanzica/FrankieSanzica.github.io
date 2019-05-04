//Browser 
document.getElementById("screen").innerHTML = "Screen Resolution: " + screen.width + " x " + screen.height;
document.getElementById("color").innerHTML = "Color Depth: " + screen.colorDepth;
document.getElementById("browser").innerHTML = "Browser Name: " + navigator.appName + ". Code name: " + navigator.appCodeName;
document.getElementById("product").innerHTML = "Browser Engine: " + navigator.product;
document.getElementById("useragent").innerHTML = "Browser Version: " + navigator.userAgent;
document.getElementById("platform").innerHTML = "Browser Platform: " + navigator.platform;
document.getElementById("language").innerHTML = "Browser Language: " + navigator.language;
document.getElementById("java").innerHTML = "Java Enabled?: " + navigator.javaEnabled();

//Cookies
document.getElementById("cookies").innerHTML = "Cookies Enabled?: " + navigator.cookieEnabled;

//Date
document.getElementById("date").innerHTML = "Date: " + Date();

//Back
function goBack() {
    window.history.back()
}

//Forward
function goForward() {
    window.history.forward()
}

//Alert
function grave() {
    alert("Rangers, you must act swiftly, the planet is in grave danger!");
}

//jQuery

//Zordon
/* 
    $(document).ready(function(){
     $("#zordon").click(function(){
        $("#zordon").animate({height: '+=150px'});
    }); 
});
*/

//Errors
/*
try {
    document.getElementById("TEST").innerHTML = raritty.length;
}
catch(err) {
    document.getElementById("TEST").innerHTML = "ERROR!: " + err.message;
}
*/
