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
    const icon = document.createElement('i');
    icon.className = 'bi bi-x'


    task.innerText = valueLi;
    catchUl.appendChild(task);
    button.append(icon)
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
            const icon = document.createElement('i');
            icon.className = 'bi bi-x'
            button.append(icon)


            button.type = 'button';
            task.appendChild(button);

            remove();
            cont += 1;

        }
    }
}



const buttonEdit = document.createElement('button');
buttonEdit.id = 'edit'
buttonEdit.innerText = 'editar'
body.appendChild(buttonEdit);

function editOption() {
    let cont = 1
    const catchBtn = document.querySelector('#edit');
    const catchLi = document.querySelectorAll('li');
    const catchInput = document.querySelector('input');


    catchBtn.addEventListener('click', () => {
        cont += 1;
        const array = []
        if (cont % 2 === 0 || cont === 6) {
            for (let i = 0; i < catchLi.length; i += 1) {
                catchLi[i].style.backgroundColor = '#114b93';
                catchLi[i].addEventListener('click', () => {
                    const catchInput = document.querySelector('input');
                    localStorage.setItem('miau', catchLi[i].id)
                    const a = catchLi[i].innerText

                    catchBtn.style.backgroundColor = 'green'

                    catchInput.value = a;
                    if (catchBtn.style.backgroundColor === 'green') {
                        catchBtn.addEventListener('click', () => {
                            catchLi[localStorage.getItem('miau')].innerHTML = catchInput.value
                            const button = document.createElement('button');

                            button.id = catchLi[i].id;
                            button.classList.add('remove');
                            const icon = document.createElement('i');
                            icon.className = 'bi bi-x'
                            button.append(icon)

                            button.type = 'button';
                            catchLi[localStorage.getItem('miau')].appendChild(button);
                            remove();
                            for (let i = 0; i < catchLi.length; i += 1) {
                                
                                array.push(catchLi[i].innerText)
                            }
                            localStorage.setItem('li', JSON.stringify(array))
                        })
                    }
                })
            }      
        }
        catchBtn.style.backgroundColor = '#74aaff'
        if ((cont % 3 === 0 && cont !== 6) || cont === 5 || cont === 7 ) {
            for (let i = 0; i < catchLi.length; i += 1) {
                catchLi[i].style.backgroundColor = '#74aaff';
            }
        }
    })
}


function validatesEnter() {
    const catchInput = document.querySelector('input');
    catchInput.addEventListener('keydown', function (e) {
        if (e.code === 'Enter') {
            createTask();
            remove();
            storeTask();
            removeLast();
            editOption()
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