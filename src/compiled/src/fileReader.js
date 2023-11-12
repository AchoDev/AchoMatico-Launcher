const fs = require("fs");
function readMemory() {
    return fs.readFileSync('./src/memory/apps.json', 'utf-8', (err, data) => {
        if (err) {
            alert("an error occured\n\n" + err);
            return null;
        }
        return data;
    });
}
//# sourceMappingURL=fileReader.js.map