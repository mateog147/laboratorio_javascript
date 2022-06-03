/**
 * Clase usuario.
 * Atributos nombre y score
 * Metodo set para el score
 */
export class User{
    constructor(name){
        this.name = name
        this.score = 0;
    }

    setScore = (score) =>{
        this.score = score;
    }
}

export const newUser = (name) =>{
    return new User(name)
}