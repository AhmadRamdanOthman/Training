// let ali = "Elzero Web School";
// // W Position May Change
// if (ali.charAt(ali.indexOf("W")).toLowerCase() === "w") {
//   console.log("Good");
// }

//  if (typeof ali.length !== "string") {
//   console.log("Good");
// }

// if (typeof ali.length === "number") {
//   console.log("Good");
// }

// if (ali.slice(0,6).repeat(2) === "ElzeroElzero") {
//   console.log("Good");
// } 


/* let num = 9; // "009"
if(num < 10){
    console.log(`0${num}0`)
}
// Test Case 2 */
/* let num = 20; // "020"

// Test Case 3
let num = 110; // "110" */
/* let num1 = 10;
let num2 = 30;
let num3 = "30";
if(num3 > num1 && typeof num3 !== typeof num1){
    console.log("30 Is Larger Than 10 And Type string Not The Same Type As number")
}
// Needed Output
/* "30 Is Larger Than 10 And Type string Not The Same Type As number"
"30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
"{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}" */
// Edit What You Want Here */

// let num1 = 11;
// let num2 = 9;
// let num3 = 11;
// let num4 = 20;

// /*
//   Do Not Edit Below This Line
//   Needed Output
//   True 7 Times
// */

// // Condition 1

// if (num1 > num2) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 2

// if (num1 > num2 && num1 < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 3

// if (num1 > num2 && num1 === num3) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 4

// if ((num1 + num2) < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 5

// if ((num1 + num3) < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 6

// if ((num1 + num2 + num3) < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 7

// if (num4 - (num1 + num3) + num2 === 21) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// /*
//   Switch Challenge
// */

// let job = "Manager";
// let salary = 0;

// if (job === "Manager") {
//   salary = 8000;
// } else if (job === "IT" || job === "Support") {
//   salary = 6000;
// } else if (job === "Developer" || job === "Designer") {
//   salary = 7000;
// } else {
//   salary = 4000;
// }

/*
  If Challenge
*/

/* let holidays = 0;
let money = 0;

switch (holidays) {
  case 0:
    money = 5000;
    console.log(`My Money is ${money}`);
    break;
  case 1:
  case 2:
    money = 3000;
    console.log(`My Money is ${money}`);
    break;
  case 3:
    money = 2000;
    console.log(`My Money is ${money}`);
    break;
  case 4:
    money = 1000;
    console.log(`My Money is ${money}`);
    break;
  case 5:
    money = 0;
    console.log(`My Money is ${money}`);
    break;
  default:
    money = 0;
    console.log(`My Money is ${money}`);
}
let job = "Manager";
let salary = 0;

if (job === "Manager") {
  salary = 8000;
} else if (job === "IT" || job === "Support") {
  salary = 6000;
} else if (job === "Developer" || job === "Designer") {
  salary = 7000;
} else {
  salary = 4000;
} */

// let job = "Manager";
// let salary = 0;
// switch(job){
//     case "Manager" :
//         salary = 8000;
//         console.log(`${salary}`);
//         break;
//     case "IT" :
//     case "Support" :
//         salary = 6000;
//         console.log(`${salary}`);
//         break;
//     case "Developer" :
//     case "Designer" :
//         salary = 7000;
//         console.log(`${salary}`);
//         break;
//     default:
//         salary = 4000;
//         console.log(`${salary}`)
// }
/*
  Array Challenge
*/

// let zero = 0;

// let counter = 3;

// let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];



// console.log(my.slice(zero,++counter).reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"];

//  console.log(my.slice(++zero,--counter).reverse()); // ["Elham", "Mazero"]

//  console.log(`${my[--counter].slice(--zero,counter)}${my[++zero].slice(counter)}`); // "Elzero"

//  console.log(`${my[zero][++counter + zero]}${my[zero][++counter + zero].toUpperCase()}`); // "rO"
//   let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// friends.shift();
// friends.pop()


// console.log(friends); // ["Eman", "Osama"]
// let arrOne = ["C", "D", "X"];
// let arrTwo = ["A", "B", "Z"];
// let finalArr = [];

