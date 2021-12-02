const fs = require('fs');


const data = fs.readFileSync('day1.txt','utf-8');
const lines = data.split(/\r?\n/);


let prev = null;
let increased = 0;

for(let x = 0; x < lines.length; x++){
    if(x>0){
        if(parseInt(lines[x]) > prev){
            increased++;
        }        
    }
    prev = lines[x];
}
console.log(increased);
3
//part2
let arr =[];
for(let x = 0; x < lines.length-2; x++){
   let y = parseInt(lines[x]) + parseInt(lines[x+1]) + parseInt(lines[x+2]);
   arr.push(y);
}
increased =0;

for(let x=0; x < arr.length; x++){
    if(x>0){
        if(parseInt(arr[x]) > prev){
            increased++;
        }        
    }
    prev = arr[x];
}
console.log(increased);