import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'kiddie-clock';
  time: Date;
  hour: number;
  backgroundStyle: string;

  constructor() {
    this.time = new Date();
    this.hour = this.time.getHours();
    this.setBackgroundStyle();
  }

  setBackgroundStyle() {
    if (this.hour >= 7 && this.hour <= 8) {
      this.backgroundStyle = 'sunrise';
    } else if (this.hour >= 9 && this.hour <= 11) {
      this.backgroundStyle = 'morning';
    } else if (this.hour >= 12 && this.hour <= 17) {
      this.backgroundStyle = 'afternoon';
    } else if (this.hour >= 18 && this.hour <= 19) {
      this.backgroundStyle = 'sunset';
    } else if (this.hour >= 20 && this.hour <= 21) {
      this.backgroundStyle = 'evening';
    } else {
      this.backgroundStyle = 'night';
    }
  }
}
