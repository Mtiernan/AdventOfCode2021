const fs = require('fs');


const data = fs.readFileSync('day3.txt','utf-8');
const lines = data.split(/\r?\n/);
//The whiskey wrote more of htis then i did
let bits = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]];
for(let x = 0; x < 12; x++ ){
    for(let y =0; y < lines.length;y++ ){
        if(lines[y][x] == "1"){
            bits[x][1]++;
        }
        else{
            bits[x][0]++;
        }
    }
}
let min = "";
let max = "";
for(let x =0; x < bits.length; x++){
    if(bits[x][0] > bits[x][1] ){
        max += "0";
        min += "1";
    }
    else
    {
        max += "1";
        min += "0";
    }
}
console.log(bits);
console.log(min);
console.log(max);

function getbits(position, list){
    let bits = [0,0];
    for(let x =0; x < list.length; x++){
        if(list[x][position] == '0'){
             bits[0]++;
        }
        else {
            bits[1]++}
    }
    return bits;

}
function searchfor(bits,position,list,low){
    let newlist = [];
   
    for(let x =0; x < list.length; x++){
        if(low == true){
            let bit = "0";
            if(bits[0] > bits[1] ){
             bit ="1";   
            }
            if(list[x][position] == bit){
                newlist.push(list[x]);
            }
        }
        else{
            let bit = '0';
            if(bits[0] <= bits[1]){
            bit = '1'
            }
            if(list[x][position] == bit){
                newlist.push(list[x]);
            }
        }   
    }

    if(newlist.length == 1){
        console.log(newlist);
        return newlist;
    }
    else if(newlist.lenght==0){
        console.log("You done fucked it");
    }
    else{
       
        searchfor(getbits(position+1,newlist),position+1,newlist,low);
    }
}
searchfor(bits[0],0,lines,true);
searchfor(bits[0],0,lines,false);