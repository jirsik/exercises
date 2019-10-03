document.addEventListener('DOMContentLoaded', () => {
    fetch('http://bootcamp.podlomar.org/api/todo')
        .then(response => response.json())
        .then(todolist => {
            for (const todo of todolist) {
                const note = new Todo(todo.name, todo.project, todo.status);
                note.mount('app');
            }
        })
});