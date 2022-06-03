import { start } from "../controller/loginController.js";

/**
 * Funcion para capturar el usuario y comenzar el juego
* @author Mateo Gutierrez <mateog147@hotmail.com>
 * @version 1.0.0 2022/06/02
 * @since 1.0.0
 */
export const login = () =>{

    /*Capturo los elementos del dom*/
    const container = document.querySelector("#container");

    /*Creo el contenido */
    const formContainer = document.createElement("div")
    formContainer.classList.add("form_container")
    container.append(formContainer)

    const title = document.createElement("h1");
    title.textContent = "Juego de preguntas y respuestas";
    
    const form = document.createElement("div");
    form.classList.add("login_form");

    const label = document.createElement("label");
    
    label.textContent = "Nombre: ";

    const input = document.createElement("input")
    input.id = ("name_input");
    input.type = "text"

    const button = document.createElement("button");
    button.textContent="Ingresar"
    button.onclick=start


    form.append(label, input, button);
    formContainer.append(title, form)
}