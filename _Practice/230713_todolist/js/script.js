const input = document.getElementById('add-todo');
const addButton = document.getElementById('add-button');
const list = document.getElementById('list');

const addList = () => {
    input.focus();

    if (input.value.length === 0) {
        return alert('문자를 하나라도 입력해주세요.');
    }

    const li = document.createElement('li');
    li.innerHTML = `${input.value} <button class="list-delete">x</button>`
    li.classList.add('list-item');
    list.appendChild(li);
    input.value = '';
    saveData();
}

input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addList();
    }
})

addButton.addEventListener('click', () => addList())

list.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    }

    if (e.target.tagName === 'BUTTON') {
        e.target.parentElement.remove();
        saveData();
    }
})

const saveData = () => {
    localStorage.setItem('list', list.innerHTML);
}

const loadData = () => {
    list.innerHTML = localStorage.getItem('list')
}

loadData();