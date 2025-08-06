function createSlider(sliderContainerSelector) {
    let interval;

    function startSlideshow() {
        const sliderContainer = document.querySelector(sliderContainerSelector);
        sliderContainer.style.animationPlayState = 'running';
    }

    function stopSlideshow() {
        const sliderContainer = document.querySelector(sliderContainerSelector);
        sliderContainer.style.animationPlayState = 'paused';
    }

    // Initialize the slider
    startSlideshow();

    // Pause slideshow on hover
    const sliderContainer = document.querySelector(sliderContainerSelector);
    sliderContainer.addEventListener('mouseover', stopSlideshow);
    sliderContainer.addEventListener('mouseout', startSlideshow);
}

// Create sliders for reviews
createSlider('.slider-reviews');