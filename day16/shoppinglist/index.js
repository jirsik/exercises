let list = [{name: 'apples',
            amount: '2 pcs'},
            {name: 'bananas',
            amount: '3 pcs'}];

const constructHtml = (array) => {
    const shoppingList = document.querySelector('.shoppingList');
    shoppingList.innerHTML = '';
    for (let i = 0; i < array.length; i++) {
        const listDOM = document.createElement('div');
        const item = array[i];
        let done = '';
        if (item.done) {
            done = 'crossed';
        }
        listDOM.innerHTML = `<span class="name pointer ${done}">${item.name}</span><span><span class="amount ${done}">${item.amount} </span><span id="delete${i}" class="pointer danger"> X</span></span>`;
        listDOM.querySelector(`#delete${i}`).addEventListener('click', (event) => {
            const sender = event.target;
            const indexToDelete = sender.id[sender.id.length-1];
            list.splice(indexToDelete, 1);
            constructHtml(list);
        });
        listDOM.querySelector('.name').addEventListener('click', (event) => {
            const sender = event.target;
            if (item.done) {
                item.done = false;
                sender.classList.toggle('crossed');
                listDOM.querySelector('.amount').classList.toggle('crossed');
            } else {
                item.done = true;
                sender.classList.toggle('crossed');
                listDOM.querySelector('.amount').classList.toggle('crossed');
            }
        });
        shoppingList.appendChild(listDOM);
    }
};

const addEvent = () => {
    if (document.querySelector('#itemName').value !== '') {
        const itemName = document.querySelector('#itemName');
        const itemAmount = document.querySelector('#itemAmount');
        const newItem = {name: itemName.value, amount: itemAmount.value};
        list.push(newItem);
        constructHtml(list);
        itemName.value = '';
        itemAmount.value = '';
    } else {
        alert('Please enter the name of item');
    }
};

document.addEventListener('DOMContentLoaded', () => {
    constructHtml(list);
    const button = document.querySelector('#itemAdd');
    button.addEventListener('click', addEvent);
});


