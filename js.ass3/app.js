//6.1
function addNumbers(para1, para2)
 { return para1 + para2}
let num1 = 5
let num2 = 3
let result = addNumbers(num1, num2)
console.log("Result:", result)
let anotherResult = addNumbers(10, 7)
console.log("Another Result:", anotherResult);






//6.2
var descriptiveWords = ["Dilignet", "", "Imaginative", "Quirk", "Ravishing"]
//----------------------------------------------------------------------------------------
function getRandomWord() {
    let userName = prompt("Please enter your name:");
    return userName}

function getRandomWord() {
    let userName = prompt("Please enter your name:")
    
    let randomIndex = Math.floor(Math.random() * descriptiveWords.length);
    return descriptiveWords[randomIndex]}

var userWord = getRandomWord()
console.log("Hello! You are " + userWord + ".")
alert ("Hello! You are " + userWord)





//6.3
var num3 = 10;
var num4 = 5;
//----------------------------------------------------------------
function performOperation(parameter1, parameter2, operator) {
    if (operator === '+') {
  return parameter1 + parameter2}
     else if (operator === '-') 
     {return parameter1 - parameter2}
    else {return parameter1 + parameter2 }
}

var operator = '+'
var result2 = performOperation(num3, num4, operator)
console.log("Result:", result);


operator = '-';
var newResult = performOperation(num1, num2, operator)
console.log("New Result:", newResult);