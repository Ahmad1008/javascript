const { Console } = require("console");
const { exit } = require("process");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
menu();
//Menu function is there tooo show users a menu of tasks that they can perform//
function menu() {
console.log("*//**Welcome To School Management System**//*")
console.log("//*We have three Operation for You that You Can Perform*//*")
console.log("\r\n1)**Enter Student Data**\r\n2)**To End Process**\r\n3)**Print Report**")
rl.question("     \r\n /*/*To Perform Any task type 1,2 or 3*/*/*\r\n", function(option){
if(option=="1"){
return data();
}
else if(option=="2"){
file();
}
else{
    process.exit();
}
});
}
//data function is there to add students data 
    function data() {
var fs = require('fs');
  rl.question("What is your name ? ", function(name) {
    rl.question("what is your age ? ", function(age) {
        rl.question("what is Your class ? ", function(classs) {
            rl.question("what is your section ? ", function(section) {
        
fs.appendFile('C:/Users/dell/firstprogram/report.txt',`\r\nName is: ${name}\r\n Age is: ${age}\r\n
Class is : ${classs}\r\n Section  is: ${section}\r\n`, (err) =>{
if (err) throw err;
console.log('Data Added Successfully');
rl.question("**//**To end task type (Yes) and To continue type (No)**//**\r\n", function(option1){
if (option1=="yes") {
    process.exit();

}
else{
    menu();
}
});
});
    
            });
    });
});
});
    }
    //file function is made to print student data file
 function file() {
       
        var fs = require('fs');
var sample = fs.readFileSync('C:/Users/dell/firstprogram/report.txt','utf8'); 
console.log(sample);
rl.question("**//**To end task type (Yes) and To continue type (No)**//**\r\n", function(option1){
if (option1=="yes") {
    process.exit();

}
else{
    menu();
}
});
 }
