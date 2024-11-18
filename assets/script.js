const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const services = document.querySelector('.menu-services');
let open = false;

document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slider img');
    const slideNav = document.querySelectorAll('.slider-nav a');
    let currentIndex = 0;
    const totalSlides = slides.length;
    const intervalTime = 2500; 

    function showSlide(index) {
        const slideWidth = slides[index].clientWidth;
        slider.scrollTo({
            left: slideWidth * index,
            behavior: 'smooth'
        });
        slideNav.forEach(nav => nav.classList.remove('active'));
        slideNav[index].classList.add('active');
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    let slideInterval = setInterval(nextSlide, intervalTime);

    slideNav.forEach((nav, index) => {
        nav.addEventListener('click', (event) => {
            event.preventDefault();
            clearInterval(slideInterval);
            showSlide(index);
            currentIndex = index;
            slideInterval = setInterval(nextSlide, intervalTime);
        });
    });

    slideNav[0].classList.add('active');
});

document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider1');
    const slides = document.querySelectorAll('.slider1 img');
    const slideNav = document.querySelectorAll('.slider-nav1 a');
    let currentIndex = 0;
    const totalSlides = slides.length;
    const intervalTime = 5000; 

    function showSlide(index) {
        const slideWidth = slides[index].clientWidth;
        slider.scrollTo({
            left: slideWidth * index,
            behavior: 'smooth'
        });
        slideNav.forEach(nav => nav.classList.remove('active'));
        slideNav[index].classList.add('active');
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    let slideInterval = setInterval(nextSlide, intervalTime);

    slideNav.forEach((nav, index) => {
        nav.addEventListener('click', (event) => {
            event.preventDefault();
            clearInterval(slideInterval);
            showSlide(index);
            currentIndex = index;
            slideInterval = setInterval(nextSlide, intervalTime);
        });
    });

    slideNav[0].classList.add('active');
});

document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider2');
    const slides = document.querySelectorAll('.slider2 img');
    const slideNav = document.querySelectorAll('.slider-nav2 a');
    let currentIndex = 0;
    const totalSlides = slides.length;
    const intervalTime = 3000; 

    function showSlide(index) {
        const slideWidth = slides[index].clientWidth;
        slider.scrollTo({
            left: slideWidth * index,
            behavior: 'smooth'
        });
        slideNav.forEach(nav => nav.classList.remove('active'));
        slideNav[index].classList.add('active');
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    let slideInterval = setInterval(nextSlide, intervalTime);

    slideNav.forEach((nav, index) => {
        nav.addEventListener('click', (event) => {
            event.preventDefault();
            clearInterval(slideInterval);
            showSlide(index);
            currentIndex = index;
            slideInterval = setInterval(nextSlide, intervalTime);
        });
    });

    slideNav[0].classList.add('active');
});



hamburger.onclick = function () {
    const chevron = document.querySelector('.fa-chevron-down');
    const submenu = document.querySelectorAll('.hmb-submenu');
    if(open)
        {
            menu.classList.remove('opensubmenu');
            submenu.forEach(function (element) {
                element.style.display = element.style.display === 'flex' ? 'none' : 'flex';
            });
            chevron.classList.toggle('rotate');
            open = false;
        }

    menu.classList.toggle('open');
    hamburger.classList.toggle('change')
}


services.onclick = function () {
    open = open == false ? true : false;
    const submenu = document.querySelectorAll('.hmb-submenu');
    const chevron = document.querySelector('.fa-chevron-down');
    
    submenu.forEach(function (element) {
        element.style.display = element.style.display === 'flex' ? 'none' : 'flex';
    });

    chevron.classList.toggle('rotate');
    menu.classList.toggle('opensubmenu');
    
    
}






document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.home-slider img');
    const homeSlider = document.querySelector('.home-slider');
    const sliderContainer = document.querySelector('.slider-container');
    
    const prevBtn = document.querySelector('.left');
    const nextBtn = document.querySelector('.right');
    
    let current = 1;
    const imgSize = images[0].clientWidth;

    homeSlider.style.transform = `translateX(${-imgSize * current}px)`;

    function updateSliderPosition() {
        homeSlider.style.transition = 'transform 0.5s ease-in-out';
        homeSlider.style.transform = `translateX(${-imgSize * current}px)`;
    }

    function scrollRight() {
        if (current >= images.length - 1) return;
        current++;
        updateSliderPosition();
    }

    function scrollLeft() {
        if (current <= 0) return;
        current--;
        updateSliderPosition();
    }

    prevBtn.addEventListener('click', () => {
        scrollLeft();
        resetAutoScroll();
    });

    nextBtn.addEventListener('click', () => {
        scrollRight();
        resetAutoScroll();
    });

    homeSlider.addEventListener('transitionend', () => {
        if (images[current].classList.contains('first_img')) {
            homeSlider.style.transition = 'none';
            current = 1;
            homeSlider.style.transform = `translateX(${-imgSize * current}px)`;
            setTimeout(() => {
                homeSlider.style.transition = 'transform 0.5s ease-in-out';
            }, 20);
        }
        if (images[current].classList.contains('last_img')) {
            homeSlider.style.transition = 'none';
            current = images.length - 2;
            homeSlider.style.transform = `translateX(${-imgSize * current}px)`;
            setTimeout(() => {
                homeSlider.style.transition = 'transform 0.5s ease-in-out';
            }, 20);
        }
    });

    let autoScrollInterval;
    const scrollIntervalTime = 2000; 
    const autoScrollDelay = 2000;

    function startAutoScroll() {
        stopAutoScroll();
        autoScrollInterval = setInterval(scrollRight, scrollIntervalTime);
    }

    function stopAutoScroll() {
        if (autoScrollInterval) {
            clearInterval(autoScrollInterval);
        }
    }

    function resetAutoScroll() {
        stopAutoScroll();
        setTimeout(startAutoScroll, autoScrollDelay);
    }

    sliderContainer.addEventListener('mousemove', resetAutoScroll);


    startAutoScroll();
});


const wrapper = document.querySelector(".clients-wrapper");
const carousel = document.querySelector(".clients-carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".clients-wrapper i");
const carouselChildrens = [...carousel.children];

let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

const infiniteScroll = () => {
    // If the carousel is at the beginning, scroll to the end
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }

    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}

const autoPlay = () => {
    if(window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
    // Autoplay the carousel after every 2500 ms
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}
autoPlay();

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);





