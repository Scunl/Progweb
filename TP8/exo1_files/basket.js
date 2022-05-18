"use strict";

let request = new XMLHttpRequest();
request.onreadystatechange = function(){
    if (request.status == 200 && request.readyState == 4) {
        console.log(request.responseText);
        let json = JSON.parse(request.responseText);
        console.log(Object.keys(json));
        showJSONInTable(json);
    }
};
const showJSONInTable = function(json) {
    const table = document.getElementById("basket")
    let n = 0
    for (let obj in json) {
        let nom = document.createElement("td");
        let colonne = document.createElement("tr");
        let nb = document.createElement("td");
        n += json[obj]  
        nom.innerText = obj
        colonne.appendChild(nom);
        nb.innerText = json[obj];
        colonne.appendChild(nb);
        table.appendChild(colonne)
        console.log(table)
        
    }
    const a = document.getElementById("quantity");
    a.innerText = n;
};


request.open("GET", "http://localhost:8080/fruitQuantities.json", true);
request.send();