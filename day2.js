const fs = require('fs');


const data = fs.readFileSync('day2.txt','utf-8');
const lines = data.split(/\r?\n/);

let depth = 0;
let horz = 0;

for(let x = 0; x < lines.length; x++){
    let line = lines[x].split(" ");
    if(line[0] == "forward"){
        horz += parseInt(line[1]);
    }
    else if(line[0]=="down"){
        depth += parseInt(line[1]);
    }
    else if(line[0]=="up"){
        depth -= parseInt(line[1]);
    }
}
console.log(horz);
console.log(depth);

depth = 0;
horz = 0;
aim = 0;

for(let x = 0; x < lines.length; x++){
    let line = lines[x].split(" ");
    if(line[0] == "forward"){
        horz += parseInt(line[1]);
        depth += (aim * line[1]);
    }
    else if(line[0]=="down"){
        aim += parseInt(line[1]);
    }
    else if(line[0]=="up"){
        aim -= parseInt(line[1]);
    }
}
console.log(horz);
console.log(depth);