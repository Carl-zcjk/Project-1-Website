function createSlider(sliderContainerSelector, textSelectors, textArrays) {
    let currentSlide = 0;
    const maxSlides = 2; // Limit slides to 3

    function showSlide(index) {
        const slides = document.querySelectorAll(`${sliderContainerSelector} > div`);
        console.log(`showSlide called for ${sliderContainerSelector} with index: ${index}`);
        console.log(`Number of slides: ${slides.length}`);

        if (slides.length === 0) {
            console.error(`No slides found for selector: ${sliderContainerSelector}`);
            return;
        }

        // Ensure the index stays within bounds (0 to maxSlides or slides.length - 1)
        const clampedIndex = Math.max(0, Math.min(index, Math.min(maxSlides, slides.length - 1)));
        currentSlide = clampedIndex;

        const offset = -currentSlide * 100;
        document.querySelector(sliderContainerSelector).style.transform = `translateX(${offset}%)`;

        // Update the paragraphs dynamically
        textSelectors.forEach((selector, i) => {
            const paragraph = document.querySelector(selector);
            if (paragraph && textArrays[i].length > currentSlide) {
                paragraph.textContent = textArrays[i][currentSlide];
            }
        });
    }

    function moveSlides(step) {
        console.log(`moveSlides called for ${sliderContainerSelector} with step: ${step}`);
        showSlide(currentSlide + step);
    }

    // Initialize the slider
    showSlide(currentSlide);

    return moveSlides;
}

// Define the text for each paragraph
const routeTitles = [
    "Auckland",
    "Christchurch",
    "Queenstown",
];

const routeDescriptions = [
    "About the place - Slide 1",
    "About the place - Slide 2",
    "About the place - Slide 3",
    "About the place - Slide 4"
];

// Select the correct paragraphs inside their respective `.reviews-p-css` containers
const moveSlidesRoutes = createSlider(
    '.slider-routes',
    ['.routes-css > section:nth-of-type(1) .reviews-p-css p', '.routes-css > section:nth-of-type(3) .reviews-p-css p'],
    [routeTitles, routeDescriptions]
);

// Example button event listener
document.querySelector('.next-routes').addEventListener('click', () => {
    moveSlidesRoutes(1);
});

document.querySelector('.prev-routes').addEventListener('click', () => {
    moveSlidesRoutes(-1);
});
