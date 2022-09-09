const getElement = (id) => {
    const element = document.getElementById(id)
    return element;
}


const handlerSubmit = () => {
    const todos = JSON.parse(localStorage.getItem('TODOS'))
    const inputText = getElement('todo-text').value

    // console.log(todos)

    if (!todos) {
        const todoList = [
            {
                title: inputText,
                completed: false,
            },
        ];
        localStorage.setItem('TODOS', JSON.stringify(todoList));
    }
    else {
        const todoList = [
            ...todos,
            {
                title: inputText,
                completed: false,
            },
        ];
        localStorage.setItem('TODOS', JSON.stringify(todoList));
    };
    render()
};


const render = () => {
    const todos = JSON.parse(localStorage.getItem('TODOS'))
    const ul = getElement('todo-list');
    ul.innerHTML = '';

    todos.forEach((item) =>{
        const li = document.createElement('li')

        li.classList.add('py-2')

        li.innerText = item.title;

        ul.appendChild(li)
    });
};


const handClearAll = ()=>{
    localStorage.removeItem('TODOS');
    render();
};


render();












