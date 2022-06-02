import { game } from "./gameView.js"
export const start = () =>{
    
    const input = document.querySelector("#name_input")

    if(input.value){
        alert(input.value)
        game(input.value);
    }else{
        alert("Ingresa un nombre para jugar")
    }
    

}