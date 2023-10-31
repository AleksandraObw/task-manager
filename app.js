const buttonAdd = document.querySelector('#add');
const input = document.querySelector('#input');
const taskList = document.querySelector('#task-list');
const errorMsg = document.querySelector('#error-msg');

window.onload = displayDate();

buttonAdd.addEventListener('click', event => {
    event.preventDefault();
    removeErrors();
    if (!input.value) {
        addErrors();
    } 
    else {
        taskList.innerHTML +=
        `<div class="list__item item">
            <p class="item__task-text task-text">${input.value}</p>
            <button class="item__button button delete-button"><i class="fa fa-trash" aria-hidden="true"></i></button>   
        </div>`
        input.value = ""
    }  
});

taskList.addEventListener('click', event => {
    if (event.target.classList.contains('fa-trash')) {
        event.target.parentNode.parentNode.remove()
    }
    if (event.target.classList.contains('task-text')) {
        event.target.classList.toggle('done')
    }
})

function displayDate() {
 const date = document.querySelector('#date');

 let currentDate = new Date();
 date.innerHTML = `${currentDate.getDate()}.${currentDate.getMonth() + 1}.${currentDate.getFullYear()}`
}

function removeErrors() {
    input.classList.remove('error')
    errorMsg.classList.add('hidden')
}

function addErrors() {
    input.classList.add('error')
    errorMsg.classList.remove('hidden')
}

