const showMessage = () => {
    const paragraph = document.querySelector('#secretText');
    paragraph.textContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos quis maiores qui ipsam deserunt eos dolorem adipisci perspiciatis cupiditate nostrum?';
};

const hideMessage = () => {
    const paragraph = document.querySelector('#secretText');
    paragraph.textContent = '';
};

document.addEventListener('DOMContentLoaded', () => {
    const padlock = document.querySelector('#padlock');
    padlock.addEventListener('mouseenter', showMessage);
    padlock.addEventListener('mouseleave', hideMessage);
});