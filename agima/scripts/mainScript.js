import { Slider } from './slider.js';

/* +++ === Slider === +++*/
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
/* --- === Slider === ---*/

/* +++ === Header === +++*/
const button = document.querySelector('.button');

button.addEventListener('click', () =>
{
  const header = document.querySelector('.header');
  header.classList.toggle('header--active');

  const main = document.querySelector('.main');
  main.classList.toggle('main__is-header--active');
  main.classList.toggle('main--active');
})
/* --- === Header === ---*/

/* +++ === Progress bar === +++*/
function progressBar() 
{
  // Узнаем на сколько страница прокручена
  const scroll = document.body.scrollTop || document.documentElement.scrollTop;
  // Узнаем высоту всей страницы
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  // Получаем в % на сколько прокручена страница
  const scrolled = scroll / height * 100;

  // Подставляем % прокрутки в ширину нашей линии
  document.querySelector('.progress-bar__line').style.width = scrolled + '%';
}

// Запускаем функцию, когда пользователь скролит
window.addEventListener('scroll', progressBar);
/* --- === Progress bar === ---*/

/* +++ === Navigation backlight === +++*/
function getId(link)
{
  return link.getAttribute('href').replace('#', '');
}

const observer = new IntersectionObserver((entries) =>
{
  entries.forEach((entry) =>
  {
    if(entry.isIntersecting)
    {
      document.querySelectorAll('.content-item').forEach((link) =>
      {
        link.querySelector('.item-link__text').classList.toggle(
          'item-link__text--active', 
          getId(link) === entry.target.id
        )
      })
    }
  })
}, 
{
  threshold: 0.7,
});

document.querySelectorAll('.section').forEach((section) => observer.observe(section))

document.querySelector('.content-list').addEventListener('click', (event) =>
{
  if(event.target.classList.contains('content-item'))
  {
    event.preventDefault();

    const id = getId(event.target);

    window.scrollTo(
      {
        top: document.getElementById(id).offsetTop,
        behavior: 'smooth',
      }
    );
  }
});
/* --- === Navigation backlight === ---*/