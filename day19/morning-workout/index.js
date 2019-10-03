document.addEventListener('DOMContentLoaded', () => {
    const app = document.querySelector('#app');
    const timer1 = new Timer(60);
    timer1.mount(app);

    const timer2 = new Timer(120);
    timer2.mount(app);
    console.log(timer1.value);
  });