let list = [{name: 'apples',
            amount: '2 pcs'},
            {name: 'bananas',
            amount: '3 pcs'}];


const deleteEvent = (event) => { //index počítá pouze s items 0-9
    const sender = event.target;
    const indexToDelete = sender.id[sender.id.length-1];
    list.splice(indexToDelete, 1);
    constructHtml(list);
};

const constructHtml = (array) => {
    const shoppingList = document.querySelector('.shoppingList');
    shoppingList.innerHTML = '';
    let numberOfItems = 0;
    for (const item of array) {
        shoppingList.innerHTML += `<div><span>${item.name}</span><span>${item.amount} <span id="delete${numberOfItems}"> X</span></span></div>`;
        numberOfItems++;
    }
    for (i = 0; i < numberOfItems; i++) {
        document.querySelector(`#delete${i}`).addEventListener('click', deleteEvent);
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


