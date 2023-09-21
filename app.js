let movie = "Chicken Run";
document.getElementById("string").innerHTML =
"My favorite movie is " + movie + "." // Concatenated String Variable

let voteage = 20;
if (voteage >= 18) { // If Statement
  voteage = "You are old enough to vote";
} else { // Else Statement
  voteage = "You are not old enough to vote";
}
document.getElementById("if").innerHTML = voteage;

let pet;
switch (pet) { // Switch Statement
  case "dog":
    pet = "I own a dog";
    break;
  case "cat":
    pet = "I own a cat";
    break;
  case "fish":
    pet = "I own a fish";
    break;
  case "bird":
    pet = "I own a bird";
    break;
  case "rabbit":
    pet = "I own a rabbit";
    break;
  case "hamster":
    pet = "I own a hamster";
    break;
  default:
    pet = "I do not own a pet";
    break;
}
document.getElementById("switch").innerHTML = pet;

function myFunction() {
    let text = document.getElementById("uppercase").innerHTML;
    document.getElementById("uppercase").innerHTML =
    text.toUpperCase(); // String Method: toUpperCase()
  }

let text1 = "Junior";
let text2 = "Mints";
let text3 = text1.concat(" ",text2); // String Method: concat()
document.getElementById("concat").innerHTML = text3;

let x = 3.141;
document.getElementById("tofixed").innerHTML =
  x.toFixed(0) + "<br>" + // Number Method: toFixed()
  x.toFixed(2) + "<br>" +
  x.toFixed(4) + "<br>" +
  x.toFixed(6);

let y = 3.141;
document.getElementById("toprecision").innerHTML = 
  x.toPrecision() + "<br>" + // Number Method: yoPrecision()
  x.toPrecision(2) + "<br>" +
  x.toPrecision(4) + "<br>" +
  x.toPrecision(6); 
 
// 4.1 Video Lesson: Conditional Statements
const age = 18;

if (age <= "18") {
  console.log("You are good to go!");
} else if (age < 15) {
  console.log("Wow you are really young...why are you even here");
}
else {
  console.log('You are not old enough');
}

const dice1 = 6;
const dice2 = 3;

if (dice1 === 6 || dice2 === 6) {
  console.log("You rolled a double");
}  else {
  console.log("You didn't");
}

//4.3 Video Lesson: String Concatenation
const myAge = 24;

const yourAge = 20;

console.log(myAge + yourAge);

console.log("Hello my name is" + "Jose");

console.log("Hello it's me Jose");

const name = "Jose";
const currentage = 20;

console.log(
  "Hello it's me " + name + " and my age is " + currentage + " and I am getting old"
);

console.log(`Hello it's me ${name} and my age is ${currentage}`);

const combined = name + currentage;

console.log(typeof currentage);
