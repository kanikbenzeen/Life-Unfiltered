"use strict";
// Select all slides
const slides = document.querySelectorAll(".slide");

// loop through slides and set each slides translateX
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

// select next slide button
const nextSlide = document.querySelector(".btn-next");

// current slide counter
let curSlide = 0;
// maximum number of slides
let maxSlide = slides.length - 1;



// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");
var title = document.getElementById("title");
// var content = document.getElementById("content");
// var footer = document.getElementById("footer");


// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    if (window.pageYOffset >= 200) {
      title.classList.add("move");
    } else {
      title.classList.remove("move");
    }
  } else {
    header.classList.remove("sticky");
  }
}

// function parallex(){
//   if (window.pageYOffset >= 800) {
//     content.classList.add("content");
//     footer.classList.add("footer")
//   } else {
//     content.classList.remove("content");
//     footer.classList.remove("footer")
//   }
// }


// add event listener and navigation functionality
nextSlide.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (curSlide === maxSlide) {
    curSlide==1
  } else {
    curSlide++;
  }

  //   move slide by -100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

// select next slide button
const prevSlide = document.querySelector(".btn-prev");

// add event listener and navigation functionality
prevSlide.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  //   move slide by 100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});





// my changes


//Selector
const $ = (selector) => document.querySelector(selector);

//Buttons
const buttons = document.getElementsByClassName('btn');

//Command method
const command = (role = null, value = null) => {
		if(role) document.execCommand(role, false, value);
};

//Method
for(const btn of buttons){
	btn.addEventListener('click', function(){
		const role = this.dataset['role'],
								value = this.dataset['value'] || null;
		command(role, value);
	});
};

//Dark Mode
const toggle = $('#toggle'),
						rich = $('#rich-text');

toggle.addEventListener('change', () => {
	rich.classList.toggle('dark');
});

//Colors
const btn_color = $('#color'),
						input_color = $('#input-color'),
						btn_bg = $('#bg'),
						input_bg = $('#input-bg');

//Pop up
btn_color.addEventListener('click', function(e){
	if(e.target != input_color)
	this.querySelector('.pop-up').classList.toggle('active');
});

btn_bg.addEventListener('click', function(e){
	if(e.target != input_bg)
	this.querySelector('.pop-up').classList.toggle('active');
});

//Color method
input_color.addEventListener('input', function(){
	const color = this.value;
	command('foreColor', color);
});

//Bg color method
input_bg.addEventListener('input', function(){
	const bg = this.value;
	command('backColor', bg);
});

//Link
const link = $('#link'),
						unlink = $('#unlink');

//Link method
link.addEventListener('click', () => {
	const url = prompt('Digite uma URL válida', 'https://');
	if(url && url != 'https://' && url != 'http://') command('createLink', url);
});

//Unlink method
unlink.addEventListener('click', () => {
	command('unlink');
});

