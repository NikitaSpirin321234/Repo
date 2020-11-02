const table = document.getElementById('records');

let records = JSON.parse(localStorage["tetris.records"])['records'];

//console.log("Records: ", records);

let lastPlayer = records[records.length - 1];

records.sort((a, b) => {
    return b.score - a.score;
})
let i = 0;
for (let row of records){
    if (i >= 10) {
        break;
    }
    if(row) {
        let tr = document.createElement('tr');
        let name = document.createElement('td');
        let score = document.createElement('td');
        name.textContent = row.name;
        score.textContent = row.score;
        tr.appendChild(name);
        tr.appendChild(score);
        table.appendChild(tr);
        i++;
    }
}

let tr = document.createElement('tr');
let currentResult = document.createElement('td');
currentResult.colSpan = 2;
currentResult.innerHTML = '<b>Ваш результат</b>';
tr.appendChild(currentResult);
table.appendChild(tr);

tr = document.createElement('tr');
let name = document.createElement('td');
let score = document.createElement('td');
name.textContent = lastPlayer.name;
score.textContent = lastPlayer.score;
tr.appendChild(name);
tr.appendChild(score);
table.appendChild(tr);