
// Navigation
const nav = document.getElementById('nav');
const menuIcon = document.querySelector('#menu-animation');

function toggleMenu() {
    nav.classList.toggle('active');
    menuIcon.classList.toggle('active')

}


function hideMenu() {
    nav.classList.remove('active');
    menuIcon.classList.remove('active')

}

// SlideShow-------------------------------------------------------------------------------

let currentImageIndex = 0;
const images = document.querySelectorAll('.slide');

function switchImage() {
  images[currentImageIndex].classList.remove('active');
  currentImageIndex = (currentImageIndex + 1) % images.length;
  images[currentImageIndex].classList.add('active');
}

setInterval(switchImage, 5000)

// Banner ----------------------------

const bannerContent = document.getElementById('bannerContent')
let messageHTML = '<span class="contact-message">Contact us at yomi.olatunji@dasimenstechltd.com - We\' re here to help!</span>';
let repeatedMessage = messageHTML.repeat(10);

// Set the RepeatedMessage as the Content..
bannerContent.innerHTML = repeatedMessage + repeatedMessage;// 
