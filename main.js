///////////////// *** JS Workshop - 1 *** ////////////////
////////////////////*** TO DO LIST ***////////////////////

/*
Hey I started to code in JS 😃

JS has 2 types of comments:
    1. Block
    2. Inline

Comments has 2 aims in JS:
    1. Giving information to the developer
    2. Disable some codes in JS

Even we can use Emojis with JS and comments
*/

//////////////////// ***  Data types  *** ////////////////////
/*
Number    /// 5
String    /// 'abc'
Boolean   /// true
Null      /// null
Undefined /// undefined
Object    /// {key: value}
Array     /// [item1, item2, ....]
*/

/*
console.log("I'm a developer!");

let userName = prompt("Hello, what's your name?");

let myLuckyNum = 7;

alert( "Hey " + userName);
*/

/* 
let toDoItem1 = prompt('Please type something to do!');
let toDoItem2 = prompt('Please type something to do!');
let toDoItem3 = prompt('Please type something to do!');

alert(
    '1: ' + toDoItem1 +
    '2: ' + toDoItem2 +
    '3: ' + toDoItem3
);

let toDoItem = [];

for (let counter = 1; counter <= 3; counter++) {
    toDoItem.push(prompt('Please type something to do!'));
}


alert(toDoItem); 
*/
///////////////// ***  Functions and Conditions *** /////////////////
/*
    Functions: reusable co-blocks. Could be built-in like alert, prompt
    or we can create our own function like below.

    Conditions: built-in function which compares conditions
    and does something or anything or something else.
*/

/* 
function salute() {
    let userName = prompt('Hello, What is your name?');
    alert(userName);
}

let isStop = prompt('Would you like to continue? (y/n)');

if (isStop == "y") {
    alert("Nice to hear! Let's play game :)");
    salute();
} else {
    alert('Noooo!, god bye then...');
}
 */


///////////////// ***  DOM Manipulation *** /////////////////


document.getElementById('hi').innerHTML = "Welcome on my to-do app!";

document.getElementById('list').innerHTML = localStorage.getItem('items');

function clickHandler() {
    let item = document.getElementById("item").value;
    document.getElementById('list').innerHTML += "<li onclick='deleteHandler(this)'>" + item + "</li>";
    localStorage.setItem('items', document.getElementById('list').innerHTML);
}

function deleteHandler(element) {
    //alert(element.innerHTML);
    element.remove();
}