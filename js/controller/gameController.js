import { newGame } from "../view/gameView.js";
import { newUser } from "../model/user.js";
import {getQuestion} from "../model/question.js"
import {ranking} from "./rankingController.js"

let currentQuestion = {};
let level = 1;
let score = 0;
let player = {}
export const play = (name) =>{
    player = newUser(name);
    newGame();
    const userTxt = document.querySelector(".name_txt");
    userTxt.textContent = "Usuario: " + player.name;
    const scoreTxt = document.querySelector(".score_txt");
    scoreTxt.textContent = "Puntaje: " + score;

    setNewQuestion();
    
    

}

export const validateAnswer = (answer) =>{
    let question = JSON.parse(sessionStorage.getItem("currentQuestion"));
    if(answer == question.correcta){
        score += level * 100;
        level++;
        alert("Correcto")
        if(level > 5){
            win();
        }else{
            setNewQuestion();
        }
        
    }else{
        alert("Incorrecto - Juego terminado")
        gameOver();
    }
}

export const quitGame = () =>{
    alert("Juego terminado")
    win();
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

const win = ()=>{
    let top = [];
    player.setScore(score)
    if(localStorage.getItem("topPlayer")){
        top = JSON.parse(localStorage.getItem("topPlayer"));
        top.push(player);
        localStorage.setItem("topPlayer",JSON.stringify(top));
    }else{
        top.push(player);
        localStorage.setItem("topPlayer",JSON.stringify(top));
    }
    ranking()
}

const gameOver = ()=>{
    let top = [];
    if(localStorage.getItem("topPlayer")){
        top = JSON.parse(localStorage.getItem("topPlayer"));
        top.push(player);
        localStorage.setItem("topPlayer",JSON.stringify(top));
    }else{
        top.push(player);
        localStorage.setItem("topPlayer",JSON.stringify(top));
    }
    ranking()
}