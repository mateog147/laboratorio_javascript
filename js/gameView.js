import { User, newUser } from "./user.js"

export const game = (name) => {
    let player = newUser(name);
    console.log(player)
    const container = document.querySelector("#container");
    container.removeChild(container.firstChild);
}