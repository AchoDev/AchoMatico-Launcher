const { app } = require("electron")


const getData = require("./page-loader.js").rawData

const editModeElements = document.getElementsByClassName("edit-mode")
const viewModeElements = document.getElementsByClassName("view-mode")

const descTextarea = document.getElementById("desc-edit")
const titleInput = document.getElementById("title-edit")

const titleDOM = document.getElementById("title")
const descDOM = document.getElementById("desc-p")

const getElementsProps = (list) => {
    let props = []
    for(let element of list) {
        // props.push(element.currentStyle["display"])
        console.log(element.currentStyle)
    }

    return props
}

const overwriteMemory = (json) => {
    const path = "./src/memory/apps.json"
    fs.writeFileSync(path, JSON.stringify(json, null, 4), (err) => {
        if(err) console.log(err)
    })
}

const toggleHiddenClass = (list) => {
    for(let element of list) {
        element.classList.toggle("hidden")
    }
}

const editModeElementsProps = getElementsProps(editModeElements)
const viewModeElementsProps = getElementsProps(viewModeElements)
const appData = JSON.parse(rawData())



const setElementList = (list, property) => {
    let i
    for(let element of list) {
        if(typeof property == "string") element.style.display = property
        else element.style.display = property[i]
        i++
    }
}


// setElementList(editModeElements, "none")
toggleHiddenClass(editModeElements)

function toggleEditMode() {
    toggleHiddenClass(viewModeElements)
    toggleHiddenClass(editModeElements)

    titleInput.value = titleDOM.textContent
    descTextarea.value = descDOM.textContent
}

function toggleViewMode() {
    toggleHiddenClass(viewModeElements)
    toggleHiddenClass(editModeElements)

    console.log(appData[currendID].name)

    appData[currendID].name = titleInput.value
    appData[currendID].description = descTextarea.value

    titleDOM.textContent = titleInput.value
    descDOM.textContent = descTextarea.value

    overwriteMemory(appData)

}