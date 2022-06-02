export class User{
    constructor(name){
        this.name = name
    }
}

export const newUser = (name) =>{
    return new User(name)
}