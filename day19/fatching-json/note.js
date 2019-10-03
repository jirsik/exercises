class Todo {
    constructor (name, project, status) {
        this.name = name;
        this.project = project;
        this.status = status;
    }

    render() {
        this.element = document.createElement('div');
        this.element.className = 'todo';
        this.element.innerHTML = `<h3 id="name">${this.name}</h3><h4 id="project">${this.project}</h4><h4 id="status">${this.status}</h4>`;
    }

    mount(destination) {
        let parent = document.querySelector(`#${destination}`);
        this.render();
        parent.appendChild(this.element);
    }
}