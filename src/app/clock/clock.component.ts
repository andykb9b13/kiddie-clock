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

  constructor() {
    this.getTime();
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
    }, 1000);
    console.log(this.time);
  }
}
