const body = document.querySelector('body');

const input = document.createElement('input');

input.type = 'text';

body.appendChild(input);

const createDiv = document.createElement('div');
const catchDiv = document.querySelector('div');

body.appendChild(createDiv);

let cont = 0;


function createTask() {
    const catchDiv = document.querySelector('div');
    const task = document.createElement('p');
    const valueP = input.value;
    task.id = cont;

    const img = document.createElement('img');
    img.src = './imagens/remove.png';
    img.id = cont;

    task.innerHTML = valueP;
    catchDiv.appendChild(task);
    task.appendChild(img);

    cont += 1
}

function remove () {
    const allImg = document.querySelectorAll('img');
    const divTask = document.querySelector('div');
    const childrens = divTask.childNodes;
        for (let i = 0; i < allImg.length; i += 1) {
            allImg[i].addEventListener('click', () => {
            const remove = allImg[i].id
            const catchRemove = document.getElementById(remove);
            divTask.removeChild(catchRemove);
        })
    } 
}




function validatesEnter() {
    const catchInput = document.querySelector('input');
    catchInput.addEventListener('keydown', function (e) {
        if (e.code === 'Enter') {
            createTask();
            remove();
        }

    })
}


function init() {
    validatesEnter();
}

window.onload = init;