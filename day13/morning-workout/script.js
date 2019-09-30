let a000256784 = 790;
let a000986056 = 5600;
let a001546238 = 78065;
let a030987456 = 120910;
let withdraw;
let yourAccount = prompt('Your account number');
let action;

if ( yourAccount === '000256784') {
    checkAction(a000256784);
} else if ( yourAccount === '000986056') {
    checkAction(a000986056);
}   else if ( yourAccount === '001546238') {
    checkAction(a001546238);
} else if ( yourAccount === '030987456') {
    checkAction(a030987456);
} else {
    document.write('unknown account');
}

function checkAction(activeAccount) {
    action = prompt('Action:');
    if (action === 'balance') {
        document.write(activeAccount);
    } else if (action === 'withdraw') {
        withdraw = parseFloat(prompt('Amount of many to withdraw'));
        document.write('You have ' + (activeAccount - withdraw) + ' euros left.');
    } else {
        document.write('unknown action');
    }
}