// finalArr = arrOne.concat(arrTwo).sort().reverse()

// console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

// let website = "Go";
// let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

// console.log(words[2][0].slice(2).toUpperCase()); // ZERO

/*
  Loop Challenge
*/

/* let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];



document.write(`<div>We Have ${myAdmins.length - 2} Admins</div>`);
for(let i = 0; i< myAdmins.length;i++){
  let counter = 1
  if(myAdmins[i] === ("Stop")){
    break;
  }  
  document.write(`<hr>`);
  document.write(`<div>`);
  document.write(`<div>The admin for team ${i + 1} is ${myAdmins[i]} </div>`);
  document.write(`<h3>Team members:</h3>`);
  for(let j=0;j< myEmployees.length;j++){
    if(myEmployees[j] === "Anwar")break;
    if(myAdmins[i].startsWith("A") && myEmployees[j].startsWith("A")){
      document.write(`<p>- ${counter++} ${myEmployees[j]}</p>`)
    }else if(myAdmins[i].startsWith("O") && myEmployees[j].startsWith("O")){
      document.write(`<p>- ${counter++} ${myEmployees[j]}</p>`)
    } else if(myAdmins[i].startsWith("S") && myEmployees[j].startsWith("S")){
      document.write(`<p>- ${counter++} ${myEmployees[j]}</p>`)
    }
  }
  document.write(`</div>`)
}
 */
/* let myAdmins = ["ahmed", "osama", "sayed", "stop", "samera"];
let myEmployees = ["amged", "samag","ameer","omar","othman","amany","samia","Soad","Ameen","Omneia",];
let admins = [];

for (let i = 0; i < myAdmins.length; i++) {
  if (myAdmins[i] === "stop") {
    break;
  }
  
  admins.push(myAdmins[i]);
}

console.log(admins);
document.write(`<h1><div> We Have ${admins.length} Admins</div></h1> `);
document.write(`<hr>`);
// ---------------------------------------

for (let x = 0; x < admins.length; x++) {
  let con = 1;
  document.write(
    `<h3> The Admin for Team ${x + 1} is " ${admins[x].toUpperCase()}"</h3>`
  );
  document.write(`<h4>Team Members :</h4>`);

  for (m = 0; m < myEmployees.length; m++) {
    if (
      admins[x][0].toLocaleLowerCase() === myEmployees[m][0].toLocaleLowerCase()
    ) {
      // document.write(`<hr>`)
      document.write(`<div>`);
      document.write(`${con} - ${myEmployees[m].toLowerCase()} <br> `);
      document.write(`</div>`);
      document.write(`<hr>`);

      con++;
    }
  }
} */
/*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
*/
/* function showDetails(a, b, c){
  let Name;
  let Age;
  let Status;
  typeof a === "string"? Name = a:typeof b === "string"? Name = b: Name = c;
  typeof a === "number"? Age = a:typeof b === "number"? Age = b: Age = c;
  typeof a === "boolean"? Status = a:typeof b === "boolean"? Status = b: Status = c;
  return console.log(`Hello ${Name}, Your Age Is ${Age}, You Are${Status?'':' Not'} Available For Hire`)
}

showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire" */
/*
  Function Arrow Challenges
*/

// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]

/* let names = function (...Names) {
 
  return `String [${Names.join("], [")}] => Done !`;
}; */
/* let names = (...Names) => `String [${Names.join("], [")}] => Done !`;;

console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

/* ================================= 

// [1] Replace ??? In Return Statement To Get The Output
// [2] Create The Same Function With Regular Syntax
// [3] Use Array Inside The Arguments To Get The Output

let myNumbers = [20, 50, 10, 60];

let calc = (one, two, ...nums) => one + two + nums[0];

console.log(calc(10, myNumbers[0], myNumbers[1])); // 80 */
/*
  Higher Order Functions Challenges

  You Can Use
  - ,
  - _
  - Space
  - True => 1 => One Time Only In The Code

  You Cannot Use
  - Numbers
  - Letters

  - You Must Use [Filter + Map + Reduce + Your Knowledge]
  - Order Is Not Important
  - All In One Chain

*/

