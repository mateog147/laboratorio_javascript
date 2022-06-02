import { newGame } from "../view/gameView.js";
import { newUser } from "../model/user.js";

let currentQuestion = {};
export const play = (name) =>{
    const player = newUser(name);
    let level = 1;
    let score = 0;
    newGame();
    const userTxt = document.querySelector(".name_txt");
    userTxt.textContent = "Usuario: " + player.name;
    const scoreTxt = document.querySelector(".score_txt");
    scoreTxt.textContent = "Puntaje: " + player.score;

    setNewQuestion();


    

}

const setNewQuestion = (level) =>{
    console.log(level)
    const question = document.querySelector(".question");
    question.textContent = "Pregunta prueba";

    const btn1 = document.querySelector("#btn1");
    btn1.textContent = "prueba";

    const btn2 = document.querySelector("#btn2");
    btn2.textContent = "prueba";
    const btn3 = document.querySelector("#btn3");
    btn3.textContent = "prueba";
    const btn4 = document.querySelector("#btn4");
    btn4.textContent = "prueba";


}