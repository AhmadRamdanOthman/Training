/*Advices
- Always Check The Console
- Take Your Time To Name The Identifiers
- DRY

Steps To Create The Project
[01] Create HTML Markup
[02] Add Styling And Separate From Logic
[03] Create The App Logic
---- [01] Add Levels
---- [02] Show Level And Seconds
---- [03] Add Array Of Words
---- [04] ِAdd Start Game Button
---- [05] Generate Upcoming Words
---- [06] Disable Copy Word And Paste Event + Focus On Input
---- [07] Start Play Function
---- [08] Start The Time And Count Score
---- [09] Add The Error And Success Messages
[04] Your Trainings To Add Features
---- [01] Save Score To Local Storage With Date
---- [02] Choose Levels From Select Box
---- [03] Break The Logic To More Functions
---- [04] Choose Array Of Words For Every Level
---- [05] Write Game Instruction With Dynamic Values
---- [06] Add 3 Seconds For The First Word
*/

// Array Of Words
const words = [
"Hello",
"Programming",
"Code",
"Javascript",
"Town",
"Country",
"Testing",
"Youtube",
"Linkedin",
"Twitter",
"Github",
"Leetcode",
"Internet",
"Python",
"Scala",
"Destructuring",
"Paradigm",
"Styling",
"Cascade",
"Documentation",
"Coding",
"Funny",
"Working",
"Dependencies",
"Task",
"Runner",
"Roles",
"Test",
"Rust",
"Playing"
];
const lvls = {
    "Easy":5,
    "Normal":3,
    "Hard":2
};
let defaultLevelName = "Easy";
let defaultLevelSeconds = lvls[defaultLevelName];

let startButton = document.querySelector(".start");
let lvlNameSpan = document.querySelector(".message .lvl");
let secondsSpan = document.querySelector(".message .seconds");
let theWord = document.querySelector(".the-word");
let upcomingWords = document.querySelector(".upcoming-words");
let input = document.querySelector(".input");
let timeLeftSpan = document.querySelector(".time span");
let scoreGot = document.querySelector(".score .got");
let scoreTotal = document.querySelector(".score .total");
let finishMessage = document.querySelector(".finish");

lvlNameSpan.innerHTML = defaultLevelName;
secondsSpan.innerHTML = defaultLevelSeconds;
timeLeftSpan.innerHTML = defaultLevelSeconds;
scoreTotal.innerHTML = words.length;

input.onpaste = function(){
    return false;
}

startButton.onclick = function(){
    startButton.remove();
    input.focus();
    genWord();
}
function genWord(){
    let randomWord = words[Math.floor(Math.random() * words.length)];
    let wordIndex = words.indexOf(randomWord);
    words.splice(wordIndex,1);
    theWord.innerHTML = randomWord;
    upcomingWords.innerHTML = "";
    for(let i = 0; i < words.length; i++){ 
        let div = document.createElement("div");
        let txt = document.createTextNode(words[i]);
        div.appendChild(txt);
        upcomingWords.appendChild(div);
    }
    startPlay();
}
function startPlay(){
    timeLeftSpan.innerHTML = defaultLevelSeconds;
    let start = setInterval(() => {
        timeLeftSpan.innerHTML--;
        if(timeLeftSpan.innerHTML === "0"){
            clearInterval(start);
            if(theWord.innerHTML.toLowerCase() === input.value.toLowerCase()){
                input.value = '';;
                scoreGot.innerHTML++
                if(words.length > 0){
                    genWord();
                }else {
                    let span = document.createElement("span");
                    span.className = 'good';
                    let spanText = document.createTextNode("Congratz");
                    span.appendChild(spanText);
                    finishMessage.appendChild(span);
                    upcomingWords.remove();
                }  
            }else{
                let span = document.createElement("span");
                span.className = "bad";
                let spanText = document.createTextNode("Game Over");
                span.appendChild(spanText);
                finishMessage.appendChild(span);
            }
        }
    },1000)
}