/* let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = myString.split("").map((ele)=>{
  return ele === ","? "": ele && ele === "_"? " ": ele
}).filter((ele)=>{
  return  isNaN(parseInt(ele))
}).reduce((cu,acc)=>{
  return`${cu}${acc}`
}).slice(1,18)

console.log(solution); // Elzero Web School */
/* let Stringer = "EElllzzzzzzzeroo";
let sol = Stringer.split("").filter((ele,i)=>{
  return Stringer.indexOf(ele)=== i
})
console.log(sol)
// Elzero */
/* let myArray = ["E", "l", "z", ["e", "r"], "o"];
let array = myArray.reduce((cu,acc)=>{
  return `${cu}${acc}`
}).split("").filter((ele)=>{
  return ele !== ","
}).join("")
console.log(array)

// Elzero */
/* let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
let solmate = numsAndStrings.filter((ele)=>{
  return !isNaN(parseInt(ele))
}).map((ele)=>{
  return -ele
})
console.log(solmate)
// [-1, -10, 10, 20, -5, -3] */
// let nums = [2, 12, 11, 5, 10, 1, 99];

// let newNums = nums.reduce(function(acc,cu){
// return cu % 2 === 0 ? cu * acc : cu + acc

// },1)
// // 500
// console.log(newNums)
/* let maxSpeed = {
  car: 300, 
  bike: 60, 
  motorbike: 200, 
  airplane: 1000,
  helicopter: 400, 
  rocket: 8 * 60 * 60
};
let sortable = [];
for(var vehicle in maxSpeed){
  sortable.push([vehicle,maxSpeed[vehicle]])
}
sortable.sort(function(a, b) {
  return a[1] - b[1];
}); */

//console.log(vehicle)
/* const maxSpeed = {
  car: 300, 
  bike: 60, 
  motorbike: 200, 
  airplane: 1000,
  helicopter: 400, 
  rocket: 8 * 60 * 60
}
let sortable = [];
let vehicle = Object.keys(maxSpeed)
for(let vehicle in maxSpeed){
  sortable.push(vehicle,Object.values(maxSpeed))
}
console.log(sortable) */
/* const maxSpeed = {
  car: 300, 
  bike: 60, 
  motorbike: 200, 
  airplane: 1000,
  helicopter: 400, 
  rocket: 8 * 60 * 60
}
let sortable = [];
let vehicle = Object.keys(maxSpeed)

  sortable.push(vehicle,maxSpeed[vehicle])

console.log(sortable) */
// const maxSpeed = {
//   car: 300, 
//   bike: 60, 
//   motorbike: 200, 
//   airplane: 1000,
//   helicopter: 400, 
//   rocket: 8 * 60 * 60
// };

// const sortable = Object.fromEntries(
//   Object.entries(maxSpeed).sort(([,a],[,b]) => a-b)
// );


// console.log(sortable);
// Create Your Object Here

// let member={
//   name:"Elzero",
//   age:38,
//   country:"Egypt",
//   fullDetails : function(){
//     return`My Name Is ${member.name}, My Age Is  ${member.age}, I Live in  ${member.country}`
//   }

// }
// console.log(member.name); // Elzero
// console.log(member.age); // 38
// console.log(member.country); // Egypt
// console.log(member.fullDetails());
// // My Name Is Elzero, My Age Is 38, I Live in Egypt
// Method One
// Create Your Object Here
// let objMethodOne = {
//   property:"Method One"
// }
// console.log(objMethodOne.property); // "Method One"

// let objMethodTwo ={}
// objMethodTwo.property="Method Two";
// // Create Your Object Here

// console.log(objMethodTwo.property); // "Method Two"

// let objMethodThree = new Object()
// // Create Your Object Here
// objMethodThree.property = "Method Three"
// console.log(objMethodThree.property); // "Method Three"

