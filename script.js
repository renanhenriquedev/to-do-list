const body = document.querySelector('body');

const input = document.createElement('input');

input.type = 'text';

body.appendChild(input);

const createDiv = document.createElement('div');
const catchDiv = document.querySelector('div');

body.appendChild(createDiv);

let cont = 0;

// function createButton (numero, par) {
//     const button = document.createElement('button');
//     button.id = numero
//     button.type = 'button'
//     button.innerText = 'X';
//     par.appendChild(button)
// }

function createTask() {
    const catchDiv = document.querySelector('div');
    const task = document.createElement('p');
    const valueP = input.value;
    task.id = cont;

    const button = document.createElement('button');
    button.id = cont;
    button.type = 'button'
    button.innerText = 'X';


    task.innerHTML = valueP;
    catchDiv.appendChild(task);
    task.appendChild(button);

    cont += 1
}

function remove () {
    const allButton = document.querySelectorAll('button');
    const divTask = document.querySelector('div');
    const childrens = divTask.childNodes;
        for (let i = 0; i < allButton.length; i += 1) {
            allButton[i].addEventListener('click', () => {
            const remove = allButton[i].id
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