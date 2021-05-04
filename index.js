const fs = require('fs')
const http = require('http')
const ExcelJS = require('exceljs')
const {Builder, By, Key, until} = require('selenium-webdriver')

var tasks = []
driver = undefined

main()

async function main() {
    result = await downloadSheet()
    console.log(result)

    result = await readExcel()
    console.log(result)

    driver = await new Builder().forBrowser('chrome').build()
    await driver.get('http://rpachallenge.com/')
    await driver.findElement(By.xpath('/html/body/app-root/div[2]/app-rpa1/div/div[1]/div[6]/button')).click()

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
}

function downloadSheet() {

    return new Promise((resolve, reject) => {

        const file = fs.createWriteStream("challenge.xlsx")

        http.get("http://rpachallenge.com/assets/downloadFiles/challenge.xlsx", function(response) {

            if(response) {
                response.pipe(file)
                resolve('Sheet downloaded succesfully')
            } else {
                reject("Couldn't download sheet")
            }

        })
    })

}

function readExcel() {
    return new Promise((resolve, reject) => {

        var workbook = new ExcelJS.Workbook()
        
        workbook.xlsx.readFile('challenge.xlsx').then(function() {

            var worksheet = workbook.getWorksheet('Sheet1')

            worksheet.eachRow({ includeEmpty: false }, function(row, rowNumber) {

                if(rowNumber != 1) {
                    tasks.push(row.values)
                }

                resolve('Excel values loaded succesfully')
            })
        })
        .catch(err => {
            console.error(err)
            reject("Couldn't read Excel properly")
        })
    })
}

async function fillInput(prop, val) {
    await driver.wait(until.elementLocated(By.css(`input[ng-reflect-name=${prop}]`)), 10000).sendKeys(val)
}

async function submit() {
    await driver.executeScript("document.querySelector('input[value=Submit]').click()")
}