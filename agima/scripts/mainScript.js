import { Slider } from './slider.js';

const slider = document.querySelector('.slider-container');

const sliderSetup = 
{
  slider: slider,
  visibleNum: 1,
  autoScroll: false,
  paginations: false,
  arrows: true,
  slideTransition: 1,
  autoScrollTime: 3,
  paginationStatic: false,
  infinity: false,
  opacity: false,
}

const sliderObj = new Slider(sliderSetup);