const body = document.querySelector('body');

const input = document.createElement('input');

input.type = 'text';

body.appendChild(input);

const createDiv = document.createElement('div');

const createUl = document.createElement('ul');

body.appendChild(createDiv);

const catchDiv = document.querySelector('div');

catchDiv.appendChild(createUl)

let cont = 0;


function createTask() {
    const catchUl = document.querySelector('ul');
    const task = document.createElement('li');
    const valueLi = input.value;
    task.id = cont;

    const button = document.createElement('button');
    button.id = cont;
    button.classList.add('remove');
    button.type = 'button'
    button.innerHTML = 'X';


    task.innerText = valueLi;
    catchUl.appendChild(task);
    task.appendChild(button);

    cont += 1;
    input.value = ''
}


function storeTask() {
    const array = [];
    const catchLi = document.querySelectorAll('li');
    for (let i = 0; i < catchLi.length; i += 1) {
        let textLi = catchLi[i].innerText;
        let newtexto = textLi.replaceAll('X', '');
        array.push(newtexto);
        localStorage.setItem('li', JSON.stringify(array));
    }
}

function remove() {
    const allButton = document.querySelectorAll('.remove');
    const ulTask = document.querySelector('ul');
    const childrens = ulTask.childNodes;
    for (let i = 0; i < allButton.length; i += 1) {
        allButton[i].addEventListener('click', () => {
            const remove = allButton[i].id
            const catchRemove = document.getElementById(remove);
            ulTask.removeChild(catchRemove);
            storeTask();
        })
    }
}

function removeLast() {
    const allButton = document.querySelectorAll('.remove');
    const ulTask = document.querySelector('ul');
    const childrens = ulTask.childNodes;
    for (let i = 0; i < allButton.length; i += 1) {
        allButton[i].addEventListener('click', () => {
            const a = document.querySelectorAll('li').length
            if (a === 0) {
                localStorage.removeItem('li');
            }
        })

    }
}


function rescueLi() {
    if (localStorage.getItem('li') !== null) {
        const rescueLi = JSON.parse(localStorage.getItem('li'));
        for (let i = 0; i < rescueLi.length; i += 1) {
            const catchUl = document.querySelector('ul');
            const task = document.createElement('li');
            task.innerText = rescueLi[i];
            task.id = cont;

            catchUl.appendChild(task);

            const button = document.createElement('button');
            button.id = cont;
            button.classList.add('remove');

            button.type = 'button';
            button.innerHTML = 'X';
            task.appendChild(button);

            remove();
            cont += 1;

        }
    }
}


const buttonEdit = document.createElement('button');
buttonEdit.id = 'edit'
body.appendChild(buttonEdit);

function editOption () {
    const catchLi = document.querySelectorAll('li');
    const catchButton = document.querySelector('#edit')
    if (catchLi.length > 0 ) {
        catchButton.addEventListener('click', () => {
            console.log('pegando');
        })
    }
}

function catchTask() {
    const catchLi = document.querySelectorAll('li')

    for (let i = 0; i < catchLi.length; i += 1) {
        catchLi[i].addEventListener('click', () => {
            catchLi[i].style.backgroundColor = '#ff0000';
        }) 
    }

}

function validatesEnter() {
    const catchInput = document.querySelector('input');
    catchInput.addEventListener('keydown', function (e) {
        if (e.code === 'Enter') {
            createTask();
            remove();
            storeTask();
            removeLast();
            editOption();
            catchTask();
        }

    })
}



function init() {
    validatesEnter();
    rescueLi();
    removeLast();
    editOption();
}

window.onload = init;   