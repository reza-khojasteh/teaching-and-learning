import { promises as fs } from 'fs';
import { promisify } from 'util';

// Nested Promises
fs.readFile('file.txt')
    .then(text1 => fs.readFile(text1)
        .then(text2 => fs.readFile(text2)
            .then(console.log)));

// OR: Linear Chain of Promises
const readOptions = { encoding: 'utf8' };
const readNextFile = fname => fs.readFile(fname, readOptions);
fs.readFile('file.txt', readOptions)
    .then(readNextFile)
    .then(readNextFile)
    .then(console.log);

// OR: Asynchronous Functions
async function readChainOfFiles() {
    const file1 = await readNextFile('file.txt');
    const file2 = await readNextFile(file1);
    console.log(file2);
}
readChainOfFiles();

// const sleep = ms => new Promise(
//     resolve => setTimeout(resolve, ms)
// );
//OR
const sleep = promisify(setTimeout);

// /*await */sleep(1000);

// // Sequential Code (~3.0s)
// sleep(1000)
//   .then(() => sleep(1000))
//   .then(() => sleep(1000));

// Even better: Concurrent Code (~1.0s)
Promise.all([ sleep(1000), sleep(1000), sleep(1000) ]);