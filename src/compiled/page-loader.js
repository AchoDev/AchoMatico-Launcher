var playbutton = document.getElementById("app-content-container").querySelector("button");
var spaceTaken = document.getElementById("space-taken-container");
var lastPlayed = document.getElementById("last-played-span");
var buttons = Array.of(document.getElementsByClassName("app-selector-button"));
console.log(buttons);
buttons.forEach(function (button) {
    console.log("test");
    button.addEventListener("click", function () {
        console.log("test");
    });
});
