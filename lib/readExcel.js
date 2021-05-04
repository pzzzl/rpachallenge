// IMPORT & EXPORT
const Excel = require('exceljs');
module.exports = readExcel;

// VARIABLES
const EXCEL_FILE = 'challenge.xlsx';
const EXCEL_TAB = 'Sheet1';

// This function is responsible for read the Excel file downloaded in 'downloadSheet' and resolve
// it's tasks if succeed
function readExcel() {
    return new Promise((resolve, reject) => {
        var workbook = new Excel.Workbook();
        workbook.xlsx.readFile(EXCEL_FILE).then(function() {
            var worksheet = workbook.getWorksheet(EXCEL_TAB);
            let tasks = [];
            worksheet.eachRow({ includeEmpty: false }, function(row, rowNumber) {
                if(rowNumber != 1) {
                    tasks.push(row.values);
                }
                resolve(tasks);
            })
        })
        .catch(err => {
            console.error(err);
            reject(false);
        });
    })
};

