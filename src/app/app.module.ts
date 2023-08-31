import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClockComponent } from './clock/clock.component';
import { HeaderComponent } from './header/header.component';
import { WeatherComponent } from './weather/weather.component';

@NgModule({
  declarations: [AppComponent, ClockComponent, HeaderComponent, WeatherComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