// let objMethodFour = Object.create({})
// objMethodFour.property = "Method Four"
// // Create Your Object Here

// console.log(objMethodFour.property); // "Method Four"
/* let a = 1;

let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};
let finalObject = Object.assign({a},threeNums,twoNums)


console.log(finalObject); */

/*
  a: 1
  b: 2
  c: 3
  d: 4
  e: 5
  f: 6
*/
// The Object To Work With
/* let myFavGames = {
  "Trinity Universe": {
    publisher: "NIS America",
    price: 40,
  },
  "Titan Quest": {
    publisher: "THQ",
    bestThree: {
      one: "Immortal Throne",
      two: "Ragnarök",
      three: "Atlantis",
    },
    price: 50,
  },
  YS: {
    publisher: "Falcom",
    bestThree: {
      one: "Oath in Felghana",
      two: "Ark Of Napishtim",
      three: "origin",
    },
    price: 40,
  },
};

// Code One => How To Get Object Length ?
let keys = Object.keys(myFavGames)
let objectLength = keys.length;

for (let i = 0; i < objectLength; i++) {
  console.log(`The Game Name Is ${keys[i]}`);
  console.log(`The Publisher Is ${myFavGames[keys[i]]["publisher"]}`);
  console.log(`The Price Is ${myFavGames[keys[i]]["price"]}`);
  // Check If Nested Object Has Property (bestThree)
  if (Object.hasOwn(myFavGames[keys[i]],"bestThree")) {
    console.log("- Game Has Releases");
    console.log(`First => ${myFavGames[keys[i]]["bestThree"]["one"]}`);
    console.log(`Second => ${myFavGames[keys[i]]["bestThree"]["two"]}`);
    console.log(`Third => ${myFavGames[keys[i]]["bestThree"]["three"]}`);
  }
  console.log("#".repeat(20)); 
} */

// Ouput

// "The Game Name Is Trinity Universe"
// "The Publisher Is NIS America"
// "The Price Is 40"
// "####################"
// "The Game Name Is Titan Quest"
// "The Publisher Is THQ"
// "The Price Is 50"
// "- Game Has Releases"
// "First => Immortal Throne"
// "Second => Ragnarök"
// "Third => Atlantis"
// "####################"
// "The Game Name Is YS"
// "The Publisher Is Falcom"
// "The Price Is 40"
// "- Game Has Releases"
// "First => Oath in Felghana"
// "Second => Ark Of Napishtim"
// "Third => origin"
// "####################" 

/*
  Destructuring
  - Challenge
*/

/* let chosen = 3;

let myFriends = [
  { title:"Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];
if(chosen === 1){
  ({title,age,available,skills:[two]} = myFriends[0])
}else if(chosen === 2){
(  {title,age,available,skills:[two]} = myFriends[1])
}else{
  ({title,age,available,skills:[two]} = myFriends[2])
}
console.log(`The Title : ${title}`)
console.log(`The Age : ${age}`);
console.log(`${available==true ? "Available":"Not Available"}`);
console.log(`${two}`); */
/* let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];

[a, b, c, [d, e, [f, g]]] = mySkills

console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel
let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

([, a, b, c] = arr3.concat(arr1))
// Play With Arrays To Prepare For Destructuring
// Write Your Destructuring Assignment Here

console.log(`My Best Friends: ${a}, ${b}, ${c}`);

// My Best Friends: Shady, Mahmoud, Ahmed */
/* const member = {
  age: 30,
  working: false,
  country: "Egypt",
  hobbies: ["Reading", "Swimming", "Programming"],
};

  ({age:a,working:w,country:c,hobbies: [h1, ,h3]} = member)

console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);
// My Age Is 30 And Iam Not Working

console.log(`I Live in ${c}`);
// I Live in Egypt

console.log(`My Hobbies: ${h1} And ${h3}`);
// My Hobbies: Reading And Programming */

