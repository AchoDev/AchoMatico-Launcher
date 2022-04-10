var fs = require("fs");
var run = require("./run.js");
var exec = require('child_process').execFile;
var playbutton;
var spaceTaken = document.getElementById("space-taken-span");
var lastPlayed = document.getElementById("last-played-span");
var description = document.getElementById("desc-p");
var headimage = document.getElementById("head-image");
var iconimage = document.getElementById("icon-image");
var titleElement = document.getElementById("title");
var buttonTemplate = document.getElementById("selector-button-template");
var singleteonConfirm = false;
var currendID;
var path = 'src/memory/apps.json';
if (!fs.existsSync(path)) {
    path = "resources/app/".concat(path);
}
var rawData = function () {
    return fs.readFileSync(path, 'utf-8', function (err, data) {
        if (err) {
            alert("an error occured\n\n" + err);
            return null;
        }
        return data;
    });
};
module.exports = { rawData: rawData, currendID: currendID };
var appMemory = JSON.parse(rawData());
// @ts-ignore
var btn = buttonTemplate.content.querySelector(".app-selector-button");
function createDOMButtons() {
    if (!module.parent) {
        singleteonConfirm = true;
        for (var element in appMemory) {
            var copy = btn.cloneNode(true);
            // console.log(appMemory[element])
            // console.log(copy + " dsfsfsdfa")
            copy.querySelector("img").src = appMemory[element].headImage;
            // @ts-ignore
            copy.querySelector("span").textContent = appMemory[element].name;
            copy.id = element;
            console.log("HEEHH");
            buttonTemplate.parentNode.appendChild(copy);
        }
    }
}
createDOMButtons();
var buttons = Array.from(document.getElementsByClassName("app-selector-button"));
var i;
buttons.forEach(function (button) {
    var curr = button.id;
    button.querySelector("img").src = appMemory[curr].iconimage;
    console.log(":) " + appMemory[curr].path);
    button.addEventListener("click", function () {
        loadNewPage(appMemory[curr].path, appMemory[curr].spacetaken, appMemory[curr].lastplayed, appMemory[curr].description, appMemory[curr].headimage, appMemory[curr].iconimage, appMemory[curr].name);
        currendID = curr;
        console.log(curr);
    });
    i++;
});
function loadNewPage(url, space, date, desc, headimgurl, iconimgurl, title) {
    playbutton = document.getElementById("app-content-container").querySelector("button");
    spaceTaken.innerText = space;
    lastPlayed.innerText = date;
    description.innerText = desc;
    headimage.src = headimgurl;
    iconimage.src = iconimgurl;
    titleElement.innerText = title;
    playbutton.innerText = "Start";
    var plClone = playbutton.cloneNode(true);
    if (playbutton.parentNode != null) {
        playbutton.parentNode.replaceChild(plClone, playbutton);
    }
    var handleClick = function () {
        run.runExe(url);
    };
    plClone.addEventListener("click", handleClick);
}
