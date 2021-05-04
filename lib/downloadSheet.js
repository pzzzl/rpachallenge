// IMPORT & EXPORT
const fs = require('fs');
const http = require('http');
module.exports = downloadSheet;

// VARIABLES
const EXCEL_FILE = 'challenge.xlsx';
const URL_DOWNLOAD_EXCEL = 'http://rpachallenge.com/assets/downloadFiles/challenge.xlsx';

// This function is responsible for download the Excel file in the RPA Challenge website via HTTP GET
function downloadSheet() {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(EXCEL_FILE);
        http.get(URL_DOWNLOAD_EXCEL, function(response) {
            if(response) {
                response.pipe(file);
                resolve(true);
            } else {
                reject(false);
            }
        })
    })
};