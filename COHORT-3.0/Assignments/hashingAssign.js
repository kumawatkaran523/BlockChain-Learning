import crypto from 'crypto'

const input ="Mymessage"
const hash= crypto.createHash('sha256').update(input).digest('hex')

console.log("Hash Value : ",hash);


// Assignment #1
// What if I ask you the following question — Give me an input string that outputs a SHA-256 hash that starts with 00000 . How will you do it?

console.log("-----------------------------------------------------")
var inp=0;
while (true){
  const hash = crypto.createHash('sha256').update(inp.toString()).digest('hex');
  if(hash.startsWith('00000')){
    console.log(hash);
    console.log(inp);
    break;
  }
  inp++;
}
console.log("-----------------------------------------------------")

// What if I ask you that the input string should start with 100xdevs ? How would the code change?

var inp1=0;
while (true){
  const hash = crypto.createHash('sha256').update("100xdevs"+inp1.toString()).digest('hex');
  if(hash.startsWith('00000')){
    console.log(hash);
    console.log(inp1);
    break;
  }
  inp1++;
}

var uint8Arr=new Uint8Array([2,0,234,390]);
console.log(uint8Arr)

