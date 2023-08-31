import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css'],
})
export class ClockComponent {
  time: Date;
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  seconds: number;
  dayName: string;
  dayNames: string[] = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  secondStyle: string;
  minuteStyle: string;
  hourStyle: string;

  // add an alarm function
  // change the backround depending on the time of day
  // change the style of the clock

  constructor() {
    this.getTime();
  }

  setNumColor(num: number) {
    const lastDigit = num % 10; // Get the last digit of the number

    switch (lastDigit) {
      case 0:
        return 'zero';
      case 1:
        return 'one';
      case 2:
        return 'two';
      case 3:
        return 'three';
      case 4:
        return 'four';
      case 5:
        return 'five';
      case 6:
        return 'six';
      case 7:
        return 'seven';
      case 8:
        return 'eight';
      case 9:
        return 'nine';
      default:
        return ''; // Handle other cases if needed
    }
  }

  parseDay(input: number) {
    this.dayName = this.dayNames[input];
  }

  getTime() {
    setInterval(() => {
      this.time = new Date();
      this.year = this.time.getFullYear();
      this.month = this.time.getMonth();
      this.day = this.time.getDay();
      this.hour = this.time.getHours();
      this.minute = this.time.getMinutes();
      this.seconds = this.time.getSeconds();
      this.parseDay(this.day);
      this.secondStyle = this.setNumColor(this.seconds);
      this.minuteStyle = this.setNumColor(this.minute);
      this.hourStyle = this.setNumColor(this.hour);
    }, 1000);
  }
}
