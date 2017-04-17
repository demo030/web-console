

try {
    var reporter = require("nodeunit").reporters.default;
} catch (e) {
    console.log("Cannot find nodeunit module.");
    console.log("Please install dependant modules for this project by doing:");
    console.log("");
    console.log("    $ npm install");
    console.log("");
    process.exit();
}

process.chdir(__dirname);
reporter.run(["./command.js"]);
