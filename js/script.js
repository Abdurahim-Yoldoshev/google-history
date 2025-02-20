const madal = document.querySelector('#madal-screen');
const historyContainer = document.getElementById('container');
const textArea = document.getElementById('textarea');
const historyBox = document.querySelector('history-box');
const deletes = document.querySelector('.btn');

function newBox() {
    madal.style.display = 'flex';
};

function otmena() {
    madal.style.display = 'none';
    textArea.value = '';
};

function saveData() {
    // textArea'dagi matnni localStorage'ga saqlash
    localStorage.setItem(Math.floor(Math.random(10)*20), textArea.value);
}

function showData() {
    historyContainer.innerHTML = '';

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        const div = document.createElement('div');
        div.id = `history-box`;
        div.classList.add(`${key}`);
        const deletes = document.createElement('button');
        deletes.classList.add('delete');
        deletes.innerHTML = `<img src="img/delete.png"></img>`;
        div.innerHTML = `<div class="history-text">${value}</div>`;
        historyContainer.appendChild(div);
        div.appendChild(deletes);
        deletes.addEventListener('click', function() {
            localStorage.removeItem(key);
            showData();
        });
    }
}
function ok() {
    saveData();
    madal.style.display = 'none';
    textArea.value = '';  // Tozalash uchun
    showData();
}

window.onload = function() {
    showData();
};

deletes.addEventListener('click', function() {
    localStorage.clear();
    showData();
});