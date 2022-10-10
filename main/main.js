import {getHeader} from "./components/header.js";
import {getButton} from "./components/button.js";

document.getElementById("header").appendChild(getHeader('Online Atlantis Escape Room', 'Can you reach the sunken island?'));
// document.getElementById("button").appendChild(getButton('Submit'));



const btn = document.querySelector('.btn');

function checkAnswer() {
    const rightAnswerNorth = '104770N';
    var inputUserNorth = document.getElementById("field1");
    const rightAnswerWest = '362095W';
    var inputUserWest = document.getElementById("field2");

    if (rightAnswerNorth === inputUserNorth.value) {
        console.log("correct");
        document.getElementById("field1").style.backgroundColor = "green";
    } else {
        console.log("incorrect");
        document.getElementById("field1").style.backgroundColor = "red";
        setTimeout(function(){
            document.getElementById("field1").style.backgroundColor = "white";
        }, 2000);
    }

    if (rightAnswerWest === inputUserWest.value) {
        console.log("correct");
        document.getElementById("field2").style.backgroundColor = "green";
    } else {
        console.log("incorrect");
        document.getElementById("field2").style.backgroundColor = "red";
        setTimeout(function(){
            document.getElementById("field2").style.backgroundColor = "white";
        }, 2000);
    }
}
btn.addEventListener('click', checkAnswer);