/* const game = {
  title: "YS",
  developer: "Falcom",
  releases: {
    "Oath In Felghana": ["USA", "Japan"],
    "Ark Of Napishtim": {
      US: "20 USD",
      JAP: "10 USD",
    },
    Origin: "30 USD",
  },
};
({title:t,developer:d,releases}= game)
let [o,a]= Object.keys(releases)
//let[u,j]= Object.values(releases["Oath In Felghana"])
//let [u_price,j_price]= Object.values(releases["Ark Of Napishtim"])
let [[u,j],{US:u_price,JAP:j_price},or]=Object.values(releases)
// Write Your Destructuring Assignment/s Here

console.log(`My Favourite Games Style Is ${t} Style`);
// My Favourite Games Style Is YS Style

console.log(`And I Love ${d} Games`);
// And I Love Falcom Games

console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
// My Best Release Is Oath In Felghana It Released in USA & Japan

console.log(`Although I Love ${a}`);
// Although I Love Ark Of Napishtim

console.log(`${a} Price in USA Is ${u_price}`);
// Ark Of Napishtim Price in USA Is 20 USD

console.log(`${a} Price in Japan Is ${j_price}`);
// Ark Of Napishtim Price in Japan Is 10 USD

console.log(`Origin Price Is ${or}`);
// Origin Price Is 30 USD */
/* let setOfNumbers = new Set([10])
setOfNumbers.add(20).add(setOfNumbers.size)
console.log(setOfNumbers)
console.log(Array.from(setOfNumbers)[2])

// Needed Output
/* Set(3) {10, 20, 2}
2 
let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

let friends = new Set(myFriends)
console.log(Array.from(friends).sort())
//(4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']
let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};
let info = new Map(Object.entries(myInfo))
console.log(info)
console.log(info.size)
console.log(info.has('role'))*/
// Needed Output
/* Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
3
true 
let theNumber = 100020003000;

console.log(parseInt(Array.from(new Set(Array.from(theNumber.toString()).sort())).slice(true).join("")))
// Needed Output
123 */
/*
  Map And Set + What You Learn => Challenge
  Requirements
  - You Cant Use Numbers Or True Or False
  - Don't Use Array Indexes
  - You Cant Use Loop
  - You Cant Use Any Higher Order Function
  - Only One Line Solution Inside Console
  - If You Use Length => Then Only Time Only
  Hints
  - You Can Use * Operator Only In Calculation
  - Set
  - Spread Operator
  - Math Object Methods
*/

/* let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

console.log(Math.max(...n2) * [...n1, ...n2].length); // 210
let theName = "Elzero";
console.log(theName.split(""))
console.log([...theName])
console.log(Array.from(theName) )
// Needed Output
['E', 'l', 'z', 'e', 'r', 'o'] */
/* class Car {
  constructor(name, model, price) {
    this.n = name;
    this.m = model;
    this.p = price;
  }
  run(){
    return`Car Is Running Now`
  }
  stop(){
    return`Car Is Stopped`
  }
}
carone = new Car("MG","2022","420000")
console.log(`"Car One Name Is ${carone.n} And Model Is ${carone.m} And Price Is ${carone.p}"`)
console.log(carone.run())
// Needed Output

"Car One Name Is MG And Model Is 2022 And Price Is 420000"
"Car Is Running Now "*/

/* class Phone {
  constructor(name, serial, price) {
    this.name = name;
    this.serial = serial;
    this.price = price;
  }
}
class Tablet extends Phone {
  constructor(name, serial, price,size) {
    super(name, serial, price)
    this.size = size ||"Unknown";
  }
  fullDetails(){
    return `${this.name} Serial is ${this.serial} And Size Is ${this.size}`
  }
}

// Write Tablet Class Here

let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
let TabletThree = new Tablet("LG", 250450650, 650);

console.log(`${TabletOne.fullDetails()}`);
// iPad Serial is 100200300 And Size Is 12.9

console.log(`${TabletTwo.fullDetails()}`);
// Nokia Serial is 350450650 And Size Is 10.5

console.log(`${TabletThree.fullDetails()}`);
// LG Serial is 250450650 And Size Is Unknown */
// Edit The Class
/* class User {
  #c
  constructor(username, card) {
    this.u = username;
    this.#c = card;
    
  }
  regex(){
    return  this.#c.toString().match(/\d{4}/g).join("-") 
  }
  get showData(){
    return `Hello ${this.u} Your Credit Card Number Is ${(this.regex())}`
  }
}

// Do Not Edit Anything Below

let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);

console.log(userOne.showData);
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo.showData);
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree.showData);
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678
// Write Your Code Here */

