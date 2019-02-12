const fs = require('fs');
const axios = require('axios');
const fetch = require('node-fetch')
const {
    exec,
    spawn
} = require('child_process');
const {
    argv
} = require('yargs');

const tempFile = "test/coinObject.js";
const tempFileStream = fs.createWriteStream(tempFile);
const arg = argv._

console.log('run.js is running')

if (argv._.length === 0) {
    defaultTest();
} else if (String(arg[0]).includes("github")) {
    const answer = /.*github.com\/([^/.]*)\/([^/.]*)[.git]?$/.exec(argv._[0]);
    const url = `https://raw.githubusercontent.com/${answer[1]}/${
    answer[2]
  }/master/coinObject.js`;
    gitTest(url);
} else {
    const url = "https://gitlab.com/api/v4/projects/" + arg[0] + "/repository/files/coinObject%2Ejs?ref=master";
    gitTest(url);
}

function defaultTest() {
    let studentCode = fs.readFileSync("./test/temp.js", {
        encoding: "utf8"
    });
    runTests(studentCode);
}

function gitTest(url) {
    // console.log('gitTest running')
    if (url.includes("github")) {
        axios.get(url).then(response => {
            runTests(response.data);
        });
    } else {
        fetch(url, {
                method: 'GET',
                headers: {
                    'PRIVATE-TOKEN': '5ZHEYQdoa5Tgx3yjpdP3'
                }
            })
            .then(function (response) {
                let res = response.body._readableState.buffer.head.data
                let regex = /"content"/
                let index = res.toString().search(regex)
                let content = res.toString().slice(index + 11)
                let decodedContent = Buffer.from(content, 'base64').toString();
                runTests(decodedContent)
            })
    }
}

function runTests(studentCode) {

    const htmlPromise = new Promise((resolve, reject) => {
        if (reject) {
            console.log(reject)
        }
        resolve(fs.readFileSync('./test/temp.txt', {
            encoding: "utf8"
        }));
    });

    htmlPromise.then((value) => {


        value = value.substring(1, value.length - 1);
        let html = "<!DOCTYPE html><html lang='en'><body></body></html>"
        tempFileStream.write('const jsdom = require("jsdom");\n');
        tempFileStream.write('const { JSDOM } = jsdom;\n');
        tempFileStream.write("const dom = new JSDOM(\"" + html + "\")\n");
        tempFileStream.write('global.document = dom.window.document;\n');
        tempFileStream.write(studentCode.replace(/['"]?use strict['"]?/, ""));
        tempFileStream.write(
            "\nmodule.exports = { coin: coin, display20Flips: (typeof display20Flips) === 'function' && display20Flips, display20Images: (typeof display20Images) === 'function' && display20Images }"
        );
        spawn("./node_modules/.bin/mocha", ['--colors'], {
            stdio: "inherit"
        }).on("exit", function (error) {
            if (error) {
                console.log(error);
            }
            exec(`rm ${tempFile}`);
            exec(`rm ./test/temp.js`);
            exec(`rm ./test/temp.txt`);
        });

    });
}