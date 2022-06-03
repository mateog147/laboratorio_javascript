import {data} from "../questions.js"
export const getQuestion = (level) =>{
    const filteredData = data.filter((element)=>{
        return element.level == level;
    });
    
    let index = Math.random() * (4);
    index = parseInt(index);

    const response = filteredData[index];
    return response;
}