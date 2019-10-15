import React from 'react';
import ReactDOM from 'react-dom';

import Headline from './headline/headline.jsx';
import Week from './week-forecast/week.jsx';
import Day from './day-forecast/day.jsx';
import './index.scss';
import './index.html';

const forecast = [
  {
    weekday: 'Mon',
    weather: 'cloudy',
    tempDay: 18,
    tempNight: 11,
  },
  {  
    weekday: 'Tue',
    weather: 'partly-cloudy',
    tempDay: 21,
    tempNight: 15,
  },
  {  
    weekday: 'Wed',
    weather: 'rainy',
    tempDay: 8,
    tempNight: 1,
  },
  {  
    weekday: 'Thu',
    weather: 'snowy',
    tempDay: -2,
    tempNight: -7,
  },
  {  
    weekday: 'Fri',
    weather: 'stormy-rain',
    tempDay: 28,
    tempNight: 21,
  },
  {  
    weekday: 'Sat',
    weather: 'stormy',
    tempDay: 35,
    tempNight: 27,
  },
  {  
    weekday: 'Sun',
    weather: 'sunny',
    tempDay: 28,
    tempNight: 22,
  },
];

class App extends React.Component {
  render() {
    return (
      <>
        <Headline
          headline = "Weekly Weather Forecast" 
        />
        <Week
          content = {
            forecast.map(daily => (
              <Day
                weekday = {daily.weekday}
                weather = {daily.weather}
                tempDay = {daily.tempDay}
                tempNight = {daily.tempNight}
              />
            ))
          }
        />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
