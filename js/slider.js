let slideIndex = 0; // Initialize slide index
showSlides(); // Call function to start slideshow

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides"); // Get all elements with class 'mySlides'

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Increment slide index and loop back to the first slide if necessary
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Display the current slide
    slides[slideIndex - 1].style.display = "block";

    // Call showSlides function again after a delay (e.g., 3000ms for 3 seconds)
    setTimeout(showSlides, 3000);
}
