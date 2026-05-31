// ADD THIS TO THE VERY BOTTOM OF script.js

/* WORK SLIDER */

const track = document.getElementById('workTrack');

const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

nextBtn.addEventListener('click', () => {

  track.scrollBy({
    left: 380,
    behavior: 'smooth'
  });

});

prevBtn.addEventListener('click', () => {

  track.scrollBy({
    left: -380,
    behavior: 'smooth'
  });

});

/* AUTO SLIDE */

setInterval(() => {

  if (
    track.scrollLeft + track.clientWidth
    >=
    track.scrollWidth - 5
  ) {

    track.scrollTo({
      left: 0,
      behavior: 'smooth'
    });

  } else {

    track.scrollBy({
      left: 380,
      behavior: 'smooth'
    });

  }

}, 3500);