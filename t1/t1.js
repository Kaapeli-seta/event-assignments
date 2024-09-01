// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here

function newCheckbox(todo) {
  const input = document.createElement('input');
  input.type = 'checkbox';
  input.id = 'todo-' + todo.id;
  input.checked = todo.completed;
  const label = document.createElement('label');
  label.htmlFor = 'todo-' + todo.id;
  label.innerText = todo.task;
  const remove = document.createElement('button');
  remove.htmlFor = 'todo-' + todo.id;
  remove.innerText = 'X';
  const li = document.createElement('li');
  li.append(input, label, remove);
  lista.appendChild(li);
  input.addEventListener('click', function () {
    todo.completed = todo.completed ? false : true;
    console.log(todoList);
  });
  remove.addEventListener('click', function () {
    lista.removeChild(li);
    todoList.splice(todoList.indexOf(todo), 1);
    console.log('remove todo-' + todo.id);
    console.log(todoList);
  });
}

const lista = document.querySelector('#target');
const addBtn = document.querySelector('.add-btn');
const modal = document.querySelector('dialog');
const submit = document.querySelector('form > button');
const form = document.querySelector('form > input');

addBtn.addEventListener('click', function () {
  modal.showModal();
});

submit.addEventListener('click', function () {
  modal.close();
  const newValue = {
    id: todoList.at(todoList.length - 1).id + 1,
    task: form.value,
    completed: false,
  };
  form.value = '';
  todoList.push(newValue);
  newCheckbox(newValue);
  console.log(todoList);
});

for (const todo of todoList) {
  newCheckbox(todo);
}
