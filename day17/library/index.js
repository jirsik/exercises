const library = [{title: 'HTML for dumies',
                author: ['A. Smith'],
                pages: 10,
                year: 1900,
                home: false,
                available: true},

                {title: 'CSS for dumies',
                author: ['A. Smith', 'B.Smith'],
                pages: 100,
                year: 2019,
                home: true,
                available: true},

                {title: 'JS for dumies',
                author: ['A. Smith'],
                pages: 500,
                year: 2005,
                home: true,
                available: true},

                {title: 'Php for dumies',
                author: ['B. Smith'],
                pages: 20,
                year: 2100,
                home: true,
                available: true},

                {title: 'GIT for dumies',
                author: ['B. Smith', 'S. Smith', 'C.Smith'],
                pages: 1110,
                year: 2000,
                home: false,
                available: true},];

const show = (array) => {
    const list = document.querySelector('.list');
    for (const item of array) {
        const book = document.createElement('div');
        if (item.home === false || item.available === false) {
            book.innerHTML = (`title: ${item.title}<br>author: ${item.author}<br>pages: ${item.pages}<br>year: ${item.year}<br><br><button disabled>borrow</button>`);
        } else {
            book.innerHTML = (`title: ${item.title}<br>author: ${item.author}<br>pages: ${item.pages}<br>year: ${item.year}<br><br><button>borrow</button>`);
        }
        if (item.home === false) {
            book.innerHTML += '<br>note: Available only in library';
        }
        if (item.available === false) {
            book.innerHTML += '<br>note: This title is borrowed at the moment';
        }
        list.appendChild(book);
    }
};

document.addEventListener('DOMContentLoaded', ()=>{
    show(library);
});