/* String.prototype.addLove = function(){
  return `I Love ${this} Web School`
}
// Do Not Edit Below
let myStr = "Elzero";
console.log(myStr.addLove()); // I Love Elzero Web School */

/* const myObj = {
  username: "Elzero",
  id: 100,
  score: 1000,
  country: "Egypt",
};

Object.defineProperty(myObj,"score",{
  writable:false,
  configurable: true,
  enumerable: true,
}
)
Object.defineProperty(myObj,"id",{
  writable:true,
  configurable: true,
  enumerable: false,
}
)
Object.defineProperty(myObj,"score",{
  writable:false,
  configurable: true,
  enumerable: true,
}
)
delete myObj.country
myObj.score = 500;

for (let prop in myObj) {
  console.log(`${prop} => ${myObj[prop]}`);
}

console.log(myObj);
 */
// Needed Output

/* "username => Elzero"
"score => 1000"
{username: 'Elzero', score: 1000, id: 100}
 */
/* let p = document.getElementsByTagName("p")[0];
p.remove() */

/* <div class="start" title="Start Element" data-value="Start">Start</div>
<div class="our-element">Our Element</div>
<div class="end" title="End Element" data-value="End">End</div> */


//[...document.body.children].forEach(el=>(el.onclick = () => console.log(el.localName)))
/* let add = document.querySelector(".classes-to-add");
let remove = document.querySelector(".classes-to-remove");
let current = document.querySelector('[title="Current"]')
let cls= document.querySelector(".classes-list div");


function addRem(){
    document.querySelectorAll("span").forEach(el=>el.remove())

    for(let i = 0; i< this.value.trim().split(" ").length; i++){

      if(add.value)
      current.classList.add(add.value.toLowerCase().trim().split(" ")[i]);
      if(remove.value)
      current.classList.remove(remove.value.toLowerCase().trim().split(" ")[i]);
    }
    this.value = "";

    if(current.classList.length){
      [...current.classList].sort().forEach(el=>{
        let clspan = document.createElement("span");
        clspan.textContent= el;
        cls.append(clspan)
      })
    }else cls.textContent = "No Classes To Show";
}

add.onblur = addRem;
remove.onblur = addRem;
 */
