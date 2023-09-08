# Symbols Coding Test 

## Write a Javascript node program that takes an HTML that looks like this: 

### Requirements: 
- The program must run from the CLI by reading a file and the browser by textarea input. For example, running node server.js markup.html should print out the Object specified above. The input format is an HTML string, and browser API should not be used. The solution should be designed as a library that can be used/run from the browser or nodejs. 
- You can use any Javascript library alongside your code except those that do the HTML-to-object parsing and conversion themselves. The main parsing and conversion loop must still be written by you. You can also write everything from scratch - there is no preference, and you will not be graded less/more if you choose not to use libraries. As long as the code runs, it doesn't matter. 
- You have 48 hours to write the code, including tests, create a public repository, upload the code there, and write instructions on installing and running the code in the README file. Ideally, the instructions should be a simple yarn or npm install command and published to the npm registry. 
- Send the links to your GitHub repository and NPM package by the end of the 48 hours to josh@symbols.app. We will clone, review, and contact you as soon as possible.

## Solution


This Node.js application serves as a demonstration of a custom library for converting HTML to JSON. It consists of two main parts:

1. **`custom_package`**: A custom library that provides the core logic for converting HTML to JSON.
2. **`demo`**: An application that utilizes the `custom_package` library to perform HTML to JSON conversions.

## `html-to-json-converter-raw`

`html-to-json-converter-raw` is a custom JavaScript library that offers HTML to JSON conversion functionality. It provides a reusable and extensible solution for parsing and structuring HTML content into JSON format.

### Installation

To install the `html-to-json-converter-raw` library, follow these steps:

```bash
npm install html-to-json-converter-raw
