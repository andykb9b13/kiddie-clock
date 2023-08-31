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
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  // change colors of the boxes and text based on the numbers being displayed
  // add an alarm function
  // change the backround depending on the time of day

  constructor() {
    this.getTime();
  }

  parseDay() {
    this.dayName = this.dayNames[this.day];
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
      this.parseDay();
    }, 1000);
  }
}
