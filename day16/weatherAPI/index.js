let url = 'http://api.openweathermap.org/data/2.5/forecast?q=prague&APPID=bafccbc047d50950a14c104424c06d60';

fetch(url)
.then(res => res.json())
.then((out) => {
  console.log(out);
})
.catch(err => { throw err });