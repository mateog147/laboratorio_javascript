import {data} from "../questions.js"
/**
 * funcion que carga una pregunta del arreglo de 25 preguntas y la retorna
 * @param {*} level nivel de la pregunta a retornar
 * @returns un JSON con la pregunta
 */
export const getQuestion = (level) =>{
    const filteredData = data.filter((element)=>{
        return element.level == level;
    });
    
    let index = Math.random() * (4);
    index = parseInt(index);

    const response = filteredData[index];
    return response;
}