/* let lis = document.querySelectorAll("ul li")
let exp = document.querySelector(".experiment")

if(window.localStorage.getItem("color")){
  exp.style.backgroundColor = window.localStorage.getItem("color")
  lis.forEach((li)=>{
    li.classList.remove("active")
  })
  document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active")
}else{
  console.log("No")
}


lis.forEach((li)=>{
  li.addEventListener("click",(e)=>{
    lis.forEach((li)=>{
      li.classList.remove("active")
    })
    e.currentTarget.classList.add("active")
    window.localStorage.setItem("color",e.currentTarget.dataset.color)
    exp.style.backgroundColor = window.localStorage.getItem("color")
  })
}) */
/* let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");
let arrayOfTasks = []
if(localStorage.getItem("tasks")){
  arrayOfTasks = JSON.parse(localStorage.getItem("tasks"))
}
getDataFrpmLocalstorage()

submit.onclick = function(){
  if(input.value !== ""){
    addTaskToArray(input.value)
    input.value = ""
  } 
}
tasksDiv.addEventListener("click",(e) => {
  if(e.target.classList.contains("del")) {
    deleteTaskWith(e.target.parentElement.getAttribute("data-id"))
    e.target.parentElement.remove()
  }
  if(e.target.classList.contains("task")){
    toggleStatusTaskWith(e.target.getAttribute("data-id"))
    e.target.classList.toggle("done")
  }
}) 

function addTaskToArray(taskText){
  const task ={
    id: Date.now(),
    title : taskText,
    completed:false,
  }
  arrayOfTasks.push(task);
  addElementToPageFrom(arrayOfTasks)
  addDataToLocalstorageFrom(arrayOfTasks)
}
function addElementToPageFrom(arrayOfTasks){
  tasksDiv.innerHTML= "";
  arrayOfTasks.forEach((task)=>{
    let div = document.createElement("div");
    div.className="task";
    if(task.completed){
      div.className="task done";
    } 
    div.setAttribute("data-id",task.id)
    div.appendChild(document.createTextNode(task.title))
    let span = document.createElement("span")
    span.className="del"
    span.appendChild(document.createTextNode("Delete"))
    div.appendChild(span)
    tasksDiv.appendChild(div)
    console.log(tasksDiv)
  })
}
function addDataToLocalstorageFrom(arrayOfTasks){
  window.localStorage.setItem("tasks",JSON.stringify(arrayOfTasks))
}
function getDataFrpmLocalstorage(){
  let data= window.localStorage.getItem("tasks")
  if(data){
    let tasks = JSON.parse(data)
    addElementToPageFrom(tasks)
  }
}
function deleteTaskWith(taskId){
arrayOfTasks = arrayOfTasks.filter((task)=> task.id != taskId)
addDataToLocalstorageFrom(arrayOfTasks)
}

function toggleStatusTaskWith(taskId) {
  for (let i = 0; i < arrayOfTasks.length; i++) {
    if (arrayOfTasks[i].id == taskId) {
      arrayOfTasks[i].completed == false ? (arrayOfTasks[i].completed = true) : (arrayOfTasks[i].completed = false);
    }
  }
  addDataToLocalstorageFrom(arrayOfTasks)
} */
/* let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");
let arrayOfTasks = [];
 if(window.localStorage.getItem("tasks")){
  arrayOfTasks = JSON.parse(window.localStorage.getItem("tasks"))
} 
getDataFromLocalstorage()
submit.onclick = function(){
  if(input.value !== ""){
    addTaskToArray(input.value);
  }
  input.value = ""
}
tasksDiv.addEventListener("click",(e)=>{
  if(e.target.classList.contains("del")){
    e.target.parentElement.remove()
  }
})
function addTaskToArray(taskText){
  const task = {
    id: Date.now(),
    title: taskText,
    completed: false,
  }
  arrayOfTasks.push(task);
  addElementToPageFrom(arrayOfTasks)
  addDataToLocalstorageFrom(arrayOfTasks)
}
function addElementToPageFrom(arrayOfTasks){
  tasksDiv.innerHTML= "";
  arrayOfTasks.forEach((task)=>{
    let div = document.createElement("div");
    div.className = "task";
    if(task.completed){
      div.className = "task done";
    }
    div.setAttribute("data-id",task.id);
    div.appendChild(document.createTextNode(task.title));
    let span = document.createElement("span");
    span.className = "del";
    span.appendChild(document.createTextNode("Delete"));
    div.appendChild(span);
    tasksDiv.appendChild(div)
    
  })
  
}  
function addDataToLocalstorageFrom(arrayOfTasks){
  window.localStorage.setItem("tasks",JSON.stringify(arrayOfTasks))
}
function getDataFromLocalstorage(){
  let data = window.localStorage.getItem("tasks")
  if(data){
    let tasks = JSON.parse(data)
    addElementToPageFrom(tasks)
  }
} */
/* let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks"); */
/* let arrayOfTasks= []

submit.onclick = function(){
  if(input.value !== ""){
    addTasksToArray(input.value )
  }
  input.value = ""
}
function addTasksToArray(taskText){
    const task = {
      id:Date.now(),
      title:taskText,
      Completed: false,
    }
    arrayOfTasks.push(task);
    addElementToPageFrom(arrayOfTasks);
    addDataToLocalstorage(arrayOfTasks)
}
function addElementToPageFrom(arrayOfTasks){
  tasksDiv.innerHTML = "";
  arrayOfTasks.forEach((task)=>{
    let div = document.createElement("div");
    div.className = "task";
    if(task.Completed){
      div.className = "task done";
    }
    div.setAttribute("data-id",task.id);
    div.appendChild(document.createTextNode(task.title))
    let span= document.createElement("span");
    span.className = "del"
    span.appendChild(document.createTextNode("Delete"))
    div.appendChild(span)
    tasksDiv.appendChild(div)
  })
}
function addDataToLocalstorage(arrayOfTasks){
  window.localStorage.setItem("tasks",JSON.stringify(arrayOfTasks));
} */
let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");
let arrayOfTasks = []

