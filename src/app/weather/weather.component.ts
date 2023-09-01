import { Component } from '@angular/core';
import axios from 'axios';
import { environment } from '../../environments/environment';

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
  apiKey: string = environment.apiKey;

  constructor() {
    this.getWeather();
  }

  async getWeather() {
    // const response = await axios.get(
    //   `http://dataservice.accuweather.com/currentconditions/v1/32981${this.apiKey}`
    // );
    // this.weatherTitle = response.data[0].WeatherText;
    // this.currentTemp = response.data[0].Temperature.Imperial.Value;

    const weatherObj = JSON.parse(localStorage.getItem('weather'));
    this.weatherTitle = weatherObj.data[0].WeatherText;
    this.currentTemp = weatherObj.data[0].Temperature.Imperial.Value;
    this.iterations++;
  }
}
