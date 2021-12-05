'use strict';
// Reading the existing input logic
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}


// Your logic for the Exercise
function main() {
    const strInput = readLine();
    var strOuput = "";
    strInput.split("").map((ch, i) => {
        
        if(i < strInput.length - 1 )
            strOuput += ch + " ";
        else
            strOuput += ch;
    });
    console.log(strOuput);
}