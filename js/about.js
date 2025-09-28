// back to top


let oldValue = 0
let newValue = 0
let backto = document.querySelector('.back_to_top');
window.addEventListener('scroll', (e) => {
  newValue = window.pageYOffset;
  if (oldValue < newValue) {
     backto.classList.add('animatefixedbtn');
  } else if (oldValue > newValue) {
    backto.classList.remove('animatefixedbtn');
  }
  oldValue = newValue;
});




let ham = document.getElementById("hamburger");
let line1 = document.getElementById("line-1");
let line2 = document.getElementById("line-2");
let open = document.getElementById("menuopen");
let close = document.getElementById("menuclose");
let navlist = document.getElementById("navlist");
let trans = document.getElementById("trans-1");
let listlink = document.getElementsByClassName("uptrans");
let allh1 = document.getElementsByTagName("h2");
let mouseouter = document.getElementById("mouse-outer");
let mousescroll = document.getElementById("mouse-scroll");



let sectime = 2000;
let outerms;
let scrollms;
let clearscrollms;

outerms = () => {
  mouseouter.classList.add("mouse-outer");
  scrollms();
};

scrollms = () => {
  setTimeout(() => {
    mouseouter.classList.remove("mouse-outer");
    mousescroll.classList.add("mouse-scroll");

    clearscrollms();
  }, sectime);
};

clearscrollms = () => {
  setTimeout(() => {
    mousescroll.classList.remove("mouse-scroll");
    outerms();
  }, 4500);
};
outerms();

ham.onclick = () => {
  line1.classList.toggle("rotate1");
  line2.classList.toggle("rotate2");

  open.classList.toggle("openmenu");
  close.classList.toggle("closemenu");
  navlist.classList.toggle("openlist");

  for (let i = 0; i < listlink.length; i++) {
    listlink[i].classList.toggle("slideup");
  }
};


let track = document.querySelector(".testimonial_slider_mask");
let slide = Array.from(track.children);
let dots = document.querySelector(".dots");
let dot = Array.from(dots.children);

//align cards in one line

let slideWidth = slide[0].getBoundingClientRect().width;
// console.log(slideWidth);

slide.forEach((e, i) => {
  e.style.left = slideWidth * i + "px";
});

let moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = `translateX(-${targetSlide.style.left})`;
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

// required with for moving to the next slide

dots.onclick = (e) => {
  let targetDot = e.target.closest("div");
  if (!targetDot) return;

  let currentSlide = track.querySelector(".current-slide");
  let currentDot = dots.querySelector(".current-slide");

  let targetIndex = dot.findIndex((dot) => dot === targetDot);
  const targetSlide = slide[targetIndex];



  moveToSlide(track, currentSlide, targetSlide);
};



let graphlines = document.querySelectorAll('.skill_graph_line');
let main = document.getElementById('main');

window.onscroll = () => {

  const sectionpos = main.getBoundingClientRect().top;
  const screenpos = window.innerHeight;
  if (sectionpos + 400 < screenpos) {

    graphlines.forEach((e) => {
      e.style.width = e.getAttribute('data-width') + "%";
    });

  } else {
    graphlines.forEach((e) => {
      e.style.width = 0 + "%";
    })
  }

}


let cartclose = document.getElementById('close-btn-cart');
let containercart = document.getElementById('cart-container');
let cart1 = document.getElementById('cart-1');
let cart2 = document.getElementById('cart-2');
  cartclose.onclick = () => {
      containercart.classList.add('close-click-cart');
      containercart.classList.remove('open-click_cart');
  }

  cart1.onclick = () => {
       
       containercart.classList.add('open-click_cart');
  }

  cart2.onclick = () => {
    containercart.classList.add('open-click_cart');
}
