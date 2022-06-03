import { play } from "./gameController.js";

/**
 * Controlador de la vista del login
* @author Mateo Gutierrez <mateog147@hotmail.com>
 * @version 1.0.0 2022/06/02
 * @since 1.0.0
 */
export const start = () =>{
    
    const input = document.querySelector("#name_input")

    if(input.value){
        play(input.value);
    }else{
        alert("Ingresa un nombre para jugar")
    }
    

}