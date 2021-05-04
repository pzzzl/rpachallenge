// IMPORT & EXPORT
const {By, until} = require('selenium-webdriver');
module.exports = executeChallenge;

// This function executes the challenge's routine
async function executeChallenge(tasks) {
    try {
        for(let task in tasks) {
            t = tasks[task]
    
            firstName   = t[1]
            lastName    = t[2]
            company     = t[3]
            role        = t[4]
            address     = t[5]
            email       = t[6]
            phone       = t[7]
    
            await fillInput('labelFirstName', firstName)
            await fillInput('labelLastName', lastName)
            await fillInput('labelCompanyName', company)
            await fillInput('labelRole', role)
            await fillInput('labelAddress', address)
            await fillInput('labelEmail', email)
            await fillInput('labelPhone', phone)
            await submit()
        }
        return true
    } catch {
        return false
    }
}

// This is a shortcut function to find the correct input via CSS selector and change it's value
async function fillInput(prop, val) {
    await driver.wait(until.elementLocated(By.css(`input[ng-reflect-name=${prop}]`)), 10000).sendKeys(val)
}

// This is a shortcut function to find the submit button and click it
async function submit() {
    await driver.executeScript("document.querySelector('input[value=Submit]').click()")
}