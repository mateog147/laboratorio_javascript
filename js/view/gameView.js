import { validateAnswer, quitGame } from "../controller/gameController.js";
/**
 * Funcion para cargar la vista del juego 
* @author Mateo Gutierrez <mateog147@hotmail.com>
 * @version 1.0.0 2022/06/02
 * @since 1.0.0
 */
export const newGame = () => {
    
    const container = document.querySelector("#container");
    container.removeChild(container.firstChild);

    const gameContainer = document.createElement("div");
    gameContainer.classList.add("game_container");
    container.appendChild(gameContainer);

    const nameField = document.createElement("p");
    nameField.classList.add("name_txt");
    gameContainer.appendChild(nameField);

    const scoreField = document.createElement("p");
    scoreField.classList.add("score_txt");
    gameContainer.appendChild(scoreField);

    const answerContainer = document.createElement("div");
    gameContainer.classList.add("answer_container");

    const question = document.createElement("p");
    question.classList.add("question");

    for(let i = 1; i <=4; i++){
        const btnAnswer = document.createElement("button");
        btnAnswer.classList.add("btn_answer");
        btnAnswer.addEventListener("click",() =>{validateAnswer(btnAnswer.textContent)},false)
        btnAnswer.id = "btn" + i;
        answerContainer.append(btnAnswer)
    }

    const quitBtn = document.createElement("button");
    quitBtn.innerHTML = "Abandonar la partida"
    quitBtn.classList.add("quit_btn")
    quitBtn.addEventListener("click",quitGame,true)

    gameContainer.append(question, answerContainer, quitBtn)


}