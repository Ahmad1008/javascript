const { exit } = require("process");


const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
    
rl.question("*******Hi there, want to enter Student's Data?****** \r\n ******Yes Or No******\r\n", function(option){
if(option=="yes"){
var fs = require('fs');
  rl.question("What is your name ? ", function(name) {
    rl.question("what is your age ? ", function(age) {
        rl.question("what is Your class ? ", function(classs) {
            rl.question("what is your section ? ", function(section) {
        rl.close();
        
fs.appendFile('C:/Users/dell/firstprogram/report.txt',`\r\nName is: ${name}\r\n Age is: ${age}\r\n
Class is : ${classs}\r\n Section  is: ${section}\r\n`, (err) =>{
if (err) throw err;
console.log('Data Added Successfully');
});
    
            });
    });
});
});

}
 else if (option=="no") {
    rl.question("****So,want to print file on console to view previous records*****? \r\n ***Yes Or No***\r\n", function(option1){
    if (option1=="yes") {
        var fs = require('fs');
var sample = fs.readFileSync('C:/Users/dell/firstprogram/report.txt'); 
console.log(sample);
process.exit();
    }
    else{
        exit;
    }
});
exit;
 }

});