const readLine = require("readline");
 
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
});
 
let input = []
 
rl.on("line", (line) => {
    input = line.split(' ').map(el => parseInt(el)); // 1 2 3 4
    rl.close();
});
 
rl.on('close', () => {
    input.forEach(el => {
        console.log(el);
    })
    process.exit();
})