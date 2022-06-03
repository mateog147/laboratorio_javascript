export const showRanking = () => {
    
    const container = document.querySelector("#container");
    container.removeChild(container.firstChild);

    const rankingContainer = document.createElement("div");
    rankingContainer.classList.add("ranking_container");
    container.appendChild(rankingContainer);

    const title = document.createElement("h1");
    title.textContent = "Ranking";

    //Creo la tabla
    const tableData = document.createElement("table");
    tableData.classList.add("table");

    //Creo el encabezado
    const tableHeader = document.createElement("tr");
    const nameCol = document.createElement("th");
    nameCol.textContent = "Nombre"

    const scoreCol = document.createElement("th");
    scoreCol.textContent = "Puntaje"

    tableHeader.append(nameCol,scoreCol)
    tableData.append(tableHeader)
    rankingContainer.append(title,tableData)
}