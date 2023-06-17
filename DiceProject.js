// player 1 
// generate randome numbers.
let randomnumber1 = Math.ceil(Math.random()* 6);
// console.log(randomnumber1);
let randomdiceimage = 'dice' + randomnumber1 + '.jpeg';
// we need to get The Image source
let randomimagesource = 'images/' + randomdiceimage;
let image1 = document.querySelectorAll('img')[0];
image1.setAttribute('src', randomimagesource)
