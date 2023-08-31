import { Component } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent {
  weatherTitle = '';
  highTemp = '';
  lowTemo = '';
  currentTemp = '';
  iterations = 0;
  imagePath: string = '../../assets/06-s.png';
  weatherImg: string = '../../assets/06-s.png';

  constructor() {
    this.getWeather();
  }

  getWeather() {
    const weatherObj = JSON.parse(localStorage.getItem('weather'));
    this.weatherTitle = weatherObj.data[0].WeatherText;
    this.currentTemp = weatherObj.data[0].Temperature.Imperial.Value;
    this.iterations++;
  }
}
