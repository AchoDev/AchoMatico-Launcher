var execFile = require('child_process').exec;
function runExe(path) {
    var child = execFile(`start ${path}`, function (error, stdout, stderr) {
        if (error) {
            throw error;
            console.log("hehehehehaw");
        }
        console.log(stdout);
    });
}
module.exports = { runExe };
//# sourceMappingURL=run.js.map