if(window.localStorage.getItem("tasks")){
  arrayOfTasks = JSON.parse(window.localStorage.getItem("tasks"))
}   

submit.onclick = function(){
  if(input.value !== ""){
    addTasksToArray(input.value)
  }
  input.value = ""
}
tasksDiv.addEventListener("click",(e)=>{
  if(e.target.classList.contains("del")){
    deleteTasksWith(e.target.parentElement.getAttribute("data-id"))
    e.target.parentElement.remove()
  }
  if(e.target.classList.contains("task")){
    toggleStatusTasksWith(e.target.getAttribute("data-id"))
    e.target.classList.toggle("done")
  }
})
getDataFromLocalstorage()
function addTasksToArray(taskText){
  const task = {
    id: Date.now(),
    title:taskText,
    completed:false,
  }
  arrayOfTasks.push(task)
  addElementToPageFrom(arrayOfTasks)
  addDataToLocalstorageFrom(arrayOfTasks)
}
function addElementToPageFrom(arrayOfTasks){
  tasksDiv.innerHTML = "";
  arrayOfTasks.forEach((task)=>{
  let div = document.createElement("div")
  div.className = "task"
  if(task.completed){
    div.className = "task done"
  }
  div.setAttribute("data-id", task.id)
  div.appendChild(document.createTextNode(task.title))
  let span =  document.createElement("span")
  span.className = "del"
  span.appendChild(document.createTextNode("Delete"))
  div.appendChild(span)
  tasksDiv.appendChild(div)
  })
}
function addDataToLocalstorageFrom(arrayOfTasks){
  window.localStorage.setItem("tasks",JSON.stringify(arrayOfTasks))
}
function getDataFromLocalstorage(){
  let data = window.localStorage.getItem("tasks");
  if(data){
    let tasks = JSON.parse(data)
    addElementToPageFrom(tasks)
  }
} 
function deleteTasksWith(taskId){
  arrayOfTasks = arrayOfTasks.filter((task)=> task.id != taskId)
  addDataToLocalstorageFrom(arrayOfTasks)
}
function toggleStatusTasksWith(taskId){
  for(let i = 0; i < arrayOfTasks.length; i++){
    if(arrayOfTasks[i].id == taskId){
      arrayOfTasks[i].completed == false ? (arrayOfTasks[i].completed = true) : (arrayOfTasks[i].completed = false);
    }
  }
  addDataToLocalstorageFrom(arrayOfTasks)
}





















/* function addRem(){
  document.querySelectorAll("span").forEach(el => el.remove());

  for(let i = 0; i < this.value.trim().split(" ").length; i++ ){
    if(add.value)
    current.classList.add(add.value.toLowerCase().trim().split(" ")[i])
    
    if(remove.value)
    current.classList.remove(remove.value.toLowerCase().trim().split(" ")[i])
    
  }
  this.value = "";
  if(current.classList.length){
    [...current.classList].sort().forEach(el=>{
    let clspan = document.createElement("span");
    clspan.textContent = el;
    cls.append(clspan);
    })
  }else cls.textContent = "No Classes To Show";
}
add.onblur = addRem;
remove.onblur = addRem; */
