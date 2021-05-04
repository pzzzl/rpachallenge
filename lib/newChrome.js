// IMPORT & EXPORT
const {Builder} = require('selenium-webdriver');
module.exports = newChrome;

// This functions builds a new Chrome instance and resolve it's driver if succeed
function newChrome() {
    return new Promise((resolve, reject) => {
        try {
            driver = new Builder().forBrowser('chrome').build();
            resolve(driver);
        } catch {
            reject(false);
        }
    });
};

