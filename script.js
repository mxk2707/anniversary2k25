let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }

    // Show the current slide
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }

    slides[slideIndex - 1].classList.add("active");

    // Change slide every 3 seconds
    setTimeout(showSlides, 3000);
}

// Start the slideshow
showSlides();
