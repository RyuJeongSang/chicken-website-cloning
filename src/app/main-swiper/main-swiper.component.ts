import { Component, ViewEncapsulation } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';

// import Swiper core and required modules
import SwiperCore, { Navigation } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation]);

@Component({
  selector: 'app-main-swiper',
  templateUrl: './main-swiper.component.html',
  styleUrls: ['./main-swiper.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class MainSwiperComponent {}
