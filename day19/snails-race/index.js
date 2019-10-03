document.addEventListener('DOMContentLoaded', () => {
  const racetrack = document.querySelector('#racetrack');
  const racers = 16;
  let snails = [];
  
  for (let i=0; i < racers; i++) {
    fetch(`http://bootcamp.podlomar.org/api/snails/${racers}`)
      .then(response => response.json())
      .then(snailInfo => {
        const snail = new Snail(snailInfo[i].name, snailInfo[i].color, snailInfo[i].velocity);
        snail.mount(racetrack);
        // snail.element.style.top = `${i * 150 + 10}px`; 
        snails[i] = snail;
      });
  


  }
  
  

  document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
      console.log('RACE!');
      for (snail of snails) {
        snail.start();
      }
    }
  });
})