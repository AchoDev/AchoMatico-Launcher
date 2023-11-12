const fs = require("fs");
const run = require("./run.js");
const exec = require('child_process').execFile;
let playbutton;
const spaceTaken = document.getElementById("space-taken-span");
const lastPlayed = document.getElementById("last-played-span");
const description = document.getElementById("desc-p");
const headimage = document.getElementById("head-image");
const iconimage = document.getElementById("icon-image");
const titleElement = document.getElementById("title");
const buttonTemplate = document.getElementById("selector-button-template");
let singleteonConfirm = false;
let currendID;
let path = 'src/memory/apps.json';
if (!fs.existsSync(path)) {
    path = `resources/app/${path}`;
}
const rawData = () => {
    return fs.readFileSync(path, 'utf-8', (err, data) => {
        if (err) {
            alert("an error occured\n\n" + err);
            return null;
        }
        return data;
    });
};
module.exports = { rawData, currendID };
const appMemory = JSON.parse(rawData());
// @ts-ignore
const btn = buttonTemplate.content.querySelector(".app-selector-button");
function createDOMButtons() {
    if (!module.parent) {
        singleteonConfirm = true;
        for (const element in appMemory) {
            const copy = btn.cloneNode(true);
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
const buttons = Array.from(document.getElementsByClassName("app-selector-button"));
let i;
buttons.forEach((button) => {
    const curr = button.id;
    button.querySelector("img").src = appMemory[curr].iconimage;
    console.log(":) " + appMemory[curr].path);
    button.addEventListener("click", () => {
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
    const plClone = playbutton.cloneNode(true);
    if (playbutton.parentNode != null) {
        playbutton.parentNode.replaceChild(plClone, playbutton);
    }
    const handleClick = () => {
        run.runExe(url);
    };
    plClone.addEventListener("click", handleClick);
}
//# sourceMappingURL=page-loader.js.map