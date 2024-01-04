const downloadSheet = require('./lib/downloadSheet');
const readExcel = require('./lib/readExcel');
const newChrome = require('./lib/newChrome');
const startChallenge = require('./lib/startChallenge');
const executeChallenge = require('./lib/executeChallenge');

(async function main() {
    isDownloaded = await downloadSheet();
    if(!isDownloaded) return console.log("Couldn't download sheet");

    tasks = await readExcel();
    if(!tasks) return console.log("Couldn't read Excel");

    driver = await newChrome();
    if(!driver) return console.log("Couldn't open Chrome");

    challengeStarted = await startChallenge();
    if(!challengeStarted) return console.log("Couldn't start challenge");
    
    result = await executeChallenge(tasks);
    if(!result) return console.log("Couldn't finish challenge");

    return console.log('Process finished succesfully!');
})();
