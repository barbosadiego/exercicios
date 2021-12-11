'use strict'

const toggleMenu = ()=> {
  document.querySelector('nav').classList.toggle('active')
}
document.querySelector('.button').addEventListener('click', toggleMenu);
