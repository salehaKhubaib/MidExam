let input = document.getElementById('inp');
let text = document.querySelector(".text");

function Add() {
    if (input.value == "") {
        alert("Must Add Tasks to do");
    } else {
        let newTask = document.createElement('li');
        newTask.innerHTML = ` <i class="fa-regular fa-square-check"></i> <span>${input.value}</span> <i class="fa-solid fa-trash"></i> <i class="fa-solid fa-pen-to-square"></i> `;
        text.appendChild(newTask);
        input.value = '';
        
        newTask.querySelector('i.fa-solid.fa-trash').addEventListener('click', function() {
            newTask.remove();
        });
        
        newTask.querySelector('i.fa-solid.fa-pen-to-square').addEventListener('click', function() {
            const taskText = newTask.querySelector('span');
            const editedText = prompt('Edit the task:', taskText.textContent);
            if (editedText !== null) {
                taskText.textContent = editedText;
            }
        });
        const checkBox = newTask.querySelector('i.fa-regular.fa-square-check');
        const taskText = newTask.querySelector('span');

        checkBox.addEventListener('click', function() {
            if (!newTask.classList.contains('checked')) {
                newTask.classList.add('checked');
                taskText.style.textDecoration = 'line-through';
            } else {
                newTask.classList.remove('checked');
                taskText.style.textDecoration = 'none';
            }
        });



    }
}
