import { showRanking } from "../view/rankingView.js"
/**
 * Funcion para cargar el ranking de jugadores
* @author Mateo Gutierrez <mateog147@hotmail.com>
 * @version 1.0.0 2022/05/30
 * @since 1.0.0
 */
export const ranking = () =>{
    showRanking()

    let data = []
    const tableData = document.querySelector(".table")

    data = JSON.parse(localStorage.getItem("topPlayer"));
    let top = data.sort((a, b)=>{
        if(a.score > b.score ){
            return -1;
        }
        if(a.score < b.score ){
            return 1;
        }

        return 0;
    });

    top.forEach((value, index, array)=>{
        const tableRow = document.createElement("tr");

        const name = document.createElement("td");
        name.textContent = value.name;

        const score= document.createElement("td");
        score.textContent = value.score;
    
        tableRow.append(name, score);
    
        tableData.append(tableRow);
    })

}