import { start } from "../controller/loginController.js";
export const login = () =>{
    const container = document.querySelector("#container");
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