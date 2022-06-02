import { play } from "./gameController.js";

export const start = () =>{
    
    const input = document.querySelector("#name_input")

    if(input.value){
        play(input.value);
    }else{
        alert("Ingresa un nombre para jugar")
    }
    

}