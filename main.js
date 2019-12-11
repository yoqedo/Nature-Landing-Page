
const bgimg = document.querySelector('.backgroundimg');
const button = document.querySelector('.btn');
const texth1 = document.querySelector('.text');
const textp = document.querySelector('.paragr');
const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');

//Mouseover by Hover the Button
button.addEventListener('mouseover', function(){
    bgimg.classList.add('backgroundscale');
    texth1.classList.add('blurtext');
    textp.classList.add('blurtext');
    box1.classList.add('blurtext');
    box2.classList.add('blurtext');
    box3.classList.add('blurtext');
})

//Mouseout by leave the Button
button.addEventListener('mouseout', function(){
    bgimg.classList.remove('backgroundscale');
    texth1.classList.remove('blurtext');
    textp.classList.remove('blurtext');
    box1.classList.remove('blurtext');
    box2.classList.remove('blurtext');
    box3.classList.remove('blurtext');
})
