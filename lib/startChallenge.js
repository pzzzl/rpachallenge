// IMPORT & EXPORT
const {By} = require('selenium-webdriver');
module.exports = startChallenge;

// VARIABLES
const URL_RPA_CHALLENGE = 'http://rpachallenge.com/';

// This function is responsible for navigate to RPA Challenge website and start the challenge
async function startChallenge() {
    try {
        await driver.get(URL_RPA_CHALLENGE);
        await driver.findElement(By.xpath('/html/body/app-root/div[2]/app-rpa1/div/div[1]/div[6]/button')).click();
        return true;
    } catch {
        return false;
    };
};

