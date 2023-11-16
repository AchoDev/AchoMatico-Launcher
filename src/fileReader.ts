
const fs = require("fs")

function readMemory(): string {
    let data;
    
    try {
        data = fs.readFileSync('./src/memory/apps.json', 'utf-8', (err, data) => {
            if(err) {
                return null
            }
            return data
        })
    } catch {
        data = fs.readFileSync('./resources/app/src/memory/apps.json', 'utf-8', (err, data) => {
            if(err) return null
            return data
        })
    }
            

    console.log(__dirname)
    console.log(data)

    return data
}