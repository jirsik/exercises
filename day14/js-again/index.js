const title = document.querySelector('#title');
const btn = document.querySelector('#my-btn');
const rewrite = () => {
    title.textContent = 'Hello';
    title.className = 'heading';
}

btn.addEventListener('click', rewrite);

const change = () => {
    switch (title.textContent) {
        case '|': title.textContent = '/';
            break;
        case '/': title.textContent = '-';
            break;
        case '-': title.textContent = '\\';
            break;
        case '\\' : title.textContent = '|';
            break;
        default: title.textContent = '|';
    }

}

setInterval(change, 200);