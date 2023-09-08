const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const htmlToJson = require('html-to-json-converter-raw');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Handle form submission
app.post('/process', (req, res) => {
    const inputData = req.body.data;

    // Process the data (example: convert to uppercase)
    const processedData = htmlToJson(inputData);

    res.send(`Processed Data: ${processedData}`);
});

// Process the file when the server starts
if (process.argv.length >= 3) {
    const fileName = process.argv[2];
    const fileContent = fs.readFileSync(fileName, 'utf-8');
    // Process the file content (example: convert to uppercase)
    const processedFileContent = JSON.stringify(htmlToJson(fileContent));
    console.log(`Processed File Content: \n ${processedFileContent}`);
}

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
