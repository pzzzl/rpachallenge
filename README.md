# RPA Challenge - Input Forms solution

## About

An optimized & easy-through project about the workflow suggested by <a href="http://rpachallenge.com/">RPA Challenge</a> in it's "Input Forms" challenge - using clean code principles.

> 1. The goal of this challenge is to create a workflow that will input data from a spreadsheet into the form fields on the screen.
> 2. Beware! The fields will change position on the screen after every submission throughout 10 rounds thus the workflow must correctly identify where each spreadsheet record must be typed every time.
> 3. The actual countdown of the challenge will begin once you click the Start button until then you may submit the form as many times as you wish without receiving penalties.
Good luck!

It follows with some pretty intuitive steps:

1. Download the sheet from the official website via HTTP request
2. Read the Excel file maping the values from each row
3. Open a new Google Chrome
4. Start the challenge
5. Execute the challenge

### Installation

This project requires Node installed to work, as so as Google Chrome.

1. Clone the repository to a local folder
2. Open your terminal
3. Navigate to the repo path
4. `npm install`
5. `npm start`

WARNING: This version comes with chromedriver for Chrome 90.0 (see `chrome://version` to see yours). For more information about download, go to the <a href="https://chromedriver.chromium.org/downloads">official ChromeDriver website</a>.
