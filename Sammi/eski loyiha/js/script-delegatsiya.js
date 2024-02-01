'use strict';

const wrapper = document.querySelector('.btn-block'),
btns = document.querySelectorAll('button')

btns[0].addEventListener('click',() => {
    btns[1].classList.toggle('red')
})
wrapper.addEventListener('click', (event) => {
    if(event.target&&event.target.classList.contains('red')){
        console.log('btn click');
    }
})


const btn =document.createElement('button')
btn.classList.add('red');
wrapper.appendChild(btn)