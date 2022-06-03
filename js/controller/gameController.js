import { newGame } from "../view/gameView.js";
import { newUser } from "../model/user.js";
import {getQuestion} from "../model/question.js"

let currentQuestion = {};
export let level = 1;
export let score = 0;
export const play = (name) =>{
    const player = newUser(name);
    newGame();
    const userTxt = document.querySelector(".name_txt");
    userTxt.textContent = "Usuario: " + player.name;
    const scoreTxt = document.querySelector(".score_txt");
    scoreTxt.textContent = "Puntaje: " + score;

    setNewQuestion();
    
    

}

export const validateAnswer = (answer) =>{
    console.log(answer);
    let question = JSON.parse(sessionStorage.getItem("currentQuestion"));
    console.log(question);
    if(answer == question.correcta){
       score += level * 100;
        level++;
        alert("Correcto")
        setNewQuestion();
    }else{
        alert("Incorrecto")
    }
}

const setNewQuestion = () =>{
    const scoreTxt = document.querySelector(".score_txt");
    scoreTxt.textContent = "Puntaje: " + score;console.log(level);

    currentQuestion = getQuestion(level);
    const question = document.querySelector(".question");
    question.textContent = currentQuestion.description;

    const btn1 = document.querySelector("#btn1");
    btn1.textContent = currentQuestion.respuesta1;

    const btn2 = document.querySelector("#btn2");
    btn2.textContent = currentQuestion.respuesta2;

    const btn3 = document.querySelector("#btn3");
    btn3.textContent = currentQuestion.respuesta3;


    const btn4 = document.querySelector("#btn4");
    btn4.textContent = currentQuestion.respuesta4;

    sessionStorage.setItem("currentQuestion",JSON.stringify(currentQuestion));
}