// Dark mode toggle functionality
const darkModeToggle = document.getElementById('darkModeToggle');
const darkModeIcon = document.getElementById('darkModeIcon');

// Default state (assuming light mode initially)
let isDarkMode = false;

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    isDarkMode = !isDarkMode;

    // Toggle between dark mode and light mode images
    if (isDarkMode) {
        darkModeIcon.src = 'Home/DM.png'; // Path to dark mode image
        darkModeIcon.alt = "Dark Mode Icon";
    } else {
        darkModeIcon.src = 'Home/LM.png'; // Path to light mode image
        darkModeIcon.alt = "Light Mode Icon";
    }
});


let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");

  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }


  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }


  slides[slideIndex - 1].style.display = "block";


  const currentSlide = slides[slideIndex - 1];
  document.querySelector('.textCaption').textContent = currentSlide.getAttribute('data-caption');
}


document.addEventListener("DOMContentLoaded", () => {
  showSlides(slideIndex);


  setInterval(() => {
    plusSlides(1);
  }, 5